import Link from 'next/link'
import { Search, Heart, ShoppingCart, User } from 'lucide-react'

export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-gray-800"></Link>
        <nav className="hidden md:flex space-x-6">
          <Link href="/" className="text-gray-600 hover:text-gray-800">Home</Link>
          <Link href="/shop" className="text-gray-600 hover:text-gray-800">Shop</Link>
          <Link href="/about" className="text-gray-600 hover:text-gray-800">About</Link>
          <Link href="/contact" className="text-gray-600 hover:text-gray-800">Contact</Link>
        </nav>
        <div className="flex items-center space-x-4">
        <Link href="/profile" className="text-gray-600 hover:text-gray-800">
              <User className="w-6 h-6" />
            </Link>
           <button aria-label="Search" className="text-gray-600 hover:text-gray-800">
            <Search size={20} />
          </button>
        <Link href="/wishlist" aria-label="Wishlist" className="text-gray-600 hover:text-gray-800">
            <Heart size={20} />
          </Link>
           <Link href="/cart" className="text-gray-600 hover:text-gray-800 relative">
              <ShoppingCart className="w-6 h-6" />
          </Link>
          
        </div>
      </div>
    </header>
  )
}

