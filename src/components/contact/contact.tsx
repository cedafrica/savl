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


const ContactForm = () => {

  return (
    <div className="w-full bg-white sm:px-32 py-18 sm:py-42 px-10">
      <MaxContainer className="max-w-[900px]">
        <div className="flex flex-col sm:flex-row gap-8 pb-30 sm:pb-60 justify-between">
          <div className="">
            <h2 className="sm:text-[3.2rem] text-[2.7rem] font-semibold">Drop a Message</h2>
            <p className="sm:text-[1.8rem] text-[1.6rem]">The Home of Premium Av</p>
          </div>
          <form action="" className="flex sm:w-[50%]  flex-col gap-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 justify-between">
              <Input
                className="h-30 border-black pl-8 border rounded-4xl placeholder:text-[1.4rem]"
                placeholder="Enter Full Name"
              />
              <Input
                className="h-30 border-black pl-8 border rounded-4xl placeholder:text-[1.4rem]"
                placeholder="Enter Full Name"
              />
            </div>
            <Input
              className="h-30 border-black pl-8 border rounded-4xl placeholder:text-[1.4rem]"
              placeholder="Enter Full Name"
            />
            <Textarea
              rows={4}
              className="h-80 pt-8 border-black pl-8 border rounded-4xl placeholder:text-[1.4rem]"
              placeholder="Enter Full Name"
            />

            <CustomButton className="text-black border mt-8 h-25 px-[3.1rem]! border-black">Submit</CustomButton>
          </form>
        </div>
        <div className="relative flex gap-8 flex-col sm:flex-row sm:pt-40 justify-between pt-20">
          {/* Custom gradient border */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-black to-transparent"></div>
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-[3px] bg-gradient-to-r from-transparent via-black to-transparent"></div>

          <div className="">
            <h2 className="sm:text-[3.2rem] text-[2.7rem] font-semibold">Join Our Team</h2>
            <p className="sm:text-[1.8rem] text-[1.6rem] mt-[1rem] sm:mt-[1.6rem] sm:max-w-110">We are always in search of exceptionally smart and passionate technology enthusiast, with a yearning desire for audiovisual excellence. If that sounds like you, apply to our internship program.</p>
          </div>
          <form action="" className="flex w-full sm:w-[60%] flex-col gap-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 justify-between">
              <Input
                className="h-30 border-black pl-8 border rounded-4xl placeholder:text-[1.4rem]"
                placeholder="Enter Full Name"
              />
              <Input
                className="h-30 border-black pl-8 border rounded-4xl placeholder:text-[1.4rem]"
                placeholder="Enter Email"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 justify-between">
              <Input
                className="h-30 border-black pl-8 border rounded-4xl placeholder:text-[1.4rem]"
                placeholder="Enter Phone"
              />
              <Select>
                <SelectTrigger className="h-30! w-full border-black pl-8 border rounded-4xl text-[1.4rem]">
                  <SelectValue placeholder="Select AV Career Path" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="audio">Audio Engineering</SelectItem>
                  <SelectItem value="video">Video Production</SelectItem>
                  <SelectItem value="installation">Installation Technician</SelectItem>
                  <SelectItem value="design">System Design</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 justify-between">
              <Select>
                <SelectTrigger className="h-30! w-full border-black pl-8 border rounded-4xl text-[1.4rem]">
                  <SelectValue placeholder="B. Eng Computer Science" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="computer">B. Eng Computer Science</SelectItem>
                  <SelectItem value="electrical">B. Eng Electrical Engineering</SelectItem>
                  <SelectItem value="electronics">B. Eng Electronics</SelectItem>
                  <SelectItem value="mechatronics">B. Eng Mechatronics</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger className="h-30! w-full border-black pl-8 border rounded-4xl text-[1.4rem]">
                  <SelectValue placeholder="Undergraduate" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="undergraduate">Undergraduate</SelectItem>
                  <SelectItem value="graduate">Graduate</SelectItem>
                  <SelectItem value="postgraduate">Postgraduate</SelectItem>
                </SelectContent>
              </Select>
            </div>

             <CustomButton className="text-black border mt-8 h-25 px-[3.1rem]! border-black">Submit</CustomButton>
          </form>
        </div>
      </MaxContainer>
    </div>
  );
};

export default ContactForm;