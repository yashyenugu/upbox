import Box from "../../assets/images/BOX.png";
import Button from "../ui/Button";

const Hero = () => {
  return (
    <div className="flex lg:items-center w-full relative bg-sky-blue h-[600px] overflow-hidden">
      <img
        src={Box}
        alt="box"
        className="absolute bottom-0  md:-right-24 lg:right-0 md:w-[850px] lg:w-[998px]"
      />
      <div className="w-1/2 md:ml-10 ml-32 md:mt-5">
        <h1 className="md:text-[42px] lg:text-6xl font-display">
          Look good without leaving your house.
        </h1>
        <p className="w-10/12 my-6">
          Upbox is the easiest way to look your best without having to hunt for
          the perfect makeup combination. Our stylists curate the latest trends
          and send them directly to your door every month.
        </p>
        <Button border="pink" variant="outline">
          sign up {">"}
        </Button>
      </div>
    </div>
  );
};

export default Hero;
