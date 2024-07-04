"use client";
import { useRouter } from "next/navigation";
import { useRef } from "react";
import { FiSearch } from "react-icons/fi";

const Search = () => {
  const searchRef = useRef();
  const router = useRouter();
  const handleSearch = (e) => {
    const keyword = searchRef.current.value;
    if (!keyword) return;
    if (e.key === "Enter" || e.type === "click") {
      e.preventDefault();
      router.push(`/search/${keyword}`);
    }
  };
  return (
    <div className="relative w-full md:w-auto">
      <input
        placeholder="Cari disini..."
        className="p-2 rounded-md w-full"
        ref={searchRef}
        onKeyDown={handleSearch}
      />
      <button onClick={handleSearch} className="absolute top-2 end-2">
        <FiSearch size={24} />
      </button>
    </div>
  );
};

export default Search;
