import Link from "next/link";
import CartButton from "../buttons/CartButton";
import Image from "next/image";

const FoodCard = ({ food }) => {
  const { title, foodImg, price, category, id } = food;

  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition">
      {/* <img src={foodImg} alt={title} className="w-full h-48 object-cover" /> */}
      <Image
        src={foodImg}
        alt={title}
        className="w-full h-48 object-cover"
        width={500}
        height={500}
      ></Image>
      <div className="p-4 space-y-2">
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>

        <p className="text-sm text-gray-500">Category: {category}</p>

        <p className="text-base font-bold text-gray-900">৳ {price}</p>

        <div className="flex gap-3 pt-3">
          <Link
            href={`/foods/${id}`}
            className="flex-1 bg-cyan-700 hover:bg-cyan-800 text-white py-2 rounded-xl transition"
          >
            View Details
          </Link>

          <CartButton food={food}></CartButton>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
