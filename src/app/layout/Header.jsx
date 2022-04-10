import TopBar from "../../assets/images/TOPBAR 1.png";
import CompanyLogo from "../icons/CompanyLogo";
import Button from "../ui/Button";

const Header = () => {

    const navLinks = ['this month', 'skin', 'hair', 'bath', 'sale']

  return (
    <header className="w-full sticky top-0 z-50 bg-white">
      <div className="w-full  py-6 relative">
        <img src={TopBar} alt="TopBar" className="h-2 w-full absolute top-0" />
        <div className="flex justify-between md:mx-10 lg:mx-32">
          {/* make the div a link */}
          <a href="/" className="no-underline text-black">
            <div className="flex items-center gap-2">
              <CompanyLogo className="h-8 w-8" />
              <p className="uppercase font-bold tracking-logo-lg md:text-xs lg:text-3xl">upbox</p>
            </div>
          </a>
          <nav className="flex items-center ">
                {navLinks.map(link => (
                    <a href="/" className="no-underline md:mx-2 lg:mx-4 uppercase font-medium md:text-xs lg:text-lg text-black tracking-[.16em]">{link}</a>
                ))}
                <Button variant="outline" border="black" className="md:ml-3 lg:ml-7">Log in {'>'}</Button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
