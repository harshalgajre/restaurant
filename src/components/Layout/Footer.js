import { Typography } from '@mui/material';
import React from 'react'
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import GitHubIcon from '@material-ui/icons/GitHub';
import { LinkedIn } from '@material-ui/icons';
import PersonIcon from '@material-ui/icons/Person';
import "../../styles/FooterStyles.css";
import FastfoodIcon from '@material-ui/icons/Fastfood';


const Footer = () => {
    return (
        <>
            <footer class="footer-section">
                <div class='footer-left' >
                    <div class="footer-cta pt-5 pb-5">
                        <div class="row">
                            <div class="col-xl-4 col-md-4 mb-30">
                                <div class="single-cta">
                                    <i class="fas fa-map-marker-alt"></i>
                                    <div class="cta-text">
                                        <h4>Find us</h4>
                                        <span>Shivaji Nagar, Pune</span>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-4 col-md-4 mb-30">
                                <div class="single-cta">
                                    <i class="fas fa-phone"></i>
                                    <div class="cta-text">
                                        <h4>Call us</h4>
                                        <span>7509546268</span>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-4 col-md-4 mb-30">
                                <div class="single-cta">
                                    <i class="far fa-envelope-open"></i>
                                    <div class="cta-text">
                                        <h4>Mail us</h4>
                                        <span>harshalgajre147@gmail.com</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="footer-content pt-5 pb-5">
                        <div class="row">
                            <div class="col-xl-4 col-lg-4 mb-50">
                                <div class="footer-widget">
                                    <div class="footer-logo">
                                        <Typography color={'#ff5e14'} variant='h4' component="div" sx={{ flexGrow: 1 }}>

                                            <FastfoodIcon /> Wind & Waves

                                        </Typography>
                                    </div>
                                    <div class="footer-text">
                                        <p>Welcome to Wind & Waves Restaurant! Pune's premier Indian restaurant awaits you, 
                                            offering a delightful blend of distinct flavors and fresh ingredients at affordable prices. 
                                            Discover some of the finest food Pune has to offer by giving Wind & Waves Food a try today!


                                        </p>
                                    </div>
                                    <div class="footer-social-icon">
                                        <span>Follow us</span>         
                                        <a href="http://www.linkedin.com/in/harshal-gajre-23b051204" target="_blank" rel="noreferrer"><LinkedIn /></a>
                                        <a href="https://harshalgajreportfolio.netlify.app" target="_blank" rel="noreferrer"><PersonIcon /></a>
                                        <a href="https://github.com/harshalgajre" target="_blank" rel="noreferrer"><GitHubIcon /></a>
                                        <a href="https://x.com/" target="_blank" rel="noreferrer"><TwitterIcon /></a>
                                        <a href="https://www.instagram.com/" target="_blank" rel="noreferrer"><InstagramIcon /></a>
                                       
                                    </div>
                                </div>
                            </div>
                           
                            <div class="col-xl-4 col-lg-4 col-md-6 mb-50">
                                <div class="footer-widget">
                                    <div class="footer-widget-heading">
                                        <h3>Opening Hours</h3>
                                    </div>
                                    <div class="footer-text mb-25">
                                        <p>Monday : 11am - 9pm</p>
                                        <p>Tuesday : 11am - 9pm</p>
                                        <p>Wednesday : 1pm - 8pm</p>
                                        <p>Thursday : 11am - 9pm</p>
                                        <p>Friday : 11am - 9pm</p>
                                        <p>Saturday : 12pm - 5pm</p>
                                        <p>Sunday : Closed</p>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="copyright-area">
                    <div class="container">
                        <div class="row">
                            <div class="col-xl-6 col-lg-6 text-center text-lg-left">
                                <div class="copyright-text">
                                    <p>Copyright &copy; 2023, All Right Reserved by Welcome Wind & Waves Restaurant</p>
                                    <p style={{ color: '#FFFFFF' }}>Website design and developed by : Harshal Gajre</p>
                                </div>
                            </div>                          
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer