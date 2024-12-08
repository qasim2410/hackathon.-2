import ProductCard from "./productcard"; // Ensure case sensitivity matches

const featuredProducts = [
  { image: "/chair1.png", title: "Cantilever chair", price: "62.00", discountPrice: undefined },
  { image: "/chair2.png", title: "Cantilever chair", price: "62.00", discountPrice: undefined },
  { image: "/chair3.png", title: "Cantilever chair", price: "62.00", discountPrice: undefined },
  { image: "/chair4.png", title: "Cantilever chair", price: "62.00", discountPrice: undefined },
];

export default function FeaturedProducts() {
  return (
    <section className="py-12 bg-gray-100">
      <h2 className="text-center text-3xl font-bold mb-8">Featured Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 px-6">
        {featuredProducts.map((product, index) => (
          <ProductCard key={index} {...product} />
        ))}
      </div>
    </section>
  );
}


