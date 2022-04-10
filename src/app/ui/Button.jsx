import clsx from "clsx";
const Button = ({ variant, border, onClick, children }) => {
  if (variant === "outline") {
    return (
      <button
        className={clsx(
          "bg-white rounded-full px-8 py-4 text-lg uppercase font-sans font-bold tracking-medium border-4 outline-none leading-5",
          border === "pink" ? "border-rose-pink" : "border-black"
        )}
      >
        <span>{children}</span>
      </button>
    );
  } else if (variant === "solid") {
    return (
      <button
        className={
          "bg-rose-pink text-white rounded-full px-8 py-4 text-lg uppercase font-sans font-bold tracking-medium outline-none leading-5"
        }
      >
        <span>{children}</span>
      </button>
    );
  }

  return (
    <button onClick={onClick}>
      <span>{children}</span>
    </button>
  );
};

export default Button;
