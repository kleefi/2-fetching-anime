"use client";
import Image from "next/image";

const TopAnime = ({ data }) => {
  return (
    <>
      <h1 className="text-2xl font-bold max-w-[1200px] mx-auto py-4">
        Top Anime
      </h1>
      <div className="max-w-[1200px] mx-auto grid grid-cols-4 gap-4 pb-4">
        {data.map((item) => (
          <div key={item.mal_id} className="p-4 bg-fuchsia-300">
            <Image
              src={item.images.webp.image_url}
              width={350}
              height={350}
              alt="..."
            />
            <h3 className="font-semibold text-xl">{item.title}</h3>
          </div>
        ))}
      </div>
    </>
  );
};

export default TopAnime;
