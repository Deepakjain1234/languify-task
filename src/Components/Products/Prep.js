import React from "react";
import { Navbar } from "../Navbar/Navbar";
import { Heading } from "../Other/Heading";
// import { About } from "../Other/About";
import '../../Asset/css/main.css'
import video from '../../Asset/image/video.mp4'
import ReactPlayer from 'react-player'
import { Footer } from "../Home/Middle/Footer";
import { Testimonial } from "../Other/Testimonial";
import { useState } from "react";





export const Prep = () => {
    const [active1, setactive1] = useState('product');
    const [active2, setactive2] = useState('fresher');

    return (
        <>
            <Navbar />
            < Heading name="In-Prep AI" />
            <div className="flex-about">
                <div className="inner-about">
                    <h2>
                        About In-Prep AI
                    </h2>
                    <div className="about-box">
                        <div className="paragraph-box">
                            <p>
                                Inpap AI is an AI-based mock interview service designed to help individuals prepare for real job interviews. This innovative platform leverages artificial intelligence to simulate interview scenarios and provide users with personalized feedback and guidance. Inpap AI's advanced algorithms assess a candidate's responses, body language, and overall performance, offering valuable insights to improve interview skills. With its user-friendly interface and detailed feedback, Inpap AI assists job seekers in building confidence and refining their interview techniques, increasing their chances of success in the competitive job market. It offers a convenient and efficient way to practice and perfect interview skills, making it an invaluable tool for career advancement.
                            </p>
                        </div>
                        <div className="video-box">
                            <ReactPlayer url={video} playing={true} playIcon controls={true} />
                        </div>
                    </div>
                </div>
            </div>

            <div className="interview-section">
                <div className="inner-interview">
                    <h1>Meet your  Personal Interviewer</h1>
                    {/* <h3>Try conversing with the AI in an interview scenario to checkout what we have in store for you</h3> */}
                    <div className="main-interview">
                        <div className="interview-box">
                            {/* <h2>Select job role</h2> */}
                            {active1 == 'product' ?
                                <div className="select-box1">
                                    <h4>Product Manager</h4>
                                </div> :
                                <div className="select-box" onClick={() => { setactive1("product") }}>
                                    <h4>Product Manager</h4>
                                </div>
                            }
                            {active1 == 'sales' ?
                                <div className="select-box1">
                                    <h4>Sales and Marketing</h4>
                                </div> :
                                <div className="select-box" onClick={() => { setactive1("sales") }}>
                                    <h4>Sales and Marketing</h4>
                                </div>
                            }
                            {active1 == 'data' ?
                                <div className="select-box1">
                                    <h4>Data Analyst</h4>
                                </div> :
                                <div className="select-box" onClick={() => { setactive1("data") }}>
                                    <h4>Data Analyst</h4>
                                </div>
                            }
                            {active1 == 'soft' ?
                                <div className="select-box1">
                                    <h4>Softwere Engineer</h4>
                                </div> :
                                <div className="select-box" onClick={() => { setactive1("soft") }}>
                                    <h4>Softwere Engineer</h4>
                                </div>
                            }



                        </div>
                        <div className="interview-box">
                            {/* <h2>Select Level</h2> */}
                            {active2 == 'fresher' ?
                                <div className="select-box1">
                                    <h4>Fresher</h4>
                                </div> :
                                <div className="select-box" onClick={() => { setactive2("fresher") }}>
                                    <h4>Fresher</h4>
                                </div>
                            }
                            {active2 == 'mid' ?
                                <div className="select-box1">
                                    <h4>Mid Senior</h4>
                                </div> :
                                <div className="select-box" onClick={() => { setactive2("mid") }}>
                                    <h4>Mid Senior</h4>
                                </div>
                            }

                            {active2 == 'senior' ?
                                <div className="select-box1">
                                    <h4>Senior</h4>
                                </div> :
                                <div className="select-box" onClick={() => { setactive2("senior") }}>
                                    <h4>Senior</h4>
                                </div>
                            }

                        </div>
                    </div>
                    <button className="start-button"> Start Interview</button>
                </div>
            </div>
            <Testimonial />
            <Footer />
        </>




    )
}