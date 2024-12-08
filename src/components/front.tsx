import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-purple-100 min-h-screen">
      {/* Top Bar */}
      <div className="bg-purple-600 text-white text-sm py-2">
        <div className="container mx-auto flex justify-between items-center">
          <div>
            <span className="mr-4">📧 mhhasanul@gmail.com</span>
            <span>📞 (12345)67890</span>
          </div>
          <div className="flex items-center gap-4">
            <span>English</span>
            <span>USD</span>
            <span>Login</span>
            <span>Wishlist ❤️</span>
            <span>🛒</span>
          </div>
        </div>
      </div>

      {/* Navbar */}
      <nav className="bg-white py-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold text-purple-600">Hekto</h1>
          <ul className="flex gap-8">
            <li className="hover:text-purple-600 cursor-pointer">Home</li>
            <li className="hover:text-purple-600 cursor-pointer">Pages</li>
            <li className="hover:text-purple-600 cursor-pointer">Products</li>
            <li className="hover:text-purple-600 cursor-pointer">Blog</li>
            <li className="hover:text-purple-600 cursor-pointer">Shop</li>
            <li className="hover:text-purple-600 cursor-pointer">Contact</li>
          </ul>
          <input
            type="text"
            placeholder="Search"
            className="border border-gray-300 px-4 py-2 rounded-md"
          />
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto flex items-center justify-between py-16">
        {/* Left Content */}
        <div className="max-w-lg">
          <p className="text-purple-600 font-semibold">
            Best Furniture For Your Castle...
          </p>
          <h1 className="text-4xl font-bold my-4">
            New Furniture Collection Trends in 2020
          </h1>
          <p className="text-gray-600 mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in
            est adipiscing in phasellus non in justo.
          </p>
          <button className="bg-pink-500 text-white px-6 py-3 rounded-md hover:bg-pink-600">
            Shop Now
          </button>
        </div>

        {/* Right Content */}
        <div className="relative">
          <div className="absolute top-4 right-4 bg-blue-500 text-white font-bold py-2 px-4 rounded-full">
            50% off
          </div>
          <Image
            src="/chair.png"
            alt="Chair"
            width={400}
            height={400}
            className="rounded-md"
          />
        </div>
      </section>
    </div>
  );
}
