import "./home.scss";
import Title from "../../subComponets/title/title";

const HomePage = () => {
  return (
    <div data-aos="zoom-in" className="wrapper page">
      <Title />
      <div className="block-home">
        <h2 class="block-home__title">Developing the best products</h2>
      </div>
    </div>
  );
};

export default HomePage;
