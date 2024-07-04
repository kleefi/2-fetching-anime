import Header from "@/components/Header";
import TopAnime from "@/components/TopAnime";

const Page = async ({ params }) => {
  const keyword = params.keyword;
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/anime?q=${keyword}`
  );
  const searchAnime = await response.json();
  return (
    <>
      {/* search anime */}
      <section>
        <Header title={`Hasil pencarian : ${decodeURIComponent(keyword)}`} />
        <TopAnime api={searchAnime} />
      </section>
    </>
  );
};
export default Page;
