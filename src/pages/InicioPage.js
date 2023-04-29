import BannerHome from '../components/home/BannerHome';
import DescripcionHome from '../components/home/DescripcionHome';
import IntegrantesHome from '../components/home/IntegrantesHome';
import MediaHome from '../components/home/MediaHome';
import SpotifyHome from '../components/home/SpotifyHome';
import VideoHome from '../components/home/VideoHome';
import BandsintownDates from '../components/shared/BandsintownDates';

function InicioPage() {
  return (
    <>
      <BannerHome />
      <DescripcionHome />
      <BandsintownDates />
      <IntegrantesHome />
      <SpotifyHome />
      <MediaHome />
      <VideoHome />
    </>
  )
}

export default InicioPage;