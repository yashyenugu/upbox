import clsx from "clsx";
const Button = ({ variant, border, onClick, children, className }) => {
  if (variant === "outline") {
    return (
      <button
        className={clsx(
          "bg-white rounded-full px-8 py-4 text-lg uppercase font-sans font-bold tracking-medium border-4 outline-none leading-5",
          border === "pink" ? "border-rose-pink" : "border-black",className
        )}
      >
        <span>{children}</span>
      </button>
    );
  } else if (variant === "solid") {
    return (
      <button
        className={
         clsx( "bg-rose-pink text-white rounded-full px-8 py-4 text-lg uppercase font-sans font-bold tracking-medium outline-none leading-5",className)
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
