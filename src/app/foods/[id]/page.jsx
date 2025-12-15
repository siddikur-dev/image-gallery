const getFoodDetails = async (id) => {
  const res = await fetch(
    `https://taxi-kitchen-api.vercel.app/api/v1/foods/${id}`,
    { cache: "no-store" }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch food details");
  }

  return res.json();
};

export default async function FoodDetailsPage({ params }) {
  const { id } = await params;
  const data = await getFoodDetails(id);
  const food = data.details;

  const { title, foodImg, price, category, area, video } = food;

  return (
    <div className="max-w-5xl mx-auto px-5 py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Image */}
        <div className="rounded-2xl overflow-hidden shadow-lg">
          <img
            src={foodImg}
            alt={title}
            className="w-full h-[350px] object-cover"
          />
        </div>

        {/* Details */}
        <div className="space-y-4">
          <h1 className="text-3xl font-bold text-gray-300">{title}</h1>

          <p className="text-gray-200">
            <span className="font-semibold">Category:</span> {category}
          </p>

          <p className="text-gray-200">
            <span className="font-semibold">Area:</span> {area}
          </p>

          <p className="text-2xl font-semibold text-gray-300">৳ {price}</p>

          <div className="flex gap-4 pt-4">
            <button className="bg-cyan-700 hover:bg-cyan-800 text-white px-6 py-3 rounded-xl transition">
              Add to Cart
            </button>

            <a
              href={video}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-gray-300 text-gray-300 px-6 py-3 rounded-xl hover:bg-gray-300 hover:text-white transition"
            >
              Watch Video
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
