import Box from "../../assets/images/BOX.png";
import Button from "../ui/Button";

const Hero = () => {
    return (
        <div className="flex items-center w-full relative bg-sky-blue h-[600px]">
        <img src={Box} alt="box" className="absolute bottom-0 right-0" />
        <div className="w-1/3 ml-32">
          <h1 className="text-6xl font-display">Look good without leaving your house.</h1>
          <p className="w-10/12 my-6">
            Upbox is the easiest way to look your best without having to hunt
            for the perfect makeup combination. Our stylists curate the latest
            trends and send them directly to your door every month.
          </p>
          <Button border="pink" variant="outline">sign up {">"}</Button>
        </div>
      </div>
    )
}

export default Hero;