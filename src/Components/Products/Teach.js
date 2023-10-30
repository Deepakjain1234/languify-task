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





export const Teach = () => {
    const [active1, setactive1] = useState('product');
    const [active2, setactive2] = useState('agile');
    const [active3, setactive3] = useState('fresher');

    return (
        <>
            <Navbar />
            < Heading name="Teach & Train" />
            <div className="flex-about">
                <div className="inner-about">
                    <h2>
                        About In-Prep AI
                    </h2>
                    <div className="about-box">
                        <div className="paragraph-box">
                            <p>
                            Teach & Train" is an innovative program that empowers individuals to enhance their communication skills significantly. This superpower-like service combines expert guidance and tailored training to help users develop effective communication techniques. It offers a range of tools and resources, including personalized feedback, interactive lessons, and real-world practice scenarios. Through this program, individuals can refine their verbal and non-verbal communication, public speaking, and interpersonal skills. "Teach & Train" is a valuable resource for those seeking to excel in their professional and personal interactions, enabling them to convey ideas with clarity, confidence, and impact.
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
                    <h1>Step Into the Future of Education and Training</h1>
                    <h3>Try conversing with the AI in an interview scenario to checkout what we have in store for you</h3>
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
                            {active2 == 'agile' ?
                                <div className="select-box1 larger">
                                    <h4>Agile Product Development</h4>
                                </div> :
                                <div className="select-box "  onClick={() => { setactive2("agile") }}>
                                    <h4>Agile Product Development</h4>
                                </div>
                            }
                            {active2 == 'ux' ?
                                <div className="select-box1 larger">
                                    <h4>User Centric Design</h4>
                                </div> :
                                <div className="select-box" onClick={() => { setactive2("ux") }}>
                                    <h4>User Centric Design</h4>
                                </div>
                            }

                            {active2 == 'data' ?
                                <div className="select-box1 larger">
                                    <h4>Data-Driven Decision Making</h4>
                                </div> :
                                <div className="select-box" onClick={() => { setactive2("data") }}>
                                    <h4>Data-Driven Decision Making</h4>
                                </div>
                            }
                            {active2 == 'product' ?
                                <div className="select-box1 larger">
                                    <h4>Product Strategy and Roadmap</h4>
                                </div> :
                                <div className="select-box " onClick={() => { setactive2("product") }}>
                                    <h4>Product Strategy and Roadmap</h4>
                                </div>
                            }
                            {active2 == 'stack' ?
                                <div className="select-box1 larger">
                                    <h4>Stack holder Management</h4>
                                </div> :
                                <div className="select-box" onClick={() => { setactive2("stack") }}>
                                    <h4>Stack holder Management</h4>
                                </div>
                            }

                        </div>
                        <div className="interview-box">
                            {/* <h2>Select Level</h2> */}
                            {active3 == 'fresher' ?
                                <div className="select-box1">
                                    <h4>Easy</h4>
                                </div> :
                                <div className="select-box" onClick={() => { setactive3("fresher") }}>
                                    <h4>Easy</h4>
                                </div>
                            }
                            {active3 == 'mid' ?
                                <div className="select-box1">
                                    <h4>Intermediate</h4>
                                </div> :
                                <div className="select-box" onClick={() => { setactive3("mid") }}>
                                    <h4>Intermediate</h4>
                                </div>
                            }

                            {active3 == 'senior' ?
                                <div className="select-box1">
                                    <h4>Advance</h4>
                                </div> :
                                <div className="select-box" onClick={() => { setactive3("senior") }}>
                                    <h4>Advance</h4>
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