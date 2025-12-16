import Image from "next/image";

export default function Home() {
  return (
<section className="pt-20 md:pt-40">
  <div className="container mx-auto px-8 lg:flex">
    <div className="text-center lg:text-left lg:w-1/2">
      <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-none">
        Main title of your landing page
      </h1>

      <p className="text-xl lg:text-2xl mt-6 font-light">
        Free landing page template to promote your business startup
        and generate leads for the offered services
      </p>

      <p className="mt-8 md:mt-12">
        <button
          type="button"
          className="py-4 px-12 bg-teal-500 hover:bg-teal-600 rounded text-white"
        >
          Get Started
        </button>
      </p>

      <p className="mt-4 text-gray-600">Sed fermentum felis ut cursu</p>
    </div>
  </div>
</section>
  );
}
