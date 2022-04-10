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
    <div className={clsx("h-72 bg-no-repeat bg-pricing flex flex-col items-center justify-center border-4 border-gray-accent", svg)}>
      <h3 className="font-text text-4xl">{plan}</h3>
      <h3 className="text-5xl tracking-medium mt-2 mb-5">${price}/mo</h3>
      <Button variant="solid">FIND YOUR BOX</Button>
    </div>
  );
};

export default PlanCard
