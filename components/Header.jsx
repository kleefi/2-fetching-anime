import Link from "next/link";

const Header = ({ title, linkHref, linkTitle }) => {
  return (
    <div className="flex justify-between items-center  max-w-[1200px] mx-2 md:mx-auto py-4">
      <h2 className="text-2xl font-bold">{title}</h2>
      {linkHref && linkTitle ? (
        <Link href={linkHref} className="hover:text-red-400">
          {linkTitle}
        </Link>
      ) : null}
    </div>
  );
};

export default Header;
