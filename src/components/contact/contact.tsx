import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import MaxContainer from "../common/max-container";
import CustomButton from "../common/custom-button";
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
    <div className="w-full bg-white sm:px-32 py-18 sm:py-42 px-10">
      <MaxContainer className="max-w-[900px]">

        {/* Drop a Message Section */}
        <div className="flex flex-col sm:flex-row gap-8 pb-30 sm:pb-60 justify-between">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <h2 className="sm:text-[3.2rem] text-[2.7rem] font-semibold">
              Drop a Message
            </h2>
            <p className="sm:text-[1.8rem] text-[1.6rem]">The Home of Premium AV</p>
          </motion.div>

          <motion.form
  action="mailto:adediranstephen2000@gmail.com"
  method="POST"
  encType="text/plain"
  className="flex sm:w-[50%] flex-col gap-8"
  initial={{ opacity: 0, y: 40 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.3, duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
>
  {/* NAME + EMAIL */}
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
    <Input
      name="Full Name"
      required
      className="h-30 border-black pl-8 border rounded-4xl placeholder:text-[1.4rem]"
      placeholder="Enter Full Name"
    />

    <Input
      name="Email"
      type="email"
      required
      className="h-30 border-black pl-8 border rounded-4xl placeholder:text-[1.4rem]"
      placeholder="Enter Email"
    />
  </div>

  {/* PHONE */}
  <Input
    name="Phone"
    className="h-30 border-black pl-8 border rounded-4xl placeholder:text-[1.4rem]"
    placeholder="Enter Phone"
  />

  {/* MESSAGE */}
  <Textarea
    name="Message"
    rows={4}
    className="h-80 pt-8 border-black pl-8 border rounded-4xl placeholder:text-[1.4rem]"
    placeholder="Enter Your Message"
  />

  {/* PROJECT TYPE */}
  <Select name="Project Type">
    <SelectTrigger className="h-30 w-full border-black pl-8 border rounded-4xl text-[1.4rem]">
      <SelectValue placeholder="Select Your Next Project" />
    </SelectTrigger>
    <SelectContent>
      <SelectItem value="Houses of Worship">Houses of Worship</SelectItem>
      <SelectItem value="Cafés & Restaurants">Cafés & Restaurants</SelectItem>
      <SelectItem value="Night Clubs & Lounges">Night Clubs & Lounges</SelectItem>
      <SelectItem value="Large Congregations">Large Congregations</SelectItem>
      <SelectItem value="Hotels & Resorts">Hotels & Resorts</SelectItem>
      <SelectItem value="Auditoriums & Concert Halls">Auditoriums & Concert Halls</SelectItem>
      <SelectItem value="Concerts & Live Events">Concerts & Live Events</SelectItem>
    </SelectContent>
  </Select>

  {/* SUBMIT */}
  <button
    type="submit"
    className="
      mt-8
      h-25
      px-[3.1rem]
      rounded-full
      border border-black
      text-black
      font-semibold
      hover:bg-black hover:text-white
      transition-all duration-300
    "
  >
    Submit
  </button>
</motion.form>

        </div>

        {/* Join Our Team Section */}
        <div className="relative flex gap-8 flex-col sm:flex-row sm:pt-40 justify-between pt-20">
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-black to-transparent"></div>
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-[3px] bg-gradient-to-r from-transparent via-black to-transparent"></div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <h2 className="sm:text-[3.2rem] text-[2.7rem] font-semibold">
              Join Our Team
            </h2>
            <p className="sm:text-[1.8rem] text-[1.6rem] mt-[1rem] sm:mt-[1.6rem] sm:max-w-110">
              We are always in search of exceptionally smart and passionate technology
              enthusiasts, with a yearning desire for audiovisual excellence. If that
              sounds like you, apply to our internship program.
            </p>
          </motion.div>

          <motion.form
            action=""
            className="flex w-full sm:w-[60%] flex-col gap-8"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          >
            {/* Form fields same as original */}
            {/* ... */}
            <CustomButton className="text-black border mt-8 h-25 px-[3.1rem]! border-black">
              Submit
            </CustomButton>
          </motion.form>
        </div>
      </MaxContainer>
    </div>
  );
};

export default ContactForm;
