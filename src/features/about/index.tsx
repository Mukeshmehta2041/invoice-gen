import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Trophy, Globe, Rocket, Heart, Zap, ArrowRight } from 'lucide-react'
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
                <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 overflow-hidden">
                    <div className="container px-4 md:px-6">
                        <motion.div
                            className="flex flex-col items-center space-y-4 text-center"
                            initial="initial"
                            animate="animate"
                            variants={stagger}
                        >
                            <motion.h1
                                className="text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600"
                                variants={fadeInUp}
                            >
                                Revolutionizing Invoicing Since 2020
                            </motion.h1>
                            <motion.p
                                className="max-w-[800px] text-gray-500 md:text-xl dark:text-gray-400"
                                variants={fadeInUp}
                            >
                                At InvoiceGen, we're on a mission to simplify financial processes for businesses worldwide. Our journey is driven by innovation, customer satisfaction, and a commitment to excellence.
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
                                { icon: Users, title: "Our Mission", description: "To empower businesses with efficient and professional invoicing solutions, enabling them to focus on growth and success. We strive to make financial management accessible and stress-free for everyone." },
                                { icon: Trophy, title: "Our Achievements", description: "Trusted by over 100,000 businesses globally, with 5 million invoices generated and counting. We've been recognized as a leader in financial technology innovation for three consecutive years." },
                                { icon: Globe, title: "Our Reach", description: "Supporting businesses in over 50 countries with multi-currency and language support. Our platform adapts to local tax regulations and business practices, ensuring compliance and ease of use worldwide." }
                            ].map((item, index) => (
                                <motion.div key={index} variants={fadeInUp}>
                                    <Card className="h-full transition-all duration-300 hover:shadow-lg hover:scale-105">
                                        <CardHeader>
                                            <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center mb-4">
                                                <item.icon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                                            </div>
                                            <CardTitle className="text-xl font-bold text-blue-900 dark:text-blue-100">{item.title}</CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <p className="text-sm text-gray-500 dark:text-gray-400">{item.description}</p>
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
                            className="flex flex-col items-center space-y-4 text-center mb-12"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                        >
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">Our Story</h2>
                            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                                Founded in 2020, InvoiceGen was born out of a simple idea: to make invoicing painless for businesses of all sizes. Our journey began when our founders, experienced entrepreneurs themselves, recognized the challenges that small businesses and freelancers faced with financial management.
                            </p>
                        </motion.div>
                        <motion.div
                            className="grid gap-6 lg:grid-cols-3"
                            variants={stagger}
                            initial="initial"
                            animate="animate"
                        >
                            {[
                                { icon: Rocket, title: "The Launch", description: "In 2020, we launched our beta version, working closely with a group of small businesses to refine our platform." },
                                { icon: Heart, title: "Growing Community", description: "By 2022, we had a thriving community of users, with their feedback driving our continuous improvement." },
                                { icon: Zap, title: "Constant Innovation", description: "Today, we're at the forefront of invoicing technology, constantly innovating to meet evolving business needs." }
                            ].map((step, index) => (
                                <motion.div key={index} variants={fadeInUp}>
                                    <Card className="h-full">
                                        <CardContent className="flex flex-col items-center space-y-2 p-6">
                                            <step.icon className="h-12 w-12 text-blue-600 dark:text-blue-400" />
                                            <h3 className="text-xl font-bold text-blue-900 dark:text-blue-100">{step.title}</h3>
                                            <p className="text-sm text-gray-500 dark:text-gray-400 text-center">{step.description}</p>
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </section>
                <section className="w-full py-12 md:py-24 lg:py-32 bg-blue-50 dark:bg-gray-800">
                    <div className="container px-4 md:px-6">
                        <motion.div
                            className="flex flex-col items-center space-y-4 text-center"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                        >
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">Join Our Team</h2>
                            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                                We're always looking for talented individuals who are passionate about revolutionizing financial technology. Join us in our mission to simplify invoicing for businesses worldwide.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 mt-8">
                                <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                                    View Open Positions
                                    <ArrowRight className="ml-2 h-4 w-4" />
                                </Button>
                                <Button variant="outline" className="border-blue-200 text-blue-600 hover:bg-blue-50 dark:border-blue-800 dark:text-blue-400 dark:hover:bg-blue-950">
                                    Learn About Our Culture
                                </Button>
                            </div>
                        </motion.div>
                    </div>
                </section>
            </main>
            <footer className="w-full py-6 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
                <div className="container px-4 md:px-6">
                    <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
                        <div className="space-y-3">
                            <h4 className="text-base font-medium text-gray-900 dark:text-gray-100">About</h4>
                            <ul className="space-y-1">
                                <li><Link className="text-sm text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400" to="#">Our Story</Link></li>
                                <li><Link className="text-sm text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400" to="#">Team</Link></li>
                                <li><Link className="text-sm text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400" to="#">Careers</Link></li>
                            </ul>
                        </div>
                        <div className="space-y-3">
                            <h4 className="text-base font-medium text-gray-900 dark:text-gray-100">Product</h4>
                            <ul className="space-y-1">
                                <li><Link className="text-sm text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400" to="#">Features</Link></li>
                                <li><Link className="text-sm text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400" to="#">Pricing</Link></li>
                                <li><Link className="text-sm text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400" to="#">Integrations</Link></li>
                            </ul>
                        </div>
                        <div className="space-y-3">
                            <h4 className="text-base font-medium text-gray-900 dark:text-gray-100">Resources</h4>
                            <ul className="space-y-1">
                                <li><Link className="text-sm text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400" to="#">Blog</Link></li>
                                <li><Link className="text-sm text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400" to="#">Help Center</Link></li>
                                <li><Link className="text-sm text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400" to="#">Community</Link></li>
                            </ul>
                        </div>
                        <div className="space-y-3">
                            <h4 className="text-base font-medium text-gray-900 dark:text-gray-100">Legal</h4>
                            <ul className="space-y-1">
                                <li><Link className="text-sm text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400" to="#">Privacy Policy</Link></li>
                                <li><Link className="text-sm text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400" to="#">Terms of Service</Link></li>
                                <li><Link className="text-sm text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400" to="#">Cookie Policy</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="mt-6 flex flex-col sm:flex-row justify-between items-center">
                        <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 InvoiceGen. All rights reserved.</p>
                        <div className="flex space-x-4 mt-4 sm:mt-0">
                            <Link className="text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400" to="#">
                                <span className="sr-only">Facebook</span>
                                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                                </svg>
                            </Link>
                            <Link className="text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400" to="#">
                                <span className="sr-only">Twitter</span>
                                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                                </svg>
                            </Link>
                            <Link className="text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400" to="#">
                                <span className="sr-only">GitHub</span>
                                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default AboutPage

