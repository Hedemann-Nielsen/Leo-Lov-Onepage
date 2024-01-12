import "./Kontakt.scss";
import ItSupport from "../../assets/images/it-support-slider.jpeg";
export const Kontakt = () => {
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevents the form from submitting in the traditional way

    let form = event.target;
    let errorBox = form.querySelector(".ErrorMessage");
    errorBox.innerHTML = ""; // Clear any previous error messages

    if (form["fornavn"].value === "") {
      errorBox.innerHTML += "<p>Need A Name, </p> ";
    }

    if (form["email"].value === "") {
      errorBox.innerHTML += "<p>Need An Email,</p> ";
      return;
    }

    // Additional validation if needed

    // If no errors, you can submit the form or perform additional actions
  };
  return (
    <section id="MainSection">
      <article>
        <form onSubmit={handleSubmit} id="send-form">
          <div className="MainContainer">
            <div className="from-itags">
              <p id="text1">Contact us</p>

              <p>
                {" "}
                122 Mockup St.,
                <br /> New York
              </p>

              <p>(+1) 123 456 7890 </p>

              <p>(+1) 123 456 7891</p>
            </div>
            <label htmlFor="fornavn">
              <input
                type="text"
                name="fornavn"
                placeholder="Name"
                id="fornavn"
              />
            </label>
            <label htmlFor="email">
              <input type="email" placeholder="E-mail" id="email" />
            </label>
            <br />
            <label htmlFor="small-massage">
              <input type="text" placeholder="Message" id="small-massage" />
            </label>{" "}
            <br />
            <button type="submit" id="submit">
              Send
            </button>{" "}
          </div>{" "}
          <div className="ErrorMessage"></div>
        </form>{" "}
      </article>
      <img src={ItSupport} alt="hende" />
    </section>
  );
};
