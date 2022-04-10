import UnderlineIcon from "../icons/UnderlineIcon";
import clsx from "clsx";
const UnderlinedHeading = ({ text, classname, rotate }) => {
  return (
    <div className={classname}>
      <h2 className="text-5xl font-text mb-1.5">{text}</h2>
      <UnderlineIcon classname={clsx("block mx-auto", rotate && "rotate-180")} />
    </div>
  );
};

export default UnderlinedHeading;
