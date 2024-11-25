'use client'

import { useState, useEffect } from 'react'
import { Navbar } from "@/components/navbar"
import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { DatePicker } from "@/components/ui/date-picker"
import { PlusCircle, Trash2 } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useForm, Controller, useFieldArray } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import jsPDF from "jspdf"

const formatCurrency = (amount: number): string => {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    }).format(amount);
};

interface InvoiceItem {
    id: number
    name: string
    description: string
    quantity: number
    unitPrice: number
    discount: number
    tax: number
}

const invoiceSchema = z.object({
    businessName: z.string().min(1, "Business name is required"),
    businessAddress: z.string().min(1, "Business address is required"),
    businessPhone: z.string().min(1, "Business phone is required"),
    businessEmail: z.string().email("Invalid email address"),
    businessWebsite: z.string().url().optional(),
    businessTaxId: z.string().min(1, "Tax ID is required"),
    invoiceNumber: z.string().min(1, "Invoice number is required"),
    invoiceDate: z.date(),
    dueDate: z.date(),
    paymentTerms: z.string().min(1, "Payment terms are required"),
    customerName: z.string().min(1, "Customer name is required"),
    customerAddress: z.string().min(1, "Customer address is required"),
    customerPhone: z.string().min(1, "Customer phone is required"),
    customerEmail: z.string().email("Invalid email address"),
    customerTaxId: z.string().optional(),
    shippingAddress: z.string().optional(),
    items: z.array(z.object({
        id: z.number(),
        name: z.string().min(1, "Item name is required"),
        description: z.string(),
        quantity: z.number().min(1, "Quantity must be at least 1"),
        unitPrice: z.number().min(0, "Unit price must be non-negative"),
        discount: z.number().min(0, "Discount must be non-negative"),
        tax: z.number().min(0, "Tax must be non-negative")
    })).min(1, "At least one item is required")
})

type InvoiceFormData = z.infer<typeof invoiceSchema>

