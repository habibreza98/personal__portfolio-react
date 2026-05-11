import emailjs from "emailjs-com";

export default function Contact() {

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_zrun8v3",
      "template_qqgsxq9",
      e.target,
      "rlYoF8-POwV_fG877"
    )
    .then(() => {
      alert("Message sent successfully ✅");
      e.target.reset();
    })
    .catch((error) => {
      alert("Something went wrong ❌");
      console.log(error);
    });
  };

  return (
    <div className="contact page">
      <h2 className="contact-title">Contact Me</h2>

      <div className="contact-wrapper">
        <div className="contact-info">
          <h3>Let’s Talk</h3>
          <p>
            Have a project, idea, or just want to say hi?
            Drop a message.😄
          </p>

          <ul>
            <li><strong>Email:</strong> habibadnanr18@gmail.com</li>
            <li><strong>Location:</strong> Bangladesh</li>
          </ul>
        </div>

        <form className="contact-form" onSubmit={sendEmail}>
          <input type="text" name="user_name" placeholder="Your Name" required />
          <input type="email" name="user_email" placeholder="Your Email" required />
          <textarea name="message" placeholder="Your Message" rows="5" required />

          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
}
