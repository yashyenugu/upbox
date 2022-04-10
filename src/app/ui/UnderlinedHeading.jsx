import clsx from "clsx";
import UnderlineIcon from "../icons/UnderlineIcon";
// return a react component which renders a heading with UnderlineIcon component as underline
// use tailwindcss classes to style the heading
// UnderlineIcon is present in src\app\ui\UnderlinedHeading.jsx
const UnderlinedHeading = ({ text, className }) => {
  return (
    <div>
      <h2 className={clsx(className, "text-6xl font-text")}>{text}</h2>
      <UnderlineIcon className="absolute bottom-0 right-0" />
    </div>
  );
};

export default UnderlinedHeading;
