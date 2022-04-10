import Button from "./Button";
import clsx from "clsx";
const PlanCard = ({ plan, price }) => {
    let svg;
    if(plan === "Monthly"){
        svg = "bg-[url('./assets/icons/MonthlyVector.svg')]";
    } else if(plan === "Yearly"){
        svg = "bg-[url('./assets/icons/YearlyVector.svg')]";
    }
    
  return (
    <div className={clsx("md:h-40 lg:h-72 bg-no-repeat bg-pricing flex flex-col items-center justify-center border-4 border-gray-accent", svg)}>
      <h3 className="font-text md:text-xl lg:text-4xl">{plan}</h3>
      <h3 className="md:text-2xl lg:text-5xl tracking-medium md:mt-0 md:mb-2 lg:mt-2 lg:mb-5">${price}/mo</h3>
      <Button variant="solid" pricing>FIND YOUR BOX</Button>
    </div>
  );
};

export default PlanCard
