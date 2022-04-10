import PlanCard from "../ui/PlanCard";
import UnderlinedHeading from "../ui/UnderlinedHeading";
const Pricing = () => {
  return (
    <div className="text-center text-lg py-16">
      <UnderlinedHeading text="Pick your plan" classname="text-center mb-16" />
      <div className="grid grid-cols-2 md:gap-20 lg:gap-44 md:px-16 lg:px-64">
        <PlanCard plan="Monthly" price="18" />
        <PlanCard plan="Yearly" price="15" />
      </div>
      <p className="mt-12 md:text-sm lg:text-lg">
        Your plan auto-renews at the end of 30 days from the 1st day you
        signed-up.
      </p>
    </div>
  );
};
export default Pricing;
