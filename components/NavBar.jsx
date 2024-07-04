import Search from "./Search";
import Link from "next/link";

const NavBar = () => {
  return (
    <div className=" bg-orange-400 p-4 ">
      <div className="flex justify-between items-center max-w-[1200px] mx-auto md:flex-row flex-col">
        <Link href="/">
          <h1 className="text-4xl font-bold mb-2 md:mb-0">Anime.</h1>
        </Link>
        <Search />
      </div>
    </div>
  );
};

export default NavBar;
