import clsx from "clsx";
const Button = ({ variant, border, onClick, children, pricing, className }) => {
  if (variant === "outline") {
    return (
      <button
        className={clsx(
          "bg-white rounded-full uppercase font-sans font-bold tracking-medium outline-none leading-5",
          border === "pink" ? "border-rose-pink border-4 px-8 py-4 lg:text-xl" : "border-black border-2 md:px-4 md:py-1 lg:py-2 lg:px-3 md:text-xs lg:text-base",className
        )}
      >
        <span>{children}</span>
      </button>
    );
  } else if (variant === "solid") {
    return (
      <button
        className={
         clsx( "bg-rose-pink text-white rounded-full md:px-6 md:py-3 md:text-lg lg:text-lg lg:px-8 lg:py-4 uppercase font-sans font-bold tracking-medium outline-none leading-5",className, pricing && "md:text-xxs")
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
