import { useRef } from "react";
import "./Contact.scss";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

const Contact = ({ myTheme }) => {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
      console.log(form.current);
  
      emailjs
        .sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY').then(
          (result) => {
            toast.success("Message sent successfully");
          },
          (error) => {
            toast.error(error.text);
          }
        );
      e.target.reset();
    };
  return (
    <section id="contact" className="contact"  data-theme={myTheme}>
        <h1 className="heading"> Contact <span>me</span></h1>

        <div className="row">
    
            <div className="info-container">

                <h1>get in touch</h1>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas dolorem sunt sapiente vel minus eaque voluptate fugit corrupti omnis tempora?</p>

                <div className="box-container">

                    <div className="box">
                        <i className="fas fa-map-marker-alt"></i>
                        <div className="info">
                            <h3>address :</h3>
                            <p>San Diego, USA - 90004</p>
                        </div>
                    </div>

                    <div className="box">
                        <i className="fas fa-envelope"></i>
                        <div className="info">
                            <h3>email :</h3>
                            <p>example@email.com</p>
                        </div>
                    </div>

                    <div className="box">
                        <i className="fas fa-phone"></i>
                        <div className="info">
                            <h3>number :</h3>
                            <p>+123-456-7890</p>
                        </div>
                    </div>

                </div>

                <div className="share">
                    <a href="#" className="fab fa-facebook-f"></a>
                    <a href="#" className="fab fa-twitter"></a>
                    <a href="#" className="fab fa-instagram"></a>
                    <a href="#" className="fab fa-linkedin"></a>
                </div>

            </div>

            <form ref={form} onSubmit={sendEmail}>


                <div className="inputBox">
                    <input type="text" name="user_name" placeholder="Last name" />
                    <input type="text" name="user_name" placeholder="First name" />
                </div>

                <div className="inputBox">
                    <input type="email" name="user_email" placeholder="your email" />
                    <input type="text" name="subject" placeholder="your subject" />
                </div>

                <textarea name="message" placeholder="your message" id="" cols="30" rows="10"></textarea>

                <input type="submit" value="send message" className="btn" /> 

            </form>

</div>

    </section>
  )
}

export default Contact;