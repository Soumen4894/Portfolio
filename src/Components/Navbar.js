import React from 'react'
import photo from "./photo.png"
import img from "./IMG.jpg"
import first from "./2042.png"
import second from "./2052.png"
import third from "./2062.png"
import "./Navbar.css";
import { Icon } from '@iconify/react';
import animation from "./Animation.json";
import Lottie from 'lottie-react';
import logo from "./Logo.jpeg"
import soumen from "./Soumen.png"
import C_logo from "./C_Lang.png";
import Cpp_logo from "./C++_Lang.png";
import JS_lang from "./JS_Lang.png";
import CSS_lang from "./CSS_Lang.png";
import HTML_lang from "./HTML2_Lang.png";
import SQl from "./SQL_Lang.png"
import React_logo from "./react-logo.png"
import Node_logo from "./Node_logo.png";
import Mongodb_logo from "./mongodb_logo.png"
import Bootstrap_logo from "./bootstrap-logo.png"
import mui_logo from "./mui-logo.png"
import MySQL_logo from "./mysql-logo.png"
import Git_logo from "./Git-Icon.png"
import Github_logo from "./github-logo.png";
import Windows_logo from "./windows-logo.png"
import MS_logo from "./ms office logo.jpg"
import Canva_logo from "./canva-logo.jpeg"
import VS_logo from "./vscode.jpeg";




