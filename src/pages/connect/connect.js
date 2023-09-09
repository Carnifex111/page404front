import { useState } from "react";
import "./connect.scss";
import { postOrderFx } from "../../app/api/order";

const ConnectPage = () => {
  const [email, setEmail] = useState("");
  const [task, setTask] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await postOrderFx({ email, order: task });
      setEmail("");
      setTask("");
      setIsSubmitted(true);
    } catch (error) {
      console.error("Ошибка при отправке формы:", error);
    }
  };

  return (
    <div className="connent" data-aos="zoom-out">
      {isSubmitted ? (
        <div data-aos="zoom-out" className="submission-success-message">
          Thank you, we will contact you shortly.
        </div>
      ) : (
        <form className="connent-form" onSubmit={handleSubmit}>
          <div className="connent-form-title">Сontact us</div>
          <div className="input-group">
            <label htmlFor="email">Your Email</label>
            <input
              type="email"
              className="input"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="input-group">
            <label htmlFor="task">Your Task</label>
            <textarea
              className="input no-resize"
              name="task"
              cols="40"
              rows="20"
              required
              value={task}
              onChange={(e) => setTask(e.target.value)}
            ></textarea>
          </div>
          <button type="submit" className="submit-button">
            Submit
          </button>
        </form>
      )}
    </div>
  );
};

export default ConnectPage;
