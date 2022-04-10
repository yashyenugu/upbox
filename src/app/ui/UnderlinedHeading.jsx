import UnderlineIcon from "../icons/UnderlineIcon";
import clsx from "clsx";
const UnderlinedHeading = ({ text, classname, rotate }) => {
  return (
    <div className={classname}>
      <h2 className={clsx("md:text-[42px] lg:text-5xl font-text",rotate ? "mb-0 lg:mb-1.5": "mb-3")}>{text}</h2>
      <UnderlineIcon classname={clsx("block mx-auto md:w-[204px] lg:w-[245px]", rotate && "rotate-180")} />
    </div>
  );
};

export default UnderlinedHeading;
