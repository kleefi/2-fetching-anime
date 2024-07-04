"use client";
import HeaderMenu from "@/components/HeaderMenu";
import Pagination from "@/components/Pagination";
import TopAnime from "@/components/TopAnime";
import { useEffect, useState } from "react";

const Page = () => {
  const [page, setPage] = useState(1);
  const [topAnime, setTopAnime] = useState([]);

  const fetchData = async () => {
    const allAnime = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/top/anime?page=${page}`
    );
    const respon = await allAnime.json();
    setTopAnime(respon);
  };
  useEffect(() => {
    fetchData();
  }, [page]);
  return (
    <>
      <HeaderMenu title={`Popular Anime #${page}`} />
      <TopAnime api={topAnime} />
      <Pagination
        setPage={setPage}
        page={page}
        lastPage={topAnime.pagination?.last_visible_page}
      />
    </>
  );
};

export default Page;
