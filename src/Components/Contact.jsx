import React from 'react'
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import GitHubIcon from '@material-ui/icons/GitHub';

let Contact = () =>{
    const GitHub = 'https://github.com/Prashant-Jhim'
    const Facebook = 'https://www.facebook.com/prashant.jhim.5?hc_ref=ARRwYu5x032FY_3r0qowjaOvQ21WaBsjrNNIYSRLCe0-9pVPQ3w49dZ3ZwFRxVS1bMY'
    const Instagram= 'https://www.instagram.com/prashant_jhim/'
    const Img = 'https://instagram.fluh2-1.fna.fbcdn.net/v/t51.2885-15/e35/130274043_2468136796824648_7517640838861927620_n.jpg?tp=1&_nc_ht=instagram.fluh2-1.fna.fbcdn.net&_nc_cat=100&_nc_ohc=v9cXM1N9NysAX9YDeBN&edm=AP_V10EAAAAA&ccb=7-4&oh=fe95105e073add081fabed602ee80544&oe=608C89FD&_nc_sid=4f375e'
    return (
        <div id = 'Contact'>
        <img src = {Img}/>
        <div id = 'Details'>
        <h2 id = 'About'>About Me</h2>
        <h2 id = 'FirstPoint'>*</h2>
        <h2 id = 'Intro'>My Name is Prashant-Jhim</h2>
        <br/>
        <h2 id = 'SecondPoint'>*</h2>
        <h2 id = 'Self'>I Am Self-Taught Developer</h2>
        <br/>
        <h2 id = 'ThirdPoint'>*</h2>
        <h2>Currently Learning Front-End</h2>
        <h2 id = 'Buttons'>Contact Me - <a href={Instagram} target = '_blank'><InstagramIcon/></a> <a href={Facebook} target = '_blank'><FacebookIcon/></a><a id = 'github' href = {GitHub} target = '_blank'><GitHubIcon/></a></h2>
        </div>
        </div>
    )
}
export default Contact