const Navbar = () => {
    return (
        <div className='all'>
            <div className='sticky-top'>
                <nav className="navbar navbar-expand-lg navbar-light">
                    <div className="container-fluid">
                        <a className="navbar-brand mx-5" href='#home'><img src={soumen} alt='logo' /></a>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <a className="nav-link active mx-3 " aria-current="page" href='#home' style={{ paddingLeft: 500 }}>Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link active mx-3" aria-current="page" href='#photo'>About</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link active mx-3" aria-current="page" href='#skill'>Skills</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link active mx-3" aria-current="page" href='#education'>Education</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link active mx-3" aria-current="page" href='#project'>Projects</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link active mx-3" aria-current="page" href='#contact'>Contact</a>
                                </li>

                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
            <div >
                <div className='container d-flex' id='home'>
                    <div className='container' style={{ width: 700 }}>


                        <h1 style={{ paddingTop: 120, color: "#3C9A9A" }}>Welcome</h1>
                        <h1 style={{ color: "#31DBA2" }}>SOUMEN MANDAL</h1>
                        <h2>Full Stack Developer</h2>
                        <h3 >“Learning to write programs stretches your mind, and helps you think better, creates a way of thinking about things that I think is helpful in all domains.” - Bill Gates.</h3>
                        <a href="https://drive.google.com/file/d/1H70MZlPanKsY-QKWLKj8plRJDrnT79o5/view?usp=drive_link" target="_blank" rel='noreferrer'>
                            <button className='btn btn-secondary btn-lg'>Download Resume</button>
                        </a>
                    </div>
                    <div className='lottie'>
                        <Lottie animationData={animation} />
                    </div>

                </div>

            </div  >
            <div style={{ backgroundColor: "#EAF2F2" }}>
                <div className='container about' id='about' >
                    <img id='photo' src={photo} alt='photo' />
                    <div className='container'>
                        <h1 style={{ textAlign: 'center', marginTop: 50 }}>About Me</h1>
                        <div className='container'>
                            <h4>Hello and welcome to my portfolio! I'm Soumen Mandal, a dedicated MERN Stack Developer from India . I'm thrilled to share my journey, experience, and the projects that showcase my skills in development.</h4>
                        </div>
                        <div className='container d-flex mx-5 my-5' >
                            <h5 style={{ width: 200, textAlign: 'center', paddingTop: 7 }}><u>Developer Profile</u></h5>
                            <div className='mx-2'>
                                <a style={{ paddingRight: 18 }} href='https:www.linkedin.com/in/soumen-mandal-sm4894' target='_blank' rel="noreferrer"><Icon className='icon' icon="mdi:linkedin" color="#64748b" width="47" height="47" /></a>
                                <a style={{ paddingRight: 18 }} href='https://github.com/Soumen4894' target='_blank' rel="noreferrer"><Icon className='icon' icon="fa-brands:github-square" color="#64748b" width="44" height="44" /></a>
                            </div>
                        </div>
                        <div className='container d-flex mx-5 my-5' >
                            <h5 style={{ width: 200, textAlign: 'center', paddingTop: 7 }}><u>Coding Profile</u></h5>
                            <div className='mx-2'>
                                <a style={{ paddingRight: 18 }} href='https://leetcode.com/soumen123/' target='_blank' rel="noreferrer"><Icon className='icon' icon="simple-icons:leetcode" color="#64748b" width="45" height="45" /></a>
                                <a style={{ paddingRight: 18 }} href='https://auth.geeksforgeeks.org/user/soumenmandal4894/?utm_source=geeksforgeeks&utm_medium=my_profile&utm_campaign=auth_user' target='_blank' rel="noreferrer"><Icon className='icon' style={{ padding: "5px" }} icon="simple-icons:geeksforgeeks" color="#64748b" width="53" height="53" /></a>
                            </div>
                        </div>

                    </div>

                </div>

            </div>
            <div className='skills' id='skill'>
                <div className='container'>
                    <h1 style={{ textAlign: 'center' }}>Skills</h1>
                    <div className='container '>
                        <div className='container ' style={{ paddingBottom: "15px" }}>
                            <h5 className='all'>Programming Langague:</h5>
                            <div className='container d-flex'>
                                <img className='lang' src={C_logo} alt='C Programming' />
                                <img className='lang' src={Cpp_logo} alt='C++ Programming' />
                                <img className='lang' src={JS_lang} alt='JavaScript' />
                                <img className='lang' src={CSS_lang} alt='CSS' />
                                <img className='lang' src={HTML_lang} alt='HTML' />
                                <img className='lang' src={SQl} alt='SQL' />
                            </div>
                        </div>
                        <div className='container' style={{ paddingBottom: "15px" }}>
                            <h5 className='all'>Library and Framework:</h5>
                            <div className='container d-flex'>
                                <img className='lang' src={React_logo} alt='ReactJS' />
                                <img className='lang' src={Node_logo} alt='NodeJS' />
                                <img className='lang' src={Mongodb_logo} alt='MongoDB' />
                                <img className='lang' src={MySQL_logo} alt='MySQL' />
                                <img className='lang' src={Bootstrap_logo} alt='Bootstrap' />
                                <img className='lang' src={mui_logo} alt='MUI' />
                            </div>
                        </div>
                        <div className='container' style={{ paddingBottom: "15px" }}>
                            <h5 className='all'>Tools:</h5>
                            <div className='container d-flex'>
                                <img className='lang' src={Git_logo} alt='Git' />
                                <img className='lang' src={Github_logo} alt='Github' />
                                <img className='lang' src={Windows_logo} alt='Windows' />
                                <img className='lang' src={MS_logo} alt='MS office' />
                                <img className='lang' src={Canva_logo} alt='Canva' />
                                <img className='lang' src={VS_logo} alt='VS code' />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div style={{ backgroundColor: "#EAF2F2" }}>
                <div className='education' id='education'>
                    <div>
                        <div className='container'>
                            <h1 style={{ paddingTop: 50, paddingBottom: 50, textAlign: 'center' }}>Education</h1>
                            <div className='container  box' >
                                <img className='img box2' style={{ padding: 0 }} src={img} alt='img' />
                                <div className='container'>
                                    <h2 style={{ color: "#B26666", fontWeight: "bold" }}>RAMKRISHNA MAHATO GOVERNMENT ENGINEERING COLLEGE</h2>
                                    <h4 style={{ fontWeight: "bold" }}>B.Tech in Electronics & Communication Engineering(ECE)</h4>
                                    <h4 style={{ fontWeight: "bold" }}>CGPA : 8.67(upto 6th)</h4>
                                    <h4 style={{ fontWeight: "bold" }}>August,2020 - July,2024</h4>
                                </div>
                            </div>
                            <div className='text-center' style={{ margin: 10 }}><Icon icon="emojione-monotone:up-arrow" width="64" height="64" color="#284b53" /></div>
                            <div className='container box' >
                                <img className='img box2' src={logo} alt='img' />
                                <div className='container'>
                                    <h2 style={{ color: "#B26666", fontWeight: "bold" }}>BANKURA HINDU HIGH SCHOOL</h2>
                                    <h4 style={{ fontWeight: "bold" }}>Higher Secondary Education(Science Stream)</h4>
                                    <h4 style={{ fontWeight: "bold" }}>Parcantage : 78.6%</h4>
                                    <h4 style={{ fontWeight: "bold" }}>April,2018 - March,2020</h4>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className='projects' id='project'>
                    <div className='container '>
                        <h1 style={{ paddingTop: 50, paddingBottom: 50, textAlign: 'center' }}>Projects</h1>
                        <div className='container d-flex justify-content-center'>
                            <div className="card" >
                                <a href='https://study-monk-client.vercel.app/' target='_blank' rel="noreferrer"><img src={third} className="card-img-top" alt="..." /></a>
                                <div className="card-body">
                                    <h5 style={{ fontWeight: "bold" }}>e-Learning Application</h5>
                                    <p className="card-text">E-learning applications provide a flexible and accessible platform for education, allowing learners to access courses and resources anytime and anywhere.</p>
                                    <div className='container'>
                                        <span className='box3'>MERN Stack</span>
                                        {/* <span className='box3'>Node JS</span>
                                        <span className='box3'>Express JS</span>
                                        <span className='box3'>MongoDB</span> */}

                                    </div>
                                </div>
                            </div>
                            <div className="card" >
                                <a href='https://authentication-app-bysm.netlify.app' target='_blank' rel="noreferrer"><img src={first} className="card-img-top" alt="..." /></a>
                                <div className="card-body">
                                    <h5 style={{ fontWeight: "bold" }}>Authentication App</h5>
                                    <p className="card-text">Authentication apps bolster security by generating unique codes for account access. Examples include Google Authenticator, enhancing protection beyond traditional passwords.</p>
                                    <div className='container'>
                                        <span className='box3'>React JS</span>
                                        <span className='box3'>Bootstrap</span>

                                    </div>
                                </div>
                            </div>
                            <div className="card" >
                                <a href='https://soumen4894.github.io/Weather-App/' target='_blank' rel="noreferrer"><img src={second} className="card-img-top" alt="..." /></a>
                                <div className="card-body">
                                    <h5 style={{ fontWeight: "bold" }}>Weather App</h5>
                                    <p className="card-text">Weather apps deliver real-time updates on temperature, humidity, and wind speed, aiding users in planning outdoor activities and travel.</p>
                                    <div className='container'>
                                        <span className='box3'>JavaScript</span>
                                        <span className='box3'>Bootstrap</span>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{ backgroundColor: "#EAF2F2" }}>
                <div className='contact' id='contact'>
                    <div className='container' style={{ paddingBottom: "40px" }}>
                        <h1 style={{ paddingTop: 50, paddingBottom: 50, textAlign: 'center' }}>Contact</h1>
                        <div className='container d-flex'>
                            <div className='container font-b' >
                                <div className='container d-flex' style={{ marginBottom: 30 }}>
                                    <a href='https://www.google.com/maps/place/Ranibandh,+West+Bengal/@22.8659931,86.7840528,16z/data=!3m1!4b1!4m6!3m5!1s0x39f631299248f481:0xdb675a86d135a233!8m2!3d22.8660646!4d86.7831085!16s%2Fg%2F11c59_qvhw?entry=ttu' target='_black' rel="noreferrer"><Icon className='box2 icon1' icon="material-symbols:home-outline" width="64" height="64" color="#64748b" /></a>
                                    <div >
                                        <h5 style={{ fontWeight: "bold" }}>Location</h5>
                                        <h6 style={{ fontWeight: "bold" }}>Bankura, 722148, West Bengal</h6>
                                    </div>


                                </div>
                                <div className='container d-flex' style={{ marginBottom: 30 }}>
                                    <a href='tel:8391854894' target='_black' rel="noreferrer"><Icon className='box2 icon1' icon="line-md:phone-call-twotone-loop" width="64" height="64" color="#64748b" /></a>
                                    <div>
                                        <h5 style={{ fontWeight: "bold" }}>Telephone</h5>
                                        <h6 style={{ fontWeight: "bold" }}>+91 8391854894</h6>
                                    </div>
                                </div>
                                <div className='container d-flex' style={{ marginBottom: 30 }}>
                                    <a href='mailto:soumenmandal0008@gmail.com' target='_black' rel="noreferrer"><Icon className='box2 icon1' icon="clarity:email-line" width="64" height="64" color="#64748b" /></a>
                                    <div>
                                        <h5 style={{ fontWeight: "bold" }}>Email</h5>
                                        <h6 style={{ fontWeight: "bold" }}>soumenmandal0008@gmail.com</h6>

                                    </div>
                                </div>
                            </div>
                            <div className='container form'>
                                <form>
                                    <input className='form-control' type='text' placeholder='Name' />
                                    <input className='form-control' type='email' placeholder='Email' />
                                    <input className='form-control' type='text' placeholder='Phone' />
                                    <textarea className='form-control' typeof='message' placeholder='Message'></textarea>
                                    {/* <button class="btn btn1 btn-secondary btn-lg" type="button">Button</button> */}
                                    <button className='form-control btn1' type='button'>Send Message</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container'></div>

        </div>
    )
}

export default Navbar
/*
style="
    padding-left: 180px;
    icon1

 */