import TopAnime from "@/components/TopAnime";
const Index = async () => {
  const topAnime = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/top/anime?limit=8`
  );
  const topAnimeResp = await topAnime.json();

  return (
    <>
      <TopAnime data={topAnimeResp.data} />
    </>
  );
};
export default Index;
