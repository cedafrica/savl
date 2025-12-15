import { Link } from "react-router-dom";

const BoothNightclub = () => {
  return (
    <section className="max-w-5xl mx-auto px-6 py-24">
      
      {/* Back link */}
      <Link to="/news" className="text-sm underline mb-6 inline-block">
        ← Back to News
      </Link>

      {/* Title */}
      <h1 className="text-4xl font-bold text-black mb-4">
        Booth Night Club, South Africa Trusts Spectra for Immersive Sound Experience
      </h1>

      {/* Date */}
      <p className="text-gray-500 mb-8">
        January 27, 2025
      </p>

      {/* Image */}
      <img
        src="/booths.webp"
        alt="Booth Night Club"
        className="w-full h-[420px] object-cover mb-10"
      />

      {/* Content */}
      <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
        <p>
          The new Booth Night Club & Kilala Restaurant & Lounge in Pretoria
          sets a new benchmark for immersive sound experiences in the
          South African entertainment industry.
        </p>

        <p>
          Spectra AVL delivered a carefully engineered audio solution
          designed to energize the space while maintaining clarity,
          balance, and emotional impact.
        </p>

        <p>
          From system tuning to final calibration, every detail was
          executed to ensure guests feel the music—not just hear it.
        </p>
      </div>

    </section>
  );
};

export default BoothNightclub;
