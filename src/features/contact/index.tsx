import { Navbar } from '@/components/navbar'
import { Button } from "@/components/ui/button"
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { motion } from 'framer-motion'
import { Mail, MapPin, Phone } from 'lucide-react'
import { Link } from 'react-router-dom'

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

export default function ContactPage() {
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
                                Contact Us
                            </motion.h1>
                            <motion.p
                                className="max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400"
                                variants={fadeInUp}
                            >
                                We're here to help. Reach out to us for any questions or support.
                            </motion.p>
                        </motion.div>
                    </div>
                </section>
                <section className="w-full py-12 md:py-24 lg:py-32 bg-blue-50 dark:bg-gray-800">
                    <div className="container px-4 md:px-6">
                        <div className="grid gap-6 lg:grid-cols-2">
                            <motion.div
                                className="space-y-4"
                                initial={{ opacity: 0, x: -50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6 }}
                            >
                                <h2 className="text-2xl font-bold text-blue-900 dark:text-blue-100">Get in Touch</h2>
                                <p className="text-gray-500 dark:text-gray-400">Fill out the form and we'll get back to you as soon as possible.</p>
                                <div className="space-y-2">
                                    <div className="flex items-center space-x-2">
                                        <Mail className="text-blue-600 dark:text-blue-400" />
                                        <span className="text-gray-500 dark:text-gray-400">support@invoicegen.com</span>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <Phone className="text-blue-600 dark:text-blue-400" />
                                        <span className="text-gray-500 dark:text-gray-400">+1 (555) 123-4567</span>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <MapPin className="text-blue-600 dark:text-blue-400" />
                                        <span className="text-gray-500 dark:text-gray-400">123 Invoice St, San Francisco, CA 94122</span>
                                    </div>
                                </div>
                            </motion.div>
                            <motion.form
                                className="space-y-4"
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6 }}
                            >
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-blue-900 dark:text-blue-100">Name</label>
                                    <Input id="name" placeholder="Enter your name" required />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-blue-900 dark:text-blue-100">Email</label>
                                    <Input id="email" placeholder="Enter your email" required type="email" />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="message" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-blue-900 dark:text-blue-100">Message</label>
                                    <Textarea className="min-h-[100px]" id="message" placeholder="Enter your message" required />
                                </div>
                                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">Send Message</Button>
                            </motion.form>
                        </div>
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

