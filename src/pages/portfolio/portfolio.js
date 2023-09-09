import PortfolioCart from "../../components/portfolio-cart/portfolioCart";
import "./portfolio.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-creative";
import {
  EffectCreative,
  Autoplay,
  Pagination,
  Navigation,
} from "swiper/modules";
import { useStore } from "effector-react";
import { $allProjects } from "../../context/projects";
import { getAllProjectsFx } from "../../app/api/projects";
import { useEffect } from "react";

const PortfolioPage = () => {
  const data = useStore($allProjects);
  const groupedData = [];

  useEffect(() => {
    getAllProjectsFx();
  }, []);

  for (let i = 0; i < data.length; i += 2) {
    groupedData.push(data.slice(i, i + 2));
  }

  return (
    <div data-aos="zoom-in" className="portfolio">
      <div className="skills-title title-portfolio">Portfolio</div>

      <Swiper
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        grabCursor={true}
        effect={"creative"}
        creativeEffect={{
          prev: {
            shadow: true,
            translate: [0, 0, -400],
          },
          next: {
            translate: ["100%", 0, 0],
          },
        }}
        modules={[EffectCreative, Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {groupedData.map((group, index) => (
          <SwiperSlide key={index}>
            <div className="portfolio-carts">
              {group.map((item, index) => (
                <PortfolioCart
                  key={index}
                  title={item.title}
                  descr={item.descr}
                  gitLink={item.git_hub}
                  link={item.site}
                />
              ))}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default PortfolioPage;