export const CreateInvoicePage = () => {
    const { control, handleSubmit, watch, formState: { errors } } = useForm<InvoiceFormData>({
        resolver: zodResolver(invoiceSchema),
        defaultValues: {
            items: [{ id: Date.now(), name: '', description: '', quantity: 1, unitPrice: 0, discount: 0, tax: 0 }],
            invoiceDate: new Date(),
            dueDate: new Date()
        }
    })
    const { fields, append, remove } = useFieldArray({
        control,
        name: "items"
    })

    const watchItems = watch("items")
    const [subtotal, setSubtotal] = useState(0)
    const [total, setTotal] = useState(0)

    useEffect(() => {
        const newSubtotal = watchItems.reduce((sum, item) => {
            return sum + (item.quantity * item.unitPrice)
        }, 0)
        setSubtotal(newSubtotal)

        const newTotal = watchItems.reduce((sum, item) => {
            const itemTotal = item.quantity * item.unitPrice
            const discountAmount = itemTotal * (item.discount / 100)
            const taxAmount = (itemTotal - discountAmount) * (item.tax / 100)
            return sum + itemTotal - discountAmount + taxAmount
        }, 0)
        setTotal(newTotal)
    }, [watchItems])

    const onSubmit = (data: InvoiceFormData) => {
        console.log(data)
        generatePDF(data)
    }
    const generatePDF = (data: InvoiceFormData) => {
        try {
            const pdf = new jsPDF({
                orientation: "portrait",
                unit: "mm",
                format: "a4",
            });

            const formatCurrency = (amount: number) => `$${amount.toFixed(2)}`;

            const calculateSubtotal = (items: InvoiceItem[]) =>
                items.reduce((sum, item) => {
                    const itemTotal =
                        item.quantity * item.unitPrice * (1 - item.discount / 100) * (1 + item.tax / 100);
                    return sum + itemTotal;
                }, 0);

            const subtotal = calculateSubtotal(data.items);
            const total = subtotal; // Adjust if additional taxes/fees are applied.

            const setHeader = () => {
                pdf.setFont("helvetica");
                pdf.setFontSize(24);
                pdf.text(data.businessName, 20, 20);
            };

            const setFromSection = () => {
                pdf.setFontSize(12);
                pdf.text("From", 20, 40);
                pdf.setFontSize(10);
                pdf.text(
                    [data.businessName, data.businessEmail, data.businessAddress].filter(Boolean),
                    20,
                    45
                );
            };

            const setClientSection = () => {
                pdf.setFontSize(12);
                pdf.text("Bill to", 20, 70);
                pdf.setFontSize(10);
                pdf.text(
                    [data.customerName, data.customerEmail, data.customerAddress].filter(Boolean),
                    20,
                    75
                );
            };

            const setInvoiceDetails = () => {
                pdf.setFontSize(10);
                pdf.text(`Invoice Number: #${data.invoiceNumber}`, 120, 40);
                pdf.text(
                    `Date: ${new Intl.DateTimeFormat("en-US", {
                        dateStyle: "long",
                    }).format(new Date(data.invoiceDate))}`,
                    120,
                    45
                );
                pdf.text(
                    `Due Date: ${new Intl.DateTimeFormat("en-US", {
                        dateStyle: "long",
                    }).format(new Date(data.dueDate))}`,
                    120,
                    50
                );
            };

            const setItemsHeader = () => {
                pdf.setFontSize(10);
                pdf.setFont("helvetica", "bold");
                pdf.text("Description", 20, 100);
                pdf.text("Quantity", 70, 100);
                pdf.text("Unit Price", 100, 100);
                pdf.text("Discount", 130, 100);
                pdf.text("Tax", 160, 100);
                pdf.text("Total", 180, 100);
                pdf.line(20, 102, 190, 102);
            };

            const addItems = () => {
                pdf.setFont("helvetica", "normal");
                let yPosition = 110;
                data.items.forEach((item) => {
                    const itemTotal =
                        item.quantity * item.unitPrice * (1 - item.discount / 100) * (1 + item.tax / 100);

                    const wrappedText = pdf.splitTextToSize(item.name, 40); // Wrap description if too long.
                    pdf.text(wrappedText, 20, yPosition);
                    pdf.text(item.quantity.toString(), 70, yPosition);
                    pdf.text(formatCurrency(item.unitPrice), 100, yPosition);
                    pdf.text(`${item.discount}%`, 130, yPosition);
                    pdf.text(`${item.tax}%`, 160, yPosition);
                    pdf.text(formatCurrency(itemTotal), 180, yPosition);

                    yPosition += 10 + (wrappedText.length - 1) * 5; // Adjust y for wrapped text.
                });
                return yPosition;
            };

            const addTotalSection = (yPosition: number) => {
                pdf.line(20, yPosition, 190, yPosition);
                pdf.setFont("helvetica", "bold");
                yPosition += 15;
                pdf.text("Subtotal", 130, yPosition);
                pdf.text(formatCurrency(subtotal), 180, yPosition);
                yPosition += 10;
                pdf.text("Total", 130, yPosition);
                pdf.text(formatCurrency(total), 180, yPosition);
            };

            setHeader();
            setFromSection();
            setClientSection();
            setInvoiceDetails();
            setItemsHeader();
            const finalYPosition = addItems();
            addTotalSection(finalYPosition);

            // Open PDF
            pdf.output("dataurlnewwindow");
        } catch (error) {
            console.error("Error generating PDF:", error);
        }
    };

    // const mockData = {
    //     businessName: "Acme Corporation",
    //     businessEmail: "contact@acme.com",
    //     businessAddress: "123 Elm Street, Springfield, USA",
    //     customerName: "John Doe",
    //     customerEmail: "john.doe@example.com",
    //     customerAddress: "456 Oak Avenue, Metropolis, USA",
    //     invoiceNumber: "INV-2024-001",
    //     invoiceDate: new Date("2024-11-25"),
    //     dueDate: new Date("2024-12-05"),
    //     items: [
    //         { name: "Product A", quantity: 2, unitPrice: 50, discount: 10, tax: 5 },
    //         { name: "Product B", quantity: 1, unitPrice: 100, discount: 5, tax: 8 },
    //     ],
    // };

    return (
        <div className="flex flex-col min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
            {/* <Button onClick={() => generatePDF(mockData)}>Test generate</Button> */}
            <Navbar />
            <main className="flex-1 container mx-auto px-4 sm:px-6 lg:px-8 py-8 max-w-7xl">
                <h1 className="text-4xl font-bold mb-8 text-center text-gray-800 dark:text-gray-100">Create Invoice</h1>

                <form onSubmit={handleSubmit(onSubmit)}>
                    <Card className="mb-8">
                        <CardHeader>
                            <CardTitle>Business Information</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div>
                                    <Label htmlFor="businessName">Business Name</Label>
                                    <Controller
                                        name="businessName"
                                        control={control}
                                        render={({ field }) => <Input id="businessName" placeholder="Your Business Name" {...field} />}
                                    />
                                    {errors.businessName && <p className="text-red-500">{errors.businessName.message}</p>}
                                </div>
                                <div>
                                    <Label htmlFor="businessAddress">Address</Label>
                                    <Controller
                                        name="businessAddress"
                                        control={control}
                                        render={({ field }) => <Input id="businessAddress" placeholder="123 Business St, City, Country" {...field} />}
                                    />
                                    {errors.businessAddress && <p className="text-red-500">{errors.businessAddress.message}</p>}
                                </div>
                                <div>
                                    <Label htmlFor="businessPhone">Phone Number</Label>
                                    <Controller
                                        name="businessPhone"
                                        control={control}
                                        render={({ field }) => <Input id="businessPhone" placeholder="+1 234 567 8900" {...field} />}
                                    />
                                    {errors.businessPhone && <p className="text-red-500">{errors.businessPhone.message}</p>}
                                </div>
                                <div>
                                    <Label htmlFor="businessEmail">Email Address</Label>
                                    <Controller
                                        name="businessEmail"
                                        control={control}
                                        render={({ field }) => <Input id="businessEmail" placeholder="contact@yourbusiness.com" type="email" {...field} />}
                                    />
                                    {errors.businessEmail && <p className="text-red-500">{errors.businessEmail.message}</p>}
                                </div>
                                <div>
                                    <Label htmlFor="businessWebsite">Website (optional)</Label>
                                    <Controller
                                        name="businessWebsite"
                                        control={control}
                                        render={({ field }) => <Input id="businessWebsite" placeholder="www.yourbusiness.com" {...field} />}
                                    />
                                    {errors.businessWebsite && <p className="text-red-500">{errors.businessWebsite.message}</p>}
                                </div>
                                <div>
                                    <Label htmlFor="businessTaxId">GST/Tax ID</Label>
                                    <Controller
                                        name="businessTaxId"
                                        control={control}
                                        render={({ field }) => <Input id="businessTaxId" placeholder="Tax ID Number" {...field} />}
                                    />
                                    {errors.businessTaxId && <p className="text-red-500">{errors.businessTaxId.message}</p>}
                                </div>
                            </div>
                        </CardContent>

                        <CardHeader>
                            <CardTitle>Invoice Details</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div>
                                    <Label htmlFor="invoiceNumber">Invoice Number</Label>
                                    <Controller
                                        name="invoiceNumber"
                                        control={control}
                                        render={({ field }) => <Input id="invoiceNumber" placeholder="INV-001" {...field} />}
                                    />
                                    {errors.invoiceNumber && <p className="text-red-500">{errors.invoiceNumber.message}</p>}
                                </div>
                                <div>
                                    <Label>Invoice Date</Label>
                                    <Controller
                                        name="invoiceDate"
                                        control={control}
                                        render={({ field }) => <DatePicker date={field.value} setDate={field.onChange} />}
                                    />
                                    {errors.invoiceDate && <p className="text-red-500">{errors.invoiceDate.message}</p>}
                                </div>
                                <div>
                                    <Label>Due Date</Label>
                                    <Controller
                                        name="dueDate"
                                        control={control}
                                        render={({ field }) => <DatePicker date={field.value} setDate={field.onChange} />}
                                    />
                                    {errors.dueDate && <p className="text-red-500">{errors.dueDate.message}</p>}
                                </div>
                                <div>
                                    <Label htmlFor="paymentTerms">Payment Terms</Label>
                                    <Controller
                                        name="paymentTerms"
                                        control={control}
                                        render={({ field }) => (
                                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                <SelectTrigger id="paymentTerms">
                                                    <SelectValue placeholder="Select payment terms" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="net15">Net 15</SelectItem>
                                                    <SelectItem value="net30">Net 30</SelectItem>
                                                    <SelectItem value="net60">Net 60</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        )}
                                    />
                                    {errors.paymentTerms && <p className="text-red-500">{errors.paymentTerms.message}</p>}
                                </div>
                            </div>
                        </CardContent>

                        <CardHeader>
                            <CardTitle>Billing and Shipping Details</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div>
                                    <Label htmlFor="customerName">Customer Name</Label>
                                    <Controller
                                        name="customerName"
                                        control={control}
                                        render={({ field }) => <Input id="customerName" placeholder="John Doe" {...field} />}
                                    />
                                    {errors.customerName && <p className="text-red-500">{errors.customerName.message}</p>}
                                </div>
                                <div>
                                    <Label htmlFor="customerAddress">Customer Address</Label>
                                    <Controller
                                        name="customerAddress"
                                        control={control}
                                        render={({ field }) => <Input id="customerAddress" placeholder="456 Customer St, City, Country" {...field} />}
                                    />
                                    {errors.customerAddress && <p className="text-red-500">{errors.customerAddress.message}</p>}
                                </div>
                                <div>
                                    <Label htmlFor="customerPhone">Customer Phone</Label>
                                    <Controller
                                        name="customerPhone"
                                        control={control}
                                        render={({ field }) => <Input id="customerPhone" placeholder="+1 234 567 8900" type="tel" {...field} />}
                                    />
                                    {errors.customerPhone && <p className="text-red-500">{errors.customerPhone.message}</p>}
                                </div>
                                <div>
                                    <Label htmlFor="customerEmail">Customer Email</Label>
                                    <Controller
                                        name="customerEmail"
                                        control={control}
                                        render={({ field }) => <Input id="customerEmail" placeholder="customer@email.com" type="email" {...field} />}
                                    />
                                    {errors.customerEmail && <p className="text-red-500">{errors.customerEmail.message}</p>}
                                </div>
                                <div>
                                    <Label htmlFor="customerTaxId">Customer Tax ID (if applicable)</Label>
                                    <Controller
                                        name="customerTaxId"
                                        control={control}
                                        render={({ field }) => <Input id="customerTaxId" placeholder="Customer Tax ID" {...field} />}
                                    />
                                    {errors.customerTaxId && <p className="text-red-500">{errors.customerTaxId.message}</p>}
                                </div>
                            </div>
                            <div className="mt-4">
                                <Label htmlFor="shippingAddress">Shipping Address (if different)</Label>
                                <Controller
                                    name="shippingAddress"
                                    control={control}
                                    render={({ field }) => <Textarea id="shippingAddress" placeholder="Shipping Address" {...field} />}
                                />
                                {errors.shippingAddress && <p className="text-red-500">{errors.shippingAddress.message}</p>}
                            </div>
                        </CardContent>

                        <CardHeader>
                            <CardTitle>Products/Services</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="overflow-x-auto">
                                <table className="w-full">
                                    <thead>
                                        <tr className="border-b dark:border-gray-700">
                                            <th className="text-left p-2">Item</th>
                                            <th className="text-left p-2">Description</th>
                                            <th className="text-left p-2">Quantity</th>
                                            <th className="text-left p-2">Unit Price</th>
                                            <th className="text-left p-2">Discount %</th>
                                            <th className="text-left p-2">Tax %</th>
                                            <th className="text-left p-2">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {fields.map((item, index) => (
                                            <tr key={item.id} className="border-b dark:border-gray-700">
                                                <td className="p-2">
                                                    <Controller
                                                        name={`items.${index}.name`}
                                                        control={control}
                                                        render={({ field }) => <Input placeholder="Item name" {...field} />}
                                                    />
                                                </td>
                                                <td className="p-2">
                                                    <Controller
                                                        name={`items.${index}.description`}
                                                        control={control}
                                                        render={({ field }) => <Input placeholder="Description" {...field} />}
                                                    />
                                                </td>
                                                <td className="p-2">
                                                    <Controller
                                                        name={`items.${index}.quantity`}
                                                        control={control}
                                                        render={({ field }) => <Input type="number" placeholder="Quantity" {...field} onChange={(e) => field.onChange(parseInt(e.target.value))} />}
                                                    />
                                                </td>
                                                <td className="p-2">
                                                    <Controller
                                                        name={`items.${index}.unitPrice`}
                                                        control={control}
                                                        render={({ field }) => <Input type="number" placeholder="Unit Price" {...field} onChange={(e) => field.onChange(parseFloat(e.target.value))} />}
                                                    />
                                                </td>
                                                <td className="p-2">
                                                    <Controller
                                                        name={`items.${index}.discount`}
                                                        control={control}
                                                        render={({ field }) => <Input type="number" placeholder="Discount %" {...field} onChange={(e) => field.onChange(parseFloat(e.target.value))} />}
                                                    />
                                                </td>
                                                <td className="p-2">
                                                    <Controller
                                                        name={`items.${index}.tax`}
                                                        control={control}
                                                        render={({ field }) => <Input type="number" placeholder="Tax %" {...field} onChange={(e) => field.onChange(parseFloat(e.target.value))} />}
                                                    />
                                                </td>
                                                <td className="p-2">
                                                    <Button variant="destructive" size="sm" onClick={() => remove(index)}>
                                                        <Trash2 className="h-4 w-4" />
                                                    </Button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                            <Button onClick={() => append({ id: Date.now(), name: '', description: '', quantity: 1, unitPrice: 0, discount: 0, tax: 0 })} className="mt-4">
                                <PlusCircle className="mr-2 h-4 w-4" /> Add Item
                            </Button>
                        </CardContent>

                        <CardHeader>
                            <CardTitle>Summary</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="flex flex-col items-end">
                                <div className="grid grid-cols-2 gap-4 w-full max-w-md">
                                    <Label>Subtotal</Label>
                                    <Input value={formatCurrency(subtotal)} readOnly className="text-right" />
                                    <Label>Total</Label>
                                    <Input value={formatCurrency(total)} readOnly className="text-right font-bold" />
                                </div>
                            </div>
                        </CardContent>

                        <CardContent className="flex justify-end space-x-4 mt-8">
                            <Button type="submit" variant="default" className="w-32">Generate Invoice</Button>
                        </CardContent>

                    </Card>
                </form>
            </main>

            <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t border-blue-100 dark:border-gray-700">
                <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 InvoiceGen. All rights reserved.</p>
                <nav className="sm:ml-auto flex gap-4 sm:gap-6">
                    <Link className="text-xs text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 hover:underline underline-offset-4" to="#">
                        Terms of Service
                    </Link>
                    <Link className="text-xs text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 hover:underline underline-offset-4" to="#">
                        Privacy
                    </Link>
                </nav>
            </footer>
        </div>
    )
}

