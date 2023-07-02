import Discografia from "../components/Discografia";
import AlertsBanner from "../components/shared/AlertsBanner";
import useSpotify from "../hooks/useSpotify";

function DiscografiaPage() {
  const { albums, isLoading, error } = useSpotify();

  return (
    <section id="albumes" className="bg-discografia py-5">
      {error ? (
        <AlertsBanner msg={error} type="danger" />
      ) : (
        <Discografia spotifyData={albums} isLoading={isLoading} />
      )}
    </section>
  );
}
export default DiscografiaPage;
