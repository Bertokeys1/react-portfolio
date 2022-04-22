import React from 'react'
import portfolioPic from '../assets/images/Portfolio-pic.jpg'


export default function Main() {
    return (
        <section>
        <div  className="mt-5 pb-5 ">
            <div  className="post-heading text-center">
                <h3  className="display-4 font-weight-bold">About Me</h3>
                <hr className="w-50 mx-auto pb-2" />
            </div>
            <div className=" myInfo row d-flex flex-row">
                <div className="myInfo">
                    <img src={portfolioPic} height="300px" style={{borderRadius: "50%"}} alt="about me pic"/>
                </div>

                <div className="myInfo col-lg-6">
                    <hr />
                    <p>
                        I am an aspiring web developer enrolled in the UW full stack web developement course. I plan on
                        working backend
                        developement
                        and ultimately pursuing software developement. I love learning new skills and creating things
                        people would
                        use and enjoy. In my free time I like to walk my dog, take care of my health and play the
                        guitar.
                    </p>
                </div>
            </div>
            </div>
        </section>
    )
}