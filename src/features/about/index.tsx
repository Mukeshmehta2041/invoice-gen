import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Users, Trophy, Globe } from 'lucide-react'
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

export const AboutPage = () => {
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
                                About InvoiceGen
                            </motion.h1>
                            <motion.p
                                className="max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400"
                                variants={fadeInUp}
                            >
                                Simplifying invoicing for businesses worldwide since 2020.
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
                            <motion.div variants={fadeInUp}>
                                <Card>
                                    <CardContent className="flex flex-col items-center space-y-2 p-6">
                                        <Users className="h-12 w-12 text-blue-600 dark:text-blue-400" />
                                        <h3 className="text-xl font-bold text-blue-900 dark:text-blue-100">Our Mission</h3>
                                        <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                                            To empower businesses with efficient and professional invoicing solutions, enabling them to focus on growth and success.
                                        </p>
                                    </CardContent>
                                </Card>
                            </motion.div>
                            <motion.div variants={fadeInUp}>
                                <Card>
                                    <CardContent className="flex flex-col items-center space-y-2 p-6">
                                        <Trophy className="h-12 w-12 text-blue-600 dark:text-blue-400" />
                                        <h3 className="text-xl font-bold text-blue-900 dark:text-blue-100">Our Achievements</h3>
                                        <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                                            Trusted by over 100,000 businesses globally, with 5 million invoices generated and counting.
                                        </p>
                                    </CardContent>
                                </Card>
                            </motion.div>
                            <motion.div variants={fadeInUp}>
                                <Card>
                                    <CardContent className="flex flex-col items-center space-y-2 p-6">
                                        <Globe className="h-12 w-12 text-blue-600 dark:text-blue-400" />
                                        <h3 className="text-xl font-bold text-blue-900 dark:text-blue-100">Our Reach</h3>
                                        <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                                            Supporting businesses in over 50 countries with multi-currency and language support.
                                        </p>
                                    </CardContent>
                                </Card>
                            </motion.div>
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
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-blue-900 dark:text-blue-100">Our Story</h2>
                            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                                Founded in 2020, InvoiceGen was born out of a simple idea: to make invoicing painless for businesses of all sizes. Our team of dedicated professionals has worked tirelessly to create a platform that combines ease of use with powerful features, helping businesses streamline their financial processes and get paid faster.
                            </p>
                            <Button className="bg-blue-600 hover:bg-blue-700 text-white">Join Our Team</Button>
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
