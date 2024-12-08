import Image from "next/image";

type ProductCardProps = {
  image: string;
  title: string;
  price: string;
  discountPrice?: string;
  isNew?: boolean;
  isOnSale?: boolean;
};

export default function ProductCard({
  image,
  title,
  price,
  discountPrice,
  isNew,
  isOnSale,
}: ProductCardProps) {
  return (
    <div className="bg-white shadow-md p-4 rounded-lg text-center">
      <div className="relative">
        <Image src={image} alt={title} width={150} height={150} className="mx-auto" />
        {isNew && <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 rounded">New</span>}
        {isOnSale && <span className="absolute top-2 right-2 bg-blue-500 text-white text-xs px-2 rounded">Sale</span>}
      </div>
      <h3 className="font-bold text-lg mt-4">{title}</h3>
      <p className="text-gray-500 mt-2">
        {discountPrice ? (
          <>
            <span className="line-through mr-2">${price}</span>
            <span className="text-red-500">${discountPrice}</span>
          </>
        ) : (
          <span>${price}</span>
        )}
      </p>
    </div>
  );
}
