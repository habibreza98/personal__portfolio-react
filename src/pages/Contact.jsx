export default function Contact() {
  return (
    <div className="contact page">
      <h2 className="contact-title">Contact Me</h2>

      <div className="contact-wrapper">
        <div className="contact-info">
          <h3>Let’s Talk</h3>
          <p>
            Have a project, idea, or just want to say hi?
            Drop a message. I don’t bite 
          </p>

          <ul>
            <li><strong>Email:</strong> habibadnanr18@gmail.com</li>
            <li><strong>Location:</strong> Bangladesh</li>
          </ul>
        </div>

        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" rows="5" required></textarea>

          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
}
