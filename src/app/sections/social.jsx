import Social1 from "../../assets/images/social/img1.png";
import Social2 from "../../assets/images/social/img2.png";
import Social3 from "../../assets/images/social/img3.png";
import Social4 from "../../assets/images/social/img4.png";
import Button from "../ui/Button";

const Social = () => {
  const images = [Social1, Social2, Social3, Social4];
  const captions = [
    "How to rock the lip look that turns heads",
    "Find the perfect shade for the season",
    "The 5 eye shadow secrets you never knew",
    "The pro-tips for at home hair dying",
  ];
  return (
    <div className="text-center bg-sky-blue py-24">
      <h2 className="text-5xl font-text md:mb-8 lg:mb-6">Social Posts</h2>
      <div className="grid md:grid-cols-2 md:gap-12 lg:grid-cols-4 lg:gap-16 px-16">
        {images.map((image, index) => (
          <div className="text-left shrink lg:p-6" key={index}>
            <img className="block w-full" src={image} alt="social" />
            <p className="text-2xl my-6">{captions[index]}</p>
          </div>
        ))}
      </div>

      <Button variant="solid" className="inline-block md:mt-6 lg:mt-0">
        FOLLOW US ON INSTAGRAM
      </Button>
    </div>
  );
};
export default Social;
