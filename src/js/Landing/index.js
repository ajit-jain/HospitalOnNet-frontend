import React, {Fragment} from 'react';
import Header from '../Header';
import './landing.css';

const LandingPage = () =>{
    return (
        <Fragment>
            <Header></Header>
            <div className="cover-img"></div>
            <div className="wrapper">
                <div className="heading">
                    <h1>We take care of your health</h1>
                    <p>
                       International and National Doctors/Specialists from the <br/>
                       comfort of your home. Just few clicks away..
                    </p>
                </div>
                
                <div className="app-flow">
                    <div className="card">
                        <img src="./../../assets/images/eye.svg"/>

                        <h3> Search </h3>
                        <p> 
                            search doctors by names,regions,services.
                            Number of docotors are there to help you.
                        </p>
                        <a className="btn-card">
                            Get started
                        </a>
                    </div>
                    <div className="card">
                        <img src="./../../assets/images/surgeon.svg"/>
                        <h3> Book Appointment</h3>
                        <p> 
                            To consult the doctors/specialists you need to book an appointment
                            through a calender.
                        </p>
                        <a className="btn-card">
                            Get started
                        </a>
                    </div>
                    <div className="card">
                        <img src="./../../assets/images/video-conference.svg"/>
                        <h3> Meet </h3>
                        <p> start consulting with the doctors through numerous pltforms
                            like whatsapp,skype,chat.
                            </p>
                            <a className="btn-card">
                            Get started
                        </a>
                    </div>
                    
                </div>
                
            </div>
            <div className="services">
                <h1> Services </h1>
                <div className="tags">
                    <div className="tag">Doctor consultation<img src="./../../../assets/images/right-arrow.svg" className="right-arrow"/></div>
                    <div className="tag">Physiotherapy consultation<img src="./../../../assets/images/right-arrow.svg" className="right-arrow"/></div>
                    <div className="tag">Pharmacy/Medicine<img src="./../../../assets/images/right-arrow.svg" className="right-arrow"/></div>
                    <div className="tag">Lifestyle advisor<img src="./../../../assets/images/right-arrow.svg" className="right-arrow"/></div>
                    <div className="tag">Weight reduction<img src="./../../../assets/images/right-arrow.svg" className="right-arrow"/></div>
                    <div className="tag">Diabetes management<img src="./../../../assets/images/right-arrow.svg" className="right-arrow"/></div>
                    <div className="tag">Heart problems(Cardiology)<img src="./../../../assets/images/right-arrow.svg" className="right-arrow"/></div>
                    <div className="tag">Contraceptive pills<img src="./../../../assets/images/right-arrow.svg" className="right-arrow"/></div>
                    <div className="tag">Alternative medicine<img src="./../../../assets/images/right-arrow.svg" className="right-arrow"/></div>
                    <div className="tag">Ayurvedic medicine<img src="./../../../assets/images/right-arrow.svg" className="right-arrow"/></div>
                    <div className="tag">More<img src="./../../../assets/images/right-arrow.svg" className="right-arrow"/></div>
                    
                </div>
            </div>
            <br style={{clear:'both'}}></br>
            <div className="testimonials">
            </div>
            {/* <div className="contactUs">
                <h1> Get In Touch</h1>
                <form>
                    <div style={{margin: '0 0 4% 0'
                        }} className="control width48">
                        <input className="formControl"/>

                    </div>
                    <div className="control width48">
                        <input className="formControl"/>
                        
                    </div>
                    <div className="control width100">
                        <input className="formControl"/>
                        
                    </div>
                    <div className="control width100">
                        <textarea className="formControl"/>
                        
                    </div>
            <br style={{clear:'both'}}></br>

                    <div className="control width100">
                        <button>Submit</button>
                        
                    </div>
                </form>

                    </div>*/}
            <footer>
                    <span>&copy;2019 HospitalOnNet. All rights are reversed</span>
            </footer>
            
        </Fragment>
    )
}
export default LandingPage;