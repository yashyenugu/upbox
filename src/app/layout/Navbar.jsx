import TopBar from "../../assets/images/TOPBAR 1.png";
import CompanyLogo from "../icons/CompanyLogo";

const Navbar = () => {

    const navLinks = ['this month', 'skin', 'hair', 'bath', 'sale']

  return (
    <header className="w-full">
      <div className="w-full py-6 relative">
        <img src={TopBar} alt="TopBar" className="h-2 w-full absolute top-0" />
        <div className="flex justify-between mx-32">
          {/* make the div a link */}
          <a href="/" className="no-underline text-black">
            <div className="flex items-center gap-2">
              <CompanyLogo className="h-12 w-12" />
              <p className="uppercase font-bold tracking-logo-lg text-3xl">upbox</p>
            </div>
          </a>
          <nav className="flex items-center ">
                {navLinks.map(link => (
                    <a href="/" className="no-underline mx-4 uppercase font-medium text-lg text-black tracking-logo-lg">{link}</a>
                ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
