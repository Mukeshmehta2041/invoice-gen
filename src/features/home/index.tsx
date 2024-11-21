
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, DollarSign, FileText, PieChart, Send } from 'lucide-react'
import { Link } from "react-router-dom"
import { motion } from 'framer-motion'
import { Navbar } from "@/components/navbar"

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

const HomePage = () => {
    return (
        <div className="flex flex-col min-h-screen bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
            <Navbar />
            <main className="flex-1">
                <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
                    <div className="container px-4 md:px-6">
                        <motion.div
                            className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]"
                            initial="initial"
                            animate="animate"
                            variants={stagger}
                        >
                            <motion.div className="flex flex-col justify-center space-y-4" variants={fadeInUp}>
                                <div className="space-y-2">
                                    <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-blue-900 dark:text-blue-100">
                                        Simplify Your Invoicing Process!
                                    </h1>
                                    <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                                        Create, customize, and send invoices instantly. No setup required.
                                    </p>
                                </div>
                                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                                    <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">Get Started Free</Button>
                                    <Button size="lg" variant="outline" className="border-blue-200 text-blue-600 hover:bg-blue-50 dark:border-blue-800 dark:text-blue-400 dark:hover:bg-blue-950">
                                        Learn More
                                    </Button>
                                </div>
                            </motion.div>
                            <motion.div variants={fadeInUp}>
                                {/* <Image
                                    alt="Invoice Generator"
                                    className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last shadow-lg"
                                    height="310"
                                    src="/placeholder.svg"
                                    width="550"
                                /> */}
                            </motion.div>
                        </motion.div>
                    </div>
                </section>
                <section className="w-full py-12 md:py-24 lg:py-32 bg-blue-50 dark:bg-gray-800">
                    <div className="container px-4 md:px-6">
                        <motion.h2
                            className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12 text-blue-900 dark:text-blue-100"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                        >
                            Key Features
                        </motion.h2>
                        <motion.div
                            className="grid gap-6 lg:grid-cols-4"
                            variants={stagger}
                            initial="initial"
                            animate="animate"
                        >
                            {[
                                { icon: FileText, title: "Customizable Templates", description: "Choose from multiple invoice designs." },
                                { icon: CheckCircle, title: "Fast & Easy", description: "Generate an invoice in less than a minute." },
                                { icon: DollarSign, title: "Payment Integration", description: "Accept payments via PayPal, Stripe, etc." },
                                { icon: PieChart, title: "Analytics Dashboard", description: "Track your invoices and payments effortlessly." }
                            ].map((feature, index) => (
                                <motion.div key={index} variants={fadeInUp}>
                                    <Card className="hover:shadow-lg transition-shadow duration-300">
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
                        <motion.h2
                            className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12 text-blue-900 dark:text-blue-100"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                        >
                            How It Works
                        </motion.h2>
                        <motion.div
                            className="grid gap-6 lg:grid-cols-4"
                            variants={stagger}
                            initial="initial"
                            animate="animate"
                        >
                            {[
                                { icon: FileText, title: "1. Enter Details", description: "Add client and service information." },
                                { icon: FileText, title: "2. Customize Invoice", description: "Choose a template and add your logo." },
                                { icon: Send, title: "3. Send or Download", description: "Share invoices via email or download as PDF." },
                                { icon: DollarSign, title: "4. Get Paid", description: "Integrate payment gateways for hassle-free payments." }
                            ].map((step, index) => (
                                <motion.div key={index} variants={fadeInUp} className="flex flex-col items-center space-y-2 border-gray-200 p-4 rounded-lg">
                                    <div className="p-2 bg-blue-100 rounded-full">
                                        <step.icon className="h-6 w-6 text-blue-600" />
                                    </div>
                                    <h3 className="text-xl font-bold text-blue-900 dark:text-blue-100">{step.title}</h3>
                                    <p className="text-sm text-gray-500 dark:text-gray-400 text-center">{step.description}</p>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </section>
                <section className="w-full py-12 md:py-24 lg:py-32 bg-blue-50 dark:bg-gray-800">
                    <div className="container px-4 md:px-6">
                        <motion.h2
                            className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12 text-blue-900 dark:text-blue-100"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                        >
                            What Our Users Say
                        </motion.h2>
                        <motion.div
                            className="grid gap-6 lg:grid-cols-3"
                            variants={stagger}
                            initial="initial"
                            animate="animate"
                        >
                            {[
                                { text: "This invoice generator has saved me hours of work. It's intuitive and professional.", author: "John Doe, Freelance Designer" },
                                { text: "The customizable templates are fantastic. My invoices now match my brand perfectly.", author: "Jane Smith, Small Business Owner" },
                                { text: "The payment integration feature has significantly improved my cash flow. Highly recommended!", author: "Mike Johnson, Consultant" }
                            ].map((testimonial, index) => (
                                <motion.div key={index} variants={fadeInUp}>
                                    <Card className="hover:shadow-lg transition-shadow duration-300">
                                        <CardContent className="flex flex-col space-y-2 p-6">
                                            <p className="text-sm text-gray-500 dark:text-gray-400">"{testimonial.text}"</p>
                                            <p className="font-semibold text-blue-600 dark:text-blue-400">- {testimonial.author}</p>
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </section>
                <section className="w-full py-12 md:py-24 lg:py-32 bg-blue-600 dark:bg-blue-800">
                    <div className="container px-4 md:px-6">
                        <motion.div
                            className="flex flex-col items-center space-y-4 text-center"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                        >
                            <div className="space-y-2">
                                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-white">Ready to simplify your invoicing?</h2>
                                <p className="max-w-[900px] text-blue-100 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                    Join thousands of satisfied users and start creating professional invoices in minutes.
                                </p>
                            </div>
                            <div className="w-full max-w-sm space-y-2">
                                <Button className="w-full bg-white text-blue-600 hover:bg-blue-50" size="lg">
                                    Get Started for Free
                                </Button>
                                <p className="text-xs text-blue-100">
                                    No credit card required. 14-day free trial available.
                                </p>
                            </div>
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

export default HomePage