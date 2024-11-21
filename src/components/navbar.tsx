import { FileText } from 'lucide-react'
import { Link, useLocation, } from 'react-router-dom'
import { Button } from './ui/button'

export const Navbar = () => {
    const { pathname } = useLocation();
    return (
        <header className="px-4 lg:px-6 h-14 flex items-center border-b border-blue-100 dark:border-gray-700">
            <Link className="flex items-center justify-center" to="/">
                <FileText className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                <span className="ml-2 text-lg font-bold text-blue-800 dark:text-blue-200">InvoiceGen</span>
            </Link>
            <nav className="ml-auto flex items-center gap-4 sm:gap-6">
                <Link
                    className={`text-sm font-medium ${pathname === '/'
                        ? 'text-blue-600 dark:text-blue-400'
                        : 'text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400'
                        } hover:underline underline-offset-4`}
                    to="/"
                >
                    Home
                </Link>
                <Link
                    className={`text-sm font-medium ${pathname === '/features'
                        ? 'text-blue-600 dark:text-blue-400'
                        : 'text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400'
                        } hover:underline underline-offset-4`}
                    to="/features"
                >
                    Features
                </Link>
                <Link
                    className={`text-sm font-medium ${pathname === '/about'
                        ? 'text-blue-600 dark:text-blue-400'
                        : 'text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400'
                        } hover:underline underline-offset-4`}
                    to="/about"
                >
                    About
                </Link>
                <Link
                    className={`text-sm font-medium ${pathname === '/contact'
                        ? 'text-blue-600 dark:text-blue-400'
                        : 'text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400'
                        } hover:underline underline-offset-4`}
                    to="/contact"
                >
                    Contact
                </Link>
                <Button asChild className="bg-blue-600 hover:bg-blue-700 text-white">
                    <Link to="/create-invoice">Create Invoice</Link>
                </Button>
            </nav>
        </header>)
}
