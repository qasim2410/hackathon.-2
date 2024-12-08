const offers = [
    { icon: "🚚", title: "Free Shipping", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
    { icon: "⏰", title: "24/7 Support", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
    { icon: "🔒", title: "Secure Payment", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
  ];
  
  export default function ShopexOffers() {
    return (
      <section className="py-12 bg-gray-100">
        <h2 className="text-center text-3xl font-bold mb-8">What Shopex Offer!</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6">
          {offers.map((offer, index) => (
            <div key={index} className="bg-white p-6 shadow-md rounded-lg text-center">
              <div className="text-4xl mb-4">{offer.icon}</div>
              <h3 className="font-bold text-lg">{offer.title}</h3>
              <p className="text-gray-500 mt-2">{offer.description}</p>
            </div>
          ))}
        </div>
      </section>
    );
  }
  