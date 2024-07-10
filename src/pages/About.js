import React from 'react'
import Layout from '../components/Layout/Layout'
import { Link } from 'react-router-dom';
import "../styles/aboutStyles.css";
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import First from '../images/first.jpeg';
import Second from '../images/second.jpeg';
import Thired from '../images/thired.jpeg';
import Gallery from "../images/gallery.jpeg";



const About = () => {

  return (
    <Layout>
      <div className='about'>

        <div className='heading'>
          <h3>Welcome <span>About Us</span> </h3>
        </div>


        <div className='text'>
          <div className='text-1'><h3>Welcome to Fresh:Food:Cafe</h3> <br />
            <p>Experience our unique culinary journey featuring Italian-inspired cuisine, our very own cheese and bakery offerings, 
              and an eco-friendly approach with fresh vegetables and greens. Our restaurant boasts spacious halls 
              adorned with expansive panoramic windows and open terraces, providing a delightful dining atmosphere. </p>
            <p> Immerse yourself in the world of our authentic cuisine, expertly infused with the flavors of Italy. 
                Our focus lies on crafting original dishes that cater to the discerning palate, reflecting the sunny 
                essence of Italy through the culinary talent, experience, and skill of our chef.
            </p>
            <p>In addition to aromatic freshly baked goods, we prepare homemade pasta directly in our restaurant.
               Our commitment to eco-friendliness extends to our vegetable and herb garden, where we grow the 
               freshest produce for our delectable salads, snacks, soups, and side dishes.



</p>

          </div>
          <div className='text-1'>
            <div id='aboutUs' className='carousel-wrapper'>
              <Carousel infiniteLoop useKeyboardArrows autoPlay>
                <div>
                  <div className='img'>
                  <img variant='top' src={First} alt=""/>
                    <div className='center'>
                      <div><h3>ABOUT US</h3></div>
                      <div><p>Welcome to Indian Restaurant, Pune's top destination for authentic Indian cuisine. 
                        Enjoy our delicious dishes at affordable prices and savor the true taste of India.
                         Visit us today for a delightful dining experience!</p></div>
                    </div>
                  </div>
                </div>
                <div>

                  <div className='img'>
                    <img variant='top' src={Second}alt="" />
                    <div className='center'>
                      <div><h3>TAKE AWAY MENU</h3></div>
                      <div><p>Check out the exciting take-away menu at Welcome  Wind & Waves Restaurant! 
                        We have all your favorite hot meals ready for you. Place your order now and enjoy
                          the flavors you love from the comfort of your home!</p></div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className='img'>
                    <img variant='top' src={Thired} alt="" />
                    <div className='center'>
                      <div><h3>SPECIAL OFFERS</h3></div>
                      <div>Take advantage of our amazing 15% OFF on all takeaway orders! 
                               Visit our website to explore special deals and offers.</div>
                    </div>
                  </div>
                </div>
              </Carousel>
            </div>
          </div>
        </div>



        <div className='hero-image' style={{
          backgroundImage: `url(${Gallery})`,
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover'
        }}>
          <div class="hero-text">
            <h2>#WelcomeIndian<br /> RestaurantMoment</h2>
            <p>Enjoy your stay at Welcome Indian Restaurant? Share your moments with us.
            </p>
            <Link to='/gallery'><button className='button'>GO TO GALLERY</button></Link>
          </div>
        </div>




      </div>
    </Layout>
  )
}
export default About;



