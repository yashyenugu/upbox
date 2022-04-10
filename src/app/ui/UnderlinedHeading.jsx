import UnderlineIcon from "../icons/UnderlineIcon";
// return a react component which renders a heading with UnderlineIcon component as underline
// use tailwindcss classes to style the heading
// UnderlineIcon is present in src\app\ui\UnderlinedHeading.jsx
const UnderlinedHeading = ({ text, classname }) => {
  return (
    <div className={classname}>
      <h2 className="text-5xl font-text mb-1.5">{text}</h2>
      <UnderlineIcon classname="block mx-auto" />
    </div>
  );
};

export default UnderlinedHeading;
