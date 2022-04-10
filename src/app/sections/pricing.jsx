import Button from "../ui/Button";
import PlanCard from "../ui/PlanCard";
import UnderlinedHeading from "../ui/UnderlinedHeading";
const Pricing = () => {
  return (
    <div className="text-center text-lg py-16">
      <UnderlinedHeading text="Pick your plan" classname="text-center mb-16" />
      <div className="grid grid-cols-2 gap-44 px-64">
        <PlanCard plan="Monthly" price="18" />
        <PlanCard plan="Yearly" price="15" />
      </div>
      <p className="mt-12">
        Your plan auto-renews at the end of 30 days from the 1st day you
        signed-up.
      </p>
    </div>
  );
};
export default Pricing;
