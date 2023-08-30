import "./peopleCart.scss";

const PeopleCart = ({ name, logo, descr }) => {
  return (
    <div className="about-cart">
      <div className="about-cart-title">{name}</div>
      <div className="about-cart-img">
        <img src={logo} />
      </div>
      <div className="about-cart-descr">{descr}</div>
    </div>
  );
};

export default PeopleCart;
