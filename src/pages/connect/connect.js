import "./connect.scss";

const ConnectPage = () => {
  return (
    <div className="connent" data-aos="zoom-out">
      <form className="connent-form">
        <div className="connent-form-title">Сontact us</div>
        <div className="input-group">
          <label htmlFor="email">Your Email</label>
          <input type="email" className="input" name="email" />
        </div>
        <div class="input-group">
          <label htmlFor="email">Your Task</label>
          <textarea
            className="input no-resize"
            name="task"
            cols="40"
            rows="20"
            required
          ></textarea>
        </div>
        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ConnectPage;
