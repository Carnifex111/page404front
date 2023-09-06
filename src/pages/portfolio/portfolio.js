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

const PortfolioPage = () => {
  return (
    <div data-aos="zoom-in" className="portfolio">
      <div className="skills-title title-portfolio">Portfolio</div>

      <Swiper
        // autoplay={{
        //   delay: 4000,
        //   disableOnInteraction: false,
        // }}
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
        <SwiperSlide>
          <div className="portfolio-carts">
            <PortfolioCart
              title="Project 1"
              descr="Lorem ipsum dolor sit amet consectetur adipisicing elit."
              gitLink=""
              link=""
            />
            <PortfolioCart
              title="Project 2"
              descr="Lorem ipsum dolor sit amet consectetur adipisicing elit."
              gitLink=""
              link=""
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="portfolio-carts">
            <PortfolioCart
              title="Project 3"
              descr="Lorem ipsum dolor sit amet consectetur adipisicing elit."
              gitLink=""
              link=""
            />
            <PortfolioCart
              title="Project 4"
              descr="Lorem ipsum dolor sit amet consectetur adipisicing elit."
              gitLink=""
              link=""
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="portfolio-carts">
            <PortfolioCart
              title="Project 5"
              descr="Lorem ipsum dolor sit amet consectetur adipisicing elit."
              gitLink=""
              link=""
            />
            <PortfolioCart
              title="Project 6"
              descr="Lorem ipsum dolor sit amet consectetur adipisicing elit."
              gitLink=""
              link=""
            />
          </div>
        </SwiperSlide>
        ,
        <SwiperSlide>
          <div className="portfolio-carts">
            <PortfolioCart
              title="Project 7"
              descr="Lorem ipsum dolor sit amet consectetur adipisicing elit."
              gitLink=""
              link=""
            />
            <PortfolioCart
              title="Project 8"
              descr="Lorem ipsum dolor sit amet consectetur adipisicing elit."
              gitLink=""
              link=""
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default PortfolioPage;
