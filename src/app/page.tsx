import Image from "next/image";
import Front from "@/components/front";
import FeaturedProducts from "@/components/featuredproducts";
import LatestProducts from "@/components/latestproducts";
import ShopexOffers from "@/components/shopexoffers";

export default function Home() {
  return (
   <div>
   <Front/>
   <FeaturedProducts/>
<LatestProducts/>
<ShopexOffers/>
   </div>
  );
}
