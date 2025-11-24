import MaxContainer from "../common/max-container";
import { Button } from "../ui/button";
import { Outlet } from "react-router-dom";

const Content = () => {

    return (
        <section className="sm:px-32 px-10 sm:py-24 bg-white text-gray-900">
  <MaxContainer className="max-w-[1050px]">
    <div className="grid grid-cols-1 lg:grid-cols-[1fr_30.1rem] gap-12">
      
      {/* Left: Outlet */}
      <div className="w-full h-fit">
        <Outlet />
      </div>

      {/* Right: Sidebar */}
      <div className="flex flex-col gap-12">

        {/* Categories Sidebar */}
        <div className="bg-gray-50 border border-gray-200 rounded-2xl shadow-lg p-8">
          <h2 className="text-[2.4rem] font-extrabold text-gray-800">Categories</h2>
          <div className="flex gap-2 mt-6 flex-col">
            {[
              { name: "All Posts", count: 25 },
              { name: "Audio Systems", count: 5 },
              { name: "Video Technology", count: 2 },
              { name: "Lighting", count: 10 },
            ].map((cat) => (
              <div key={cat.name} className="flex items-center justify-between">
                <p className="text-[1.6rem] font-semibold text-gray-700">{cat.name}</p>
                <p className="text-[1.6rem] font-medium text-gray-500">({cat.count})</p>
              </div>
            ))}
          </div>
        </div>

        {/* Newsletter Sidebar */}
        <div className="bg-gray-50 border border-gray-200 rounded-2xl shadow-lg p-8">
          <h2 className="sm:text-[2.2rem] text-[2rem] font-extrabold text-gray-800">Stay Updated</h2>
          <p className="sm:text-[1.6rem] text-[1.4rem] mt-4 text-gray-600">
            Get the latest insights and industry news delivered to your inbox.
          </p>

          <input
            type="email"
            className="w-full rounded-full h-14 placeholder:text-gray-400 pl-5 mt-6 border border-gray-300 focus:ring-2 focus:ring-gray-300 focus:outline-none transition"
            placeholder="Your e-mail address"
          />

          <Button className="w-full mt-6 text-[1.5rem] rounded-full py-4 bg-gradient-to-r from-gray-800 to-gray-900 text-white shadow-lg hover:from-gray-900 hover:to-black transition-all">
            Subscribe
          </Button>
        </div>

      </div>
    </div>
  </MaxContainer>
</section>

    );
}

export default Content;