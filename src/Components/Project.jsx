import React from "react";
import Navbar from "./Navbar";
import ProjectComponent from "./ProjectComponent";
import portfoliovid from "../Videos/portfolio.mp4"
import insta from "../Videos/login3(insta).mp4"
import psd1 from "../Videos/psd1.mp4"
import psd2 from "../Videos/psd2.mp4"
import signup from "../Videos/signup1.mp4"
import template1 from "../Videos/template1.mp4"
import template2 from "../Videos/template2.mp4"
import template3 from "../Videos/template3.mp4"
import netflixapp from "../Videos/netflixapp.mp4"
import weatherapp from "../Videos/weatherapp.mp4"

const Project = () =>{
    return(
        <>
        <Navbar />
        <ol>
            <li>
                <ProjectComponent vidsrc={portfoliovid} projectTitle="Portfolio Project" projectDesc="This is my previous portfolio site developed and designed by reactjs,bootstrap5,css,javascript"/>
            </li>
            <li>
                <ProjectComponent vidsrc={insta} projectTitle="Instagram Clone" projectDesc="This is Instagram Clone developed and designed by bootstrap5,css"/>
            </li>
            <li>
                <ProjectComponent vidsrc={psd1} projectTitle="Covert PSD design to Html/Bootstrap5" projectDesc="Develop a Psd design to html5 / Bootstrap fully responsive and user friendly"/>
            </li>
            <li>
                <ProjectComponent vidsrc={psd2} projectTitle="Covert PSD design to Html/Bootstrap5" projectDesc="Develop a Psd design to html5 / Bootstrap fully responsive and user friendly"/>
            </li>
            <li>
                <ProjectComponent vidsrc={signup} projectTitle="SignUp Form" projectDesc="Create a signup form with bootstrap5 , html5 and css3"/>
            </li>
            <li>
                <ProjectComponent vidsrc={template1} projectTitle="Web Template # 1" projectDesc="Develop a simple template with html5 , css3 , javascript and bootstrap5 "/>
            </li>
            <li>
                <ProjectComponent vidsrc={template2} projectTitle="Web Template # 2" projectDesc="Develop a simple template with html5 , css3 , javascript and bootstrap5 "/>
            </li>
            <li>
                <ProjectComponent vidsrc={template3} projectTitle="Web Template # 3" projectDesc="Develop a simple template with html5 , css3 , javascript and bootstrap5 "/>
            </li>
            <li>
                <ProjectComponent vidsrc={netflixapp} projectTitle="ReactJs NetflixApp" projectDesc="Develop a simple NetflixApp with ReactJS , html5 , css3 , javascript and bootstrap5 "/>
            </li>
            <li>
            <ProjectComponent vidsrc={weatherapp} projectTitle="ReactJs WeatherApp" projectDesc="This Project (WeatherApp) is designed and developed in Reactjs , Html , Css and javascript also use real weather api to deal with dynamic side."/>
            </li>
        </ol>
        </>
    )
}

export default Project;