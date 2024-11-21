import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { FileText, CheckCircle, DollarSign, PieChart, Send, Globe, Lock, Clock } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Navbar } from '@/components/navbar'

const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
}

const stagger = {
    animate: {
        transition: {
            staggerChildren: 0.1
        }
    }
}

export const FeaturesPage = () => {
    return (
        <div className="flex flex-col min-h-screen bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
            <Navbar />
            <main className="flex-1">
                <section className="w-full py-12 md:py-24 lg:py-32">
                    <div className="container px-4 md:px-6">
                        <motion.div
                            className="flex flex-col items-center space-y-4 text-center"
                            initial="initial"
                            animate="animate"
                            variants={stagger}
                        >
                            <motion.h1
                                className="text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none text-blue-900 dark:text-blue-100"
                                variants={fadeInUp}
                            >
                                Our Features
                            </motion.h1>
                            <motion.p
                                className="max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400"
                                variants={fadeInUp}
                            >
                                Discover the powerful tools that make InvoiceGen the preferred choice for businesses worldwide.
                            </motion.p>
                        </motion.div>
                    </div>
                </section>
                <section className="w-full py-12 md:py-24 lg:py-32 bg-blue-50 dark:bg-gray-800">
                    <div className="container px-4 md:px-6">
                        <motion.div
                            className="grid gap-6 lg:grid-cols-3"
                            variants={stagger}
                            initial="initial"
                            animate="animate"
                        >
                            {[
                                { icon: FileText, title: "Customizable Templates", description: "Choose from a wide range of professional invoice templates or create your own to match your brand." },
                                { icon: CheckCircle, title: "Easy-to-Use Interface", description: "Our intuitive dashboard makes creating and managing invoices a breeze, even for beginners." },
                                { icon: DollarSign, title: "Multiple Payment Options", description: "Integrate with popular payment gateways to offer your clients various payment methods." },
                                { icon: PieChart, title: "Comprehensive Reporting", description: "Get insights into your business with detailed financial reports and analytics." },
                                { icon: Send, title: "Automated Reminders", description: "Set up automatic payment reminders to improve your cash flow and reduce late payments." },
                                { icon: Globe, title: "Multi-Currency Support", description: "Create invoices in different currencies to cater to your international clients." },
                                { icon: Lock, title: "Secure Data Storage", description: "Your financial data is encrypted and securely stored, ensuring maximum protection." },
                                { icon: Clock, title: "Time Tracking", description: "Built-in time tracking feature for service-based businesses to easily bill for their time." }
                            ].map((feature, index) => (
                                <motion.div key={index} variants={fadeInUp}>
                                    <Card className="h-full">
                                        <CardContent className="flex flex-col items-center space-y-2 p-6">
                                            <feature.icon className="h-12 w-12 text-blue-600 dark:text-blue-400" />
                                            <h3 className="text-xl font-bold text-blue-900 dark:text-blue-100">{feature.title}</h3>
                                            <p className="text-sm text-gray-500 dark:text-gray-400 text-center">{feature.description}</p>
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </section>
                <section className="w-full py-12 md:py-24 lg:py-32">
                    <div className="container px-4 md:px-6">
                        <motion.div
                            className="flex flex-col items-center space-y-4 text-center"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                        >
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-blue-900 dark:text-blue-100">Ready to streamline your invoicing?</h2>
                            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                                Join thousands of satisfied users and experience the power of InvoiceGen today.
                            </p>
                            <Button className="bg-blue-600 hover:bg-blue-700 text-white">Get Started for Free</Button>
                        </motion.div>
                    </div>
                </section>
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

