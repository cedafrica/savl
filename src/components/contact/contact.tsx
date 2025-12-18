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
        w-full
        bg-gradient-to-br
        from-[#f6f7f8]
        via-[#eef0f2]
        to-[#e6e8eb]
        px-10 sm:px-32
        py-24 sm:py-44
      "
    >
      <MaxContainer className="max-w-[980px]">

        {/* HEADER */}
        <div className="flex flex-col sm:flex-row justify-between gap-12 mb-28">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
          >
            <h2 className="text-[2.6rem] sm:text-[3.4rem] font-semibold text-black leading-tight">
              Let’s Discuss Your Project
            </h2>

            <p className="mt-4 text-[1.5rem] sm:text-[1.7rem] text-black/60 max-w-[34rem] leading-relaxed">
              Engage with Spectra AVL to design and deliver world-class
              audio-visual experiences tailored to your space.
            </p>
          </motion.div>
        </div>

        {/* FORM CARD */}
        <motion.form
          action="mailto:projects@savl"
          method="POST"
          encType="text/plain"
          initial={{ opacity: 0, y: 36 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.9, ease: "easeOut" }}
          className="
            bg-white/80
            backdrop-blur-xl
            rounded-[3.2rem]
            border border-black/10
            shadow-[0_40px_120px_rgba(0,0,0,0.06)]
            px-10 sm:px-16
            py-16
            flex flex-col gap-10
          "
        >
          {/* NAME + EMAIL */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <Input
              name="Full Name"
              required
              placeholder="Full Name"
              className="
                h-24
                rounded-full
                border-black/20
                pl-8
                text-[1.5rem]
                placeholder:text-black/40
                focus:border-black
              "
            />

            <Input
              name="Email"
              type="email"
              required
              placeholder="Email Address"
              className="
                h-24
                rounded-full
                border-black/20
                pl-8
                text-[1.5rem]
                placeholder:text-black/40
                focus:border-black
              "
            />
          </div>

          {/* PHONE */}
          <Input
            name="Phone"
            placeholder="Phone Number (Optional)"
            className="
              h-24
              rounded-full
              border-black/20
              pl-8
              text-[1.5rem]
              placeholder:text-black/40
              focus:border-black
            "
          />

          {/* PROJECT TYPE */}
          <Select name="Project Type">
            <SelectTrigger
              className="
                h-24
                rounded-full
                border-black/20
                pl-8
                text-[1.5rem]
                text-black/70
              "
            >
              <SelectValue placeholder="Select Project Type" />
            </SelectTrigger>

            <SelectContent>
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
            name="Message"
            rows={5}
            placeholder="Briefly describe your project requirements"
            className="
              rounded-[2.4rem]
              border-black/20
              px-8
              pt-6
              text-[1.5rem]
              placeholder:text-black/40
              focus:border-black
            "
          />

          {/* SUBMIT */}
          <div className="pt-6">
            <button
              type="submit"
              className="
                h-22
                px-20
                rounded-full
                border border-black
                text-black
                font-semibold
                text-[1.4rem]
                hover:bg-black hover:text-white
                transition-all duration-400
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
