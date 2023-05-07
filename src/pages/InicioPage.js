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
      <div className="row justify-content-center">
        <div className="col-lg-8 text-center my-5">
          <BandsintownDates />
        </div>
      </div>  
      <IntegrantesHome />
      <SpotifyHome />
      <MediaHome />
      <VideoHome />
    </>
  )
}

export default InicioPage;