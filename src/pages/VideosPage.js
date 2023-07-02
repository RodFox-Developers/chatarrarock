import Videos from "../components/Videos";
import AlertsBanner from "../components/shared/AlertsBanner";
import useYoutube from "../hooks/useYoutube";

function VideosPage() {
  const { playlists, isLoading, error } = useYoutube();

  return (
    <section id="videoclips" className="bg-videos py-5">
      {error ? (
        <AlertsBanner msg={error} type="danger" />
      ) : (
        <Videos playlists={playlists} isLoading={isLoading} />
      )}
    </section>
  );
}

export default VideosPage;
