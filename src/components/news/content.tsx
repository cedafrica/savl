import MaxContainer from "../common/max-container";
import { Outlet } from "react-router-dom";

const Content = () => {
  return (
    <section className="sm:px-32 px-10 sm:py-24 bg-white text-gray-900">
      <MaxContainer className="max-w-[1200px]">
        <Outlet />
      </MaxContainer>
    </section>
  );
};

export default Content;
