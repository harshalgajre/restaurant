import React, { useState } from 'react'
import Layout from '../components/Layout/Layout'
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/ContactStyles.css";
import Card1 from "../images/z.jpeg";
import Card2 from "../images/y.jpeg";
import { LinkedIn } from '@material-ui/icons';
import PersonIcon from '@material-ui/icons/Person';
import Location from '../images/location.jpeg';
import Call from '../images/call.jpeg';
import Email from '../images/email.jpeg';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import GitHubIcon from '@material-ui/icons/GitHub';


const Contact = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !message) {
      alert('Please fill out all required fields');
      return;
    }
   else{
    alert('Message successfully sent');
   }
   

  }

  return (
    <Layout>
      <div className='container-1'>

        <div className='heading'>
          <h3>Welcome <span>Contact</span> </h3>
        </div>

        <div class="row">
          <div class="col-sm-6 mb-3 mb-sm-0">
            <div class="card" style={{ backgroundImage: `url(${Card1})` }}>
              <div class="card-body">
                <h5 class="card-title">Contact Info</h5>
                <p class="card-text">
                  <div className='main'>
                    <div className='img'><img src={Location} className='location' alt='logo' /></div>
                    <div className='word'><li>Address</li> <li>Shivaji Nagar, Pune</li></div>
                  </div>
                  <div className='main'>
                    <div className='img'><img src={Email} className='location' alt='logo' /></div>
                    <div className='word'><li>Email</li> <li>harshalgajre147@gmail.com</li></div>
                  </div>
                  <div className='main'>
                    <div className='img'><img src={Call} className='location' alt='logo' /></div>
                    <div className='word'><li>Call Us</li> <li>7509546268</li></div>
                  </div>
                </p>
              </div>

            </div>
          </div>
          <div class="col-sm-6">

            <div class="card" style={{ backgroundImage: `url(${Card2})` }}>
              <div class="card-body">
                <h5 class="card-title">Openning Hours</h5>
                <p class="card-text">
                  <p>Monday : 11am - 9pm</p>
                  <p>Tuesday : 11am - 9pm</p>
                  <p>Wednesday : 1pm - 8pm</p>
                  <p>Thursday : 11am - 9pm</p>
                  <p>Friday : 11am - 9pm</p>
                  <p>Saturday : 12pm - 5pm</p>
                  <p>Sunday : Closed</p>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>






      <div className='container-contact' >
        <div><h2 class='heading-h3'>Send a Message</h2></div>
        <div class="container">

          <span class="big-circle"></span>
          <img src="img/shape.png" class="square" alt="" />
          <div class="form">
            <div class="contact-info">
              <h3 class="title">Contact Details:</h3>
              <p class="text">
              If you're a food lover, Wind & Waves Restaurant is the place for you! 
                 We serve delicious food at reasonable prices. 
                   Come experience the awesomeness for yourself!
              </p>

              <div class="info">
                <div class="information">
                  <img src="img/phone.png" class="icon" alt="" />
                  <p>Shivaji Nagar, Pune</p>
                </div>
                <div class="information">
                  <img src="img/email.png" class="icon" alt="" />
                  <p>harshalgajre147@gmail.com</p>
                </div>
                <div class="information">
                  <img src="img/phone.png" class="icon" alt="" />
                  <p>7509546268</p>
                </div>
              </div>

              <div class="social-media">
                <p>Connect with us :</p>
                <div class="social-icons">
                <a href="http://www.linkedin.com/in/harshal-gajre-23b051204" target="_blank" rel="noreferrer"><LinkedIn /></a>
                <a href="https://harshalgajreportfolio.netlify.app" target="_blank" rel="noreferrer"><PersonIcon /></a>
                <a href="https://github.com/harshalgajre" target="_blank" rel="noreferrer"><GitHubIcon /></a>
                <a href="https://x.com/" target="_blank" rel="noreferrer"><TwitterIcon /></a>
                <a href="https://www.instagram.com/" target="_blank" rel="noreferrer"><InstagramIcon /></a>
                                       
                </div>
              </div>
            </div>



            <div class="contact-form">
              <span class="circle one"></span>
              <span class="circle two"></span>

              <form onSubmit={handleSubmit}>
                <h3 class="title">Contact Us:</h3>
                <div class="input-container">
                  <input type="text" name="from_name" class="input" placeholder="Name"
                    onChange={(e) => setName(e.target.value)} required />
                  <span>Username</span>
                </div>
                <div class="input-container">
                  <input type="email" name="from_email" class="input" placeholder="Email"
                    onChange={(e) => setEmail(e.target.value)} required />
                  <span>Email</span>
                </div>

                <div class="input-container textarea">
                  <textarea name="message" class="input"
                    onChange={(e) => setMessage(e.target.value)} placeholder="Message"></textarea>
                  <span>Message</span>
                </div>
                <div className="button"><input type="submit" value="Send" className="btn" /></div>
              </form>

            </div>
          </div>
        </div>

        <script src="app.js"></script>
      </div>




    </Layout>


  )
}




export default Contact;


/***********
 * <div class="input-container">
                  <input type="number" name="from_name" class="input" placeholder="Phone.no" />
                  <span>Phone</span>
                </div> 
 * ******* */