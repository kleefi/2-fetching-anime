import Header from "@/components/Header";
import TopAnime from "@/components/TopAnime";

const Page = async () => {
  const topAnime = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/top/anime?limit=8`
  );
  const topAnimeResp = await topAnime.json();

  return (
    <>
      {/* top anime */}
      <section>
        <Header title="Top anime" linkHref="/popular" linkTitle="See all" />
        <TopAnime api={topAnimeResp} />
      </section>
    </>
  );
};
export default Page;
