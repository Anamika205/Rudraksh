import Link from "next/link";

const categories = [
  { title: "Rudraksha Products", img: "/img1.jpg" },
  { title: "Spiritual Pooja Items", img: "/img1.jpg" },
  { title: "Mala Collections", img: "/img1.jpg" },
  { title: "Spiritual Jewellery", img: "/img1.jpg" },
];

export default function CategorySection() {
  return (
    <section className="bg-[#FFF2DF] pb-16">
      <div className="max-w-7xl mx-auto px-6">

        <div className="flex items-end justify-between mb-8 font-black ">
          <div>
            <h2 className="text-xl font-semibold text-amber-800">Shop by</h2>
            <h3 className="text-2xl font-bold text-amber-800">Category</h3>
            <p className="text-x-l text-gray-600">
              hand-selected for spiritual seekers
            </p>
          </div>

          <Link href="/category" className="text-sm underline cursor-pointer hover:text-amber-800">
            See All Category
          </Link>
        </div>

        <div className="flex gap-6 overflow-x-auto pb-2">
          {categories.map((item) => (
            <Link
              key={item.title}
              href={`/category/${item.title.toLowerCase().replace(/\s+/g, "-")}`}
              className="min-w-[220px] h-[260px] rounded-xl overflow-hidden relative group"
            >
              <img
                src={item.img}
                className="w-full h-full object-cover group-hover:scale-105 transition"
              />

              <div className="absolute bottom-4 left-4 text-white text-sm font-medium">
                {item.title}
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
