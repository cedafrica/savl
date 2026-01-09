import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import MaxContainer from "../common/max-container";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { motion } from "framer-motion";

const ContactForm = () => {
  return (
    <section
      className="
        relative w-full overflow-hidden
        bg-gradient-to-br
        from-[#f6f7f8]
        via-[#eef0f2]
        to-[#e6e8eb]
        px-10 sm:px-32
        py-24 sm:py-44
      "
    >
      {/* BACKGROUND */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 -left-40 w-[700px] h-[700px] bg-[radial-gradient(circle,rgba(0,86,158,0.10),transparent_65%)]" />
        <div className="absolute bottom-[-300px] right-[-200px] w-[800px] h-[800px] bg-[radial-gradient(circle,rgba(0,86,158,0.08),transparent_70%)]" />
      </div>

      <MaxContainer className="relative z-10 max-w-[980px]">

        {/* HEADER */}
        <div className="flex flex-col sm:flex-row justify-between gap-12 mb-28">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2 className="text-[2.6rem] sm:text-[3.4rem] font-semibold text-black leading-tight">
              Let’s Discuss Your{" "}
              <span className="text-[#00569e]">Project</span>
            </h2>

            <div className="mt-4 h-[2px] w-16 bg-[#00569e]/70 rounded-full" />

            <p className="mt-5 text-[1.6rem] sm:text-[1.8rem] text-black/60 max-w-[34rem] leading-relaxed">
              Engage with Spectra AVL to design and deliver world-class
              audio-visual experiences tailored to your space.
            </p>
          </motion.div>
        </div>

        {/* FORM */}
        <motion.form
          initial={{ opacity: 0, y: 36 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="
            bg-white/80 backdrop-blur-xl
            rounded-[3.2rem]
            border border-[#00569e]/15
            shadow-[0_40px_120px_rgba(0,86,158,0.10)]
            px-10 sm:px-16 py-16
            flex flex-col gap-10
          "
        >
          {/* NAME + EMAIL */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <Input
              placeholder="Full Name"
              className="
                h-24 rounded-full border-black/20 pl-8
                text-[1.8rem] font-medium
                placeholder:text-[1.6rem] placeholder:text-black/40
                focus:border-[#00569e] focus:ring-[#00569e]/20
              "
            />

            <Input
              type="email"
              placeholder="Email Address"
              className="
                h-24 rounded-full border-black/20 pl-8
                text-[1.8rem] font-medium
                placeholder:text-[1.6rem] placeholder:text-black/40
                focus:border-[#00569e] focus:ring-[#00569e]/20
              "
            />
          </div>

          {/* PHONE */}
          <Input
            placeholder="Phone Number (Optional)"
            className="
              h-24 rounded-full border-black/20 pl-8
              text-[1.8rem] font-medium
              placeholder:text-[1.6rem] placeholder:text-black/40
              focus:border-[#00569e] focus:ring-[#00569e]/20
            "
          />

          {/* PROJECT TYPE */}
          <Select>
            <SelectTrigger
              className="
                h-24 rounded-full border-black/20 pl-8
                text-[1.8rem] font-medium text-black/70
                focus:border-[#00569e] focus:ring-[#00569e]/20
              "
            >
              <SelectValue placeholder="Select Project Type" />
            </SelectTrigger>

            <SelectContent className="text-[1.6rem]">
              <SelectItem value="Houses of Worship">Houses of Worship</SelectItem>
              <SelectItem value="Cafés & Restaurants">Cafés & Restaurants</SelectItem>
              <SelectItem value="Night Clubs & Lounges">Night Clubs & Lounges</SelectItem>
              <SelectItem value="Large Congregations">Large Congregations</SelectItem>
              <SelectItem value="Hotels & Resorts">Hotels & Resorts</SelectItem>
              <SelectItem value="Auditoriums & Concert Halls">
                Auditoriums & Concert Halls
              </SelectItem>
              <SelectItem value="Concerts & Live Events">
                Concerts & Live Events
              </SelectItem>
            </SelectContent>
          </Select>

          {/* MESSAGE */}
          <Textarea
            rows={5}
            placeholder="Briefly describe your project requirements"
            className="
              rounded-[2.4rem] border-black/20 px-8 pt-6
              text-[1.8rem] font-medium
              placeholder:text-[1.6rem] placeholder:text-black/40
              focus:border-[#00569e] focus:ring-[#00569e]/20
            "
          />

          {/* SUBMIT */}
          <div className="pt-6">
            <button
              type="submit"
              className="
                h-22 px-20 rounded-full
                border border-[#00569e]
                text-[#00569e]
                font-semibold
                text-[1.6rem]
                hover:bg-[#00569e] hover:text-white
                hover:shadow-[0_12px_35px_rgba(0,86,158,0.25)]
                transition-all duration-300
              "
            >
              Submit Enquiry
            </button>
          </div>
        </motion.form>
      </MaxContainer>
    </section>
  );
};

export default ContactForm;
