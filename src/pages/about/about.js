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
          descr="A backend developer with experience in desktop application and game development, I create solutions that are both sophisticated and functional.
          "
        />
        <PeopleCart
          name="Ivan Shirov"
          logo={logoIvan}
          descr="A frontend and backend developer dedicated to building efficient and sleek digital solutions. "
        />
      </div>
    </div>
  );
};

export default AboutPage;
