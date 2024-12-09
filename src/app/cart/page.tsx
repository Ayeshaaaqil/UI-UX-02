import Image from 'next/image'
import { Trash2 } from 'lucide-react'

export default function CartPage() {
  return (
    <div className="bg-cream-50 min-h-screen w-1440 h-525">
      {/* Background Image Section */}
      <div className="relative h-64 md:h-80">
        <Image src="/images12/cart.png" alt="Contact Us" layout="fill" objectFit="cover" className="brightness-50" />
        <div className=" flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white"></h1>
        </div>
      </div>
      <br />

      {/* Cart Content */}
      <div className="container mx-auto mt-8 px-4 w-1440 h-525">
        <div className="flex flex-col md:flex-row gap-8 w-1440 h-525">
          {/* Cart Items */}
          <div className="w-full md:w-2/3 bg-white rounded-lg shadow overflow-hidden w-1440 h-525">
            {/* Headers */}
            <div className="grid grid-cols-4 bg-[#FFF9E5] p-4 font-semibold text-center w-1440 h-525">
              <span>Product</span>
              <span>Price</span>
              <span>Quantity</span>
              <span>Subtotal</span>
            </div>
            {/* Cart Items */}
            <div className="divide-y">
              <div className="grid grid-cols-4 items-center p-4 hover:bg-gray-50 text-center w-1440 h-525">
                <Image src="/images12/cart2.png" alt="Asgaard Sofa" width={80} height={80} className="mx-auto rounded" />
                <span>Rs. 2,500,000</span>
                <span>1</span>
                <div className="flex items-center justify-center space-x-4">
                  <span>Rs. 2,500,000</span>
                  <button className="text-red-500 hover:text-red-700">
                    <Trash2 size={20} />
                  </button>
                </div>
              </div>
              <div className="grid grid-cols-4 items-center p-4 hover:bg-gray-50 text-center w-1440 h-525">
                <Image src="/images12/cart2.png" alt="Asgaard Sofa" width={80} height={80} className="mx-auto rounded" />
                <span>Rs. 2,500,000</span>
                <span>1</span>
                <div className="flex items-center justify-center space-x-4">
                  <span>Rs. 2,500,000</span>
                  <button className="text-red-500 hover:text-red-700">
                    <Trash2 size={20} />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Cart Totals */}
          <div className="w-full md:w-1/3 bg-[#FFF9E5] rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold justify-center">Cart Totals</h2>
            <div className="flex justify-between mb-2">
              <span>Subtotal</span>
              <span>Rs. 5,000,000</span>
            </div>
            <div className="flex justify-between font-semibold text-lg mb-4">
              <span>Total</span>
              <span>Rs. 5,000,000</span>
            </div>
            <button className="w-full text-black text-xl py-2 rounded hover:bg-blue-600"> Checkout </button>
          </div>
        </div>
           {/* Benefits Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center py-8 bg-[#FAF4F4] body-font w-1440 h-525">
          <div>
            
<h3 className="text-xl md:text-2xl font-bold">Free Delivery</h3>
<p className="text-sm md:text-base text-gray-600">For all orders over $50 ,,consectetur <br />adipim scing elit</p>
</div>
<div>
<h3 className="text-xl md:text-2xl font-bold">90 Days Return</h3>
<p className="text-sm md:text-base text-gray-600">If goods have problems,consectetur <br />adipim scing elit </p>
</div>
<div>
<h3 className="text-xl md:text-2xl font-bold">Secure Payment</h3>
<p className="text-sm md:text-base text-gray-600">100% secure payment,consectetur <br />adipim scing elit</p>
</div>
</div>
        </div>
      </div>

  )
}
