import Image from 'next/image'
import { Mail, Phone, MapPin } from 'lucide-react'

export default function ContactPage() {
  return (
    <div className="bg-cream-50 min-h-screen">
      {/* Background Image Section */}
      <div className="relative h-64 md:h-80">
        <Image
          src="/images/contact.png"
          alt="Contact Us"
          layout="fill"
          objectFit="cover"
          className="brightness-50"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white"></h1>
        </div>
      </div>
      <br />

      {/* Contact Form and Information Section */}
      <div className="container mx-auto px-4">
        <br />
        <h2 className="text-2xl font-bold text-black mb-8 text-center">Get in Touch With Us</h2>
        <p className="text-[#9F9F9F] mb-8 text-center">
          For More Information About Our Product & Services. Please Feel Free To Drop Us <br />
          An Email. Our Staff Will Always Be There To Help You Out. Do Not Hesitate!
        </p>
      </div>
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="space-y-4">
              <div className="flex items-start">
                <MapPin className="w-6 h-6 text-gray-600 mr-3 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Address</h3>
                  <p className="text-gray-600">
                    123 Furniture Street<br />
                    Comfort City, CC 12345<br />
                    United States
                  </p>
                </div>
              </div>
              <div className="text-xl font-semibold text-gray-800 mb-4">
                <Phone className="text-gray-600" />
                <div>
                  <h3 className="font-medium text-gray-800">Phone</h3>
                  <p className="text-gray-600">(123) 456-7890</p>
                </div>
              </div>
              <div className="text-xl font-semibold text-gray-800 mb-4">
                <Mail className="text-gray-600" />
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Email</h3>
                  <p className="text-gray-600">info@furnicraft.com</p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Working Timming</h3>
              <ul className="space-y-2 text-gray-600">
                <li>Monday - Friday: 9:00 AM - 6:00 PM</li>
                <li>Saturday: 10:00 AM - 4:00 PM</li>
                <li>Sunday: Closed</li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <form>
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-200"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-200"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-200"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-200"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-gray-800 text-white px-6 py-3 rounded-md hover:bg-gray-700 transition duration-300 h-316 w-1440"
              >
                Send Message
              </button>
            </form>
      
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center py-8 bg-[#FAFAF4] body-font w-1440 h-300">
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
  )
}
