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


 


export const Mock = () => {
    const [active1, setactive1] = useState('product');
    const [active2, setactive2] = useState('fresher');

    return (
        <>
            <Navbar />
            < Heading name="Mock [TOEFL/IELTS]" />
            <div className="flex-about">
                <div className="inner-about">
                    <h2>
                        About Mock [TOEFL/IELTS]
                    </h2>
                    <div className="about-box">
                        <div className="paragraph-box">
                            <p>
                            Mock TOEFL and IELTS tests are practice exams that simulate the actual TOEFL (Test of English as a Foreign Language) and IELTS (International English Language Testing System) exams. They provide candidates with a realistic exam experience, covering reading, writing, listening, and speaking sections. Mock tests help test-takers familiarize themselves with the exam format, manage time effectively, and identify their strengths and weaknesses. After taking a mock test, candidates receive feedback and scores, enabling them to tailor their preparation. Many resources offer these mock tests, serving as a vital part of TOEFL and IELTS preparation, assisting candidates in achieving their desired scores for academic, professional, or visa-related purposes.
                            </p>
                        </div>
                        <div className="video-box">
                            <ReactPlayer url={video} playing={true} playIcon controls={true} />
                        </div>
                    </div>
                </div>
            </div>

            
            <Testimonial />
            <Footer />
        </>




    )
}