const NewsInfo = () => {
    return (
        <section className="py-8 sm:py-0">
            <div className="relative w-full h-55 sm:h-160">
                <img
                    src="/banner.png"
                    alt="banner"
                    className="absolute inset-0"
                />

                <span className="text-[1.2rem] rounded-[.3rem] bg-white p-2 absolute left-4 top-4">Featured</span>
            </div>

            <h1 className="sm:text-[3.4rem] text-[2.2rem] font-semibold sm:my-10  text-black">
                5 Key Factors When Choosing Audio Systems for Worship Centers
            </h1>
            <p className="text-black text-[1.4rem] mt-8 sm:text-[1.6rem]">
                Choosing the right audio system for a worship center is about more than just sound—it’s about creating an atmosphere where every word, song, and prayer connects deeply with the congregation. The first thing to consider is the room acoustics, as the shape, materials, and size of the space can dramatically affect how sound travels. A well-treated room ensures clarity and reduces unwanted echoes. Next, ensure even coverage and consistency across the entire space so that everyone, regardless of where they sit, experiences the same level of clarity and impact. It’s also wise to choose a system that offers scalability and flexibility, allowing your church to expand or adapt its setup without starting from scratch. Ease of use is equally important—your volunteers and technical team should be able to operate the equipment with confidence through intuitive controls and reliable digital systems. Finally, prioritize reliability and support by investing in trusted brands that provide durable products, warranties, and responsive local assistance. When these factors come together, your worship center gains more than great sound—it gains the power to inspire, engage, and uplift every listener in the room.
            </p>
        </section>
    );
}

export default NewsInfo;