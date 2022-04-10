import UnderlinedHeading from "../ui/UnderlinedHeading";
import ImageOne from "../../assets/images/description/Mask Group.png";
import ImageTwo from "../../assets/images/description/box2 1.png";
import ImageThree from "../../assets/images/description/Mask Group 2.png";
import Art1 from "../vectors/Art1";
import Art2 from "../vectors/Art2";
import ArtTwo from "../vectors/Art2_2";
import Art3 from "../vectors/Art3";
import Button from "../ui/Button";
const Description = () => {
  return (
    <div className="description">
      <UnderlinedHeading
        text="How it works?"
        classname="text-center mb-16"
        rotate
      />
      <div className="grid grid-cols-2 px-60 gap-8">
        {/* number 1 */}
        <div className="relative h-[390px]">
          <img src={ImageOne} alt="ImageOne" className="absolute right-0" />
          <span className="text-rose-pink font-text text-[220px] right-56 bottom-28 absolute">
            1
          </span>
          <Art1 className="absolute right-32 -z-10" />
        </div>
        <div className="max-w-md">
          <h3 className="font-text text-4xl mt-16 mb-4">
            Setup your profile {"&"} preferences
          </h3>
          <p className="text-lg">
            Once you create an account, you can start to tell us your likes and
            dislikes so we can tailor the experience just for you.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-2 px-60 gap-8 mt-[400px] gap-y-20">
        {/* number 2 */}
        <div className="relative">
          <img
            src={ImageTwo}
            alt="ImageTwo"
            className="absolute -right-[390px] bottom-36"
          />
          <span className="text-rose-pink font-text text-[220px] absolute bottom-4 right-0">
            2
          </span>
          <Art2 className="absolute -right-14 -top-72 -z-10" />
          <ArtTwo className="absolute -right-[470px] bottom-[280px] -z-10" />
        </div>
        <div className="max-w-md">
          <h3 className="font-text text-4xl mb-4">Review your custom box</h3>
          <p className="text-lg">
            Once we get to know you, we will show you the box we{"’"}ve crafted.
            This is your chance to approve it before we ship it to your house.
          </p>
        </div>
        {/* number 3 */}
        <div className="relative h-[416px]">
          <img src={ImageThree} alt="ImageTwo" className="absolute right-0" />
          <span className="text-rose-pink font-text text-[220px] right-56 bottom-28 absolute">
            3
          </span>
          <Art3 className="absolute -right-20 top-64 -z-10" />
        </div>
        <div className="max-w-md">
          <h3 className="font-text text-4xl mt-24 mb-4">Try it on at home</h3>
          <p className="text-lg">
            Your box will arrive within 3-5 days (usually sooner) and you get
            the joy to unbox your Upbox. Try it all on and send back whatever
            you{"’"}re not in love with.
          </p>
        </div>
      </div>
      <Button border="pink" variant="outline" className="block mx-auto my-32">TRY IT FOR YOURSELF {'>'}</Button>
    </div>
  );
};

export default Description;
