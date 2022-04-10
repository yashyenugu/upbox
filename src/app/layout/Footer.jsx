import FooterRow from "../ui/FooterRow";
import CompanyLogo from "../icons/CompanyLogo";
import InstagramIcon from "../icons/InstagramIcon";
import FacebookIcon from "../icons/FacebookIcon";
import TwitterIcon from "../icons/TwitterIcon";
import SnapchatIcon from "../icons/SnapchatIcon";
const Footer = () => {
  const footerCols = [
    {
      title: "UPBOX",
      links: [
        "Upbox Bag",
        "Upbox Box Platinum",
        "Upbox Box VIP",
        "Deals",
        "Seasonal Items",
        "Upbox Promise",
      ],
    },
    {
      title: "Find Us On",
      links: ["Instagram", "Facebook", "TikTok", "Snapchat", "Twitter"],
    },
    {
      title: "Product",
      links: ["Get the App", "Loyalty Program", "Affiliates", "Press"],
    },
    {
      title: "Help",
      links: ["Returns", "FAQ", "Contact", "Community", "Videos"],
    },
  ];

  return (
    <footer className="p-4">
      <div className="bg-[#EEEEEE] border-2 border-gray-accent divide-y-[4px]">
        <div className="px-24">
          <div className="flex justify-between my-14">
            <a href="/" className="no-underline text-black">
              <div className="flex items-center gap-2">
                <CompanyLogo className="h-8 w-8" />
                <p className="uppercase font-bold tracking-logo-lg text-lg">
                  upbox
                </p>
              </div>
            </a>
            <div className="flex gap-6">
              <InstagramIcon className="w-8 h-8" />
              <FacebookIcon className="w-8 h-8" />
              <TwitterIcon className="w-8 h-8" />
              <SnapchatIcon className="w-8 h-8" />
            </div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 md:gap-x-48 md:gap-y-16 lg:gap-16">
            {footerCols.map((col) => (
              <FooterRow heading={col.title} items={col.links} />
            ))}
          </div>
        </div>

        <div className="md:grid md:grid-cols-2 lg:flex lg:flex-row-reverse justify-between px-24 py-6 md:gap-y-2">
          <a href="/" className="lg:text-center font-medium">
            Privacy Policy
          </a>
          <a href="/" className="lg:text-center font-medium">
            Terms
          </a>

          <a href="/" className="lg:text-center font-medium col-span-2">
            © {new Date().getFullYear()} Quest AI. Upbox is a Sample Project and
            open source design project free for personal and commercial use.
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
