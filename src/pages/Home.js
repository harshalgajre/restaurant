import React from 'react';
import Layout from '../components/Layout/Layout'
import { Link} from 'react-router-dom';
import "../styles/HomeStyles.css";
import videoBg from '../assets/videoBg.mp4';
import Button from "@material-ui/core/Button";





const Home = () => {

 
  return (
    <Layout>
      <div className='main-home'>
        <div className='overlay'></div>
        <video src={videoBg} autoPlay loop muted />
        <div className='content-home'>
          <h1>Food webside</h1>
          <p>Best food for your taste</p> <br />
          <Link to='/menu'><Button className='btn'>ORDER NOW</Button></Link>
        </div>
      </div>

    
    
      
    
 
     




    </Layout>
  )
}

export default Home