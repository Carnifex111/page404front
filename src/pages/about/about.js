import PeopleCart from "../../components/people-cart/peopleCart";
import logoIvan from "../../resources/img/ivan_avatar.jpg";
import logoMax from "../../resources/img/max-avatar.jpg";
import "./about.scss";

const AboutPage = () => {
  return (
    <div data-aos="zoom-in-down">
      <div className="wrap-about page">
        <PeopleCart
          name="Max Pugachev"
          logo={logoMax}
          descr="Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
          corrupti, quae itaque expedita eligendi corporis facere, officiis
          labore esse necessitatibus inventore incidunt repudiandae quam? In sed
          tempore id deleniti quod."
        />
        <PeopleCart
          name="Ivan Shirov"
          logo={logoIvan}
          descr="Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
          corrupti, quae itaque expedita eligendi corporis facere, officiis
          labore esse necessitatibus inventore incidunt repudiandae quam? In sed
          tempore id deleniti quod."
        />
      </div>
    </div>
  );
};

export default AboutPage;
