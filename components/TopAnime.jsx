import Image from "next/image";
import Link from "next/link";

const TopAnime = ({ api }) => {
  return (
    <>
      <div className="max-w-[1200px] mx-auto grid grid-cols-2  md:grid-cols-4 gap-4 pb-4 mb-4 p-2 md:p-0 ">
        {api.data?.map((item) => (
          <div
            key={item.mal_id}
            className="md:p-4 p-2 bg-fuchsia-300 shadow-lg hover:scale-105 duration-100 transition-all"
          >
            <Link href={`${process.env.NEXT_PUBLIC_API_URL}/${item.mal_id}`}>
              <Image
                src={item.images.webp.image_url}
                width={350}
                height={350}
                alt="..."
                className="md:h-[350px] md:w-[360px] h-[200px] w-[200px] object-cover"
              />
              <h3 className="font-semibold text-sm md:text-xl">{item.title}</h3>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default TopAnime;
