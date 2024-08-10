import Anime from "/src/components/Anime";
export default function AnimeList({ animes, onSelectedAnime }) {
  return (
    <ul className="list list-anime">
      {animes?.map((anime) => (
        <Anime
          anime={anime}
          onSelectedAnime={onSelectedAnime}
          key={anime.mal_id}
        />
      ))}
    </ul>
  );
}
