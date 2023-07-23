import { Banner } from "../components";
import bannerDesktop from "../assets/images/banner.jpg";
import bannerMobile from "../assets/images/banner_mobile.jpg";

const Home = () => {
  const windowWidth = window.innerWidth;

  const breakpoint = 768; // Puedes ajustar este valor según tus necesidades
  return (
    <div>
      {windowWidth < breakpoint ? (
        <Banner url={bannerMobile} />
      ) : (
        <Banner url={bannerDesktop} />
      )}
    </div>
  );
};

export default Home;
