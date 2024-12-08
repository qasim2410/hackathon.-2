import ProductCard from "./productcard"; // Ensure case matches the file name

const latestProducts = [
  { image: "/chair5.png", title: "Comfort Handy Craft", price: "80.00", discountPrice: "60.00", isOnSale: true },
  { image: "/chair6.png", title: "Comfort Handy Craft", price: "80.00", discountPrice: undefined },
  { image: "/chair7.png", title: "Comfort Handy Craft", price: "80.00", discountPrice: "60.00", isOnSale: true },
  { image: "/chair8.png", title: "Comfort Handy Craft", price: "80.00", discountPrice: undefined },
  { image: "/chair9.png", title: "Comfort Handy Craft", price: "80.00", discountPrice: undefined },
  { image: "/chair10.png", title: "Comfort Handy Craft", price: "80.00", discountPrice: undefined },
];

export default function LatestProducts() {
  return (
    <section className="py-12">
      <h2 className="text-center text-3xl font-bold mb-8">Latest Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 px-6">
        {latestProducts.map((product, index) => (
          <ProductCard key={index} {...product} />
        ))}
      </div>
    </section>
  );
}
