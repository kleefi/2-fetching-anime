"use client";
import { useRouter } from "next/navigation";
import { useRef } from "react";
import { FiSearch } from "react-icons/fi";

const Search = () => {
  const searchRef = useRef();
  const router = useRouter();
  const handleSearch = (e) => {
    if (e.key === "Enter" || e.type === "click") {
      e.preventDefault();
      const keyword = searchRef.current.value;
      router.push(`/search/${keyword}`);
    }
  };
  return (
    <div className="relative">
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
