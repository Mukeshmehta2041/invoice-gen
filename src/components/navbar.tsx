import { useState } from 'react'
import { FileText, Menu } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'
import { Button } from './ui/button'
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet'

export const Navbar = () => {
    const { pathname } = useLocation()
    const [isOpen, setIsOpen] = useState(false)

    const NavLink = ({ to, children }: { to: string; children: React.ReactNode }) => (
        <Link
            className={`text-sm font-medium ${pathname === to
                ? 'text-blue-600 dark:text-blue-400'
                : 'text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400'
                } hover:underline underline-offset-4`}
            to={to}
            onClick={() => setIsOpen(false)}
        >
            {children}
        </Link>
    )

    return (
        <header className="px-4 lg:px-6 h-14 flex items-center border-b border-blue-100 dark:border-gray-700">
            <Link className="flex items-center justify-center" to="/">
                <FileText className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                <span className="ml-2 text-lg font-bold text-blue-800 dark:text-blue-200">InvoiceGen</span>
            </Link>
            <nav className="ml-auto hidden md:flex items-center gap-4 sm:gap-6">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/features">Features</NavLink>
                <NavLink to="/about">About</NavLink>
                <Button asChild className="bg-blue-600 hover:bg-blue-700 text-white">
                    <Link to="/create-invoice">Create Invoice</Link>
                </Button>
            </nav>
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger asChild>
                    <Button variant="ghost" size="icon" className="md:hidden ml-auto">
                        <Menu className="h-6 w-6" />
                        <span className="sr-only">Toggle menu</span>
                    </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[240px] sm:w-[300px]">
                    <nav className="flex flex-col gap-4">
                        <NavLink to="/">Home</NavLink>
                        <NavLink to="/features">Features</NavLink>
                        <NavLink to="/about">About</NavLink>
                        <Button asChild className="bg-blue-600 hover:bg-blue-700 text-white w-full">
                            <Link to="/create-invoice" onClick={() => setIsOpen(false)}>
                                Create Invoice
                            </Link>
                        </Button>
                    </nav>
                </SheetContent>
            </Sheet>
        </header>
    )
}

