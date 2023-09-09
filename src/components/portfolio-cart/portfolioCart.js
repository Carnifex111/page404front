import "./portfolioCart.scss";
import GitHub from "../../resources/icon/github.svg";

const PortfolioCart = ({ title, descr, gitLink, link }) => {
  return (
    <>
      <div className="portfolio-cart">
        <div className="portfolio-cart-title">{title}</div>
        <div className="portfolio-cart-descr">{descr}</div>
        <div className="portfolio-cart-links">
          <div className="portfolio-cart-links-github">
            <a href={gitLink}>
              <img src={GitHub} alt="github" />
            </a>
          </div>
          <a className="site-link" href={link}>
            <div className="portfolio-cart-links-site">GO</div>
          </a>
        </div>
      </div>
    </>
  );
};

export default PortfolioCart;
