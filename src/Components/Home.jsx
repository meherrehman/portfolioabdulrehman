import React, {useEffect} from "react";
import Navbar from "./Navbar";
import "../index.css";
import ProjectComponent from "../Components/ProjectComponent"
import img1 from "../Images/myImage.jpg";
import service from "../Images/service.png"
import about from "../Images/about.png"
import TagFacesIcon from '@mui/icons-material/TagFaces';
import weatherapp from "../Videos/weatherapp.mp4"
import { NavLink } from "react-router-dom";
import Footer from "./Footer";
import Aos from "aos";
import "aos/dist/aos.css";


const Home = () =>{

    useEffect(()=>{
        Aos.init({duration : 1000})
    }, [])

    return(
        <>
        <Navbar />
        <div className="container">
            <div className="main-area" id="home-area">
                <div className="row">
                    <div className="col-12 text-center">
                        <img src={img1} alt="myImage" className="main-area-img mt-5"/>
                    </div>
                </div>
                <div className="main-area-poster" id="poster-1">
                    <h3 className="main-area-poster-centent">Hi ! <TagFacesIcon /><br />I am Abdul Rehman</h3>
                </div>
                <div className="main-area-poster" id="poster-2">
                    <h3 className="main-area-poster-centent">UI / UX Designer</h3>
                </div>
                <div className="main-area-poster" id="poster-3">
                    <h3 className="main-area-poster-centent">Web Developer</h3>
                </div>
            </div>

            <div id="skills">
                <div className="row">
                    <div className="col-12">
                        <div className="display-2 text-center skills-header text-white">My Services</div>
                    </div>
                </div>
                <div className="row align-items-center flex-lg-row flex-column-reverse">
                    <div className="col-lg-6 col-12 text-center">
                    <div className="service-area-poster" id="service-1" data-aos="zoom-in">
                    <h3 className="service-area-poster-content">Web Development Skills</h3>
                    <p className="service-skills-list">Html5 , Css3 , Javascript , Jquery , Bootstrap5 , ReactJs , NextJs , NodeJs , ExpressJs , Redux , MongoDB</p>
                    </div>
                    <div className="service-area-poster my-2" id="service-2" data-aos="zoom-in">
                    <h3 className="service-area-poster-content">UX / UI Skills</h3>
                    <p className="service-skills-list">Figma , Adobe XD</p>
                    </div>
                    </div>
                    <div className="col-lg-6 col-12 text-center">
                        <img src={service} alt="serviceimg" id="skills-img"/>
                    </div>
                </div>
            </div>


            <div id="project">
                <div className="row">
                    <div className="col-12">
                        <div className="display-2 text-center project-header mt-5 text-white">My Projects</div>
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col-12">
                        <ProjectComponent vidsrc={weatherapp} projectTitle="ReactJs WeatherApp" projectDesc="This Project (WeatherApp) is designed and developed in Reactjs , Html , Css and javascript also use real weather api to deal with dynamic side."/>
                    </div>
                </div>
                <div className="row ">
                    <div className="col-12 text-center">
                    <NavLink exact to="/Project">
                        <button className="btn btn-primary">See More Projects</button>
                    </NavLink>
                    </div>
                </div>
            </div>


            <div id="about">
                <div className="row">
                    <div className="col-12">
                        <div className="display-2 text-center about-header mt-5 text-white">About Me.</div>
                    </div>
                </div>
                <div className="row align-items-center">
                    <div className="col-xl-6 col-12 text-center">
                        <img src={about} alt="about" width="270px"/>
                    </div>
                    <div className="col-xl-6 col-12">
                        <div className="about-content text-center mx-auto" data-aos="zoom-in">
                            Hi! My name is <span className="about-content-highlight">abdulrehman</span> . I am currently a student of <span className="about-content-highlight">BSIT</span> at national textile university fsd , pakistan. A freelancer at <span className="about-content-highlight">fiverr</span> and <span className="about-content-highlight">upwork</span> since 2020. I have a strong grip on <span className="about-content-highlight">web development</span> , develop userfriendly responsive front-end and back-end. 
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
        </>
    )
}

export default Home;