function Contact(props) {
  return (
    <div className="contact-form">
      <h1>Contact Form</h1>
      <form>
        <label htmlFor="name">Name: </label>
        <br />
        <input id="name" type="text" onBlur={props.onFocusOut}></input>
        <p>{props.nameError ? "Please type a valid input" : ""}</p>
        <label htmlFor="email">Email: </label>
        <br />
        <input id="email" type="text" onBlur={props.onEmailFocusOut}></input>
        <p>{props.emailError ? "Please type a valid email" : ""}</p>
        <label htmlFor="message">Message: </label>
        <br />
        <textarea id="message" rows="10"></textarea>
        <br />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default Contact;
