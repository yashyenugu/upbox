import clsx from "clsx";
const Button = ({ variant, border, onClick, children, className }) => {
  if (variant === "outline") {
    return (
      <button
        className={clsx(
          "bg-white rounded-full uppercase font-sans font-bold tracking-medium outline-none leading-5",
          border === "pink" ? "border-rose-pink border-4 px-8 py-4 text-xl" : "border-black border-2 py-2 px-3 text-base",className
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
