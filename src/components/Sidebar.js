import React from 'react'
import { NavLink } from 'react-router-dom'

const Sidebar = () => {
    return (
        <div className='sidebar'>
            <div className="logo">
                <h3 className='b-t'>SEVA CRM</h3>
            </div>

            <div className="accordion bg-t" id="accordionExample">
                <div className="accordion-item bg-b">
                    <h2 className="accordion-header">
                        <button className="accordion-button bg-b" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                      Dashboard
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show bg-b" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <p><NavLink to='/'>Admin Dashboard</NavLink></p>
                            <p><NavLink to='gis-dash'>GIS Dashboard</NavLink></p>
                        </div>
                    </div>
                </div>
                <div className="accordion-item bg-b">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed bg-b" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            FAQ
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse bg-b" data-bs-parent="#accordionExample">
                        <div className="accordion-body ">
                            <p><NavLink to='/fqa'>FAQ</NavLink></p>
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header bg-b">
                        <button className="accordion-button collapsed bg-b" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            Call Center
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse bg-b" data-bs-parent="#accordionExample">
                        <div className="accordion-body">

                            <hr />
                            <p className='c-t'>Technical</p>
                            <hr />
                            <p><NavLink to='/tech-comp'>Complaint Registration</NavLink></p>
                            <p><NavLink to='/sl-comp'>SL Registration</NavLink></p>
                            <p><NavLink to='/tech-status'>Status</NavLink></p>
                            <p><NavLink to='/push-sms'>Push SMS</NavLink></p>

                            <hr />
                            <p className='c-t'>Business</p>
                            <hr />
                            <p> <NavLink to='/business'>Business</NavLink> </p>
                            <p> <NavLink to='/virtual-as'>Virtual Apntmnt Status</NavLink> </p>
                            <p><NavLink to='/centralized-vs'>Centralized Virtual Status</NavLink></p>
                            <p><NavLink to='/physical-as'>Physical Apntmnt Status</NavLink></p>
                            <p><NavLink to='/chd-app'>CHD Virtual Appointment</NavLink></p>
                            <p><NavLink to='v-i-customer'>VI Customer Request</NavLink></p>


                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header bg-b">
                        <button className="accordion-button collapsed bg-b" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                            Knowledge Bank
                        </button>
                    </h2>
                    <div id="collapseFour" className="accordion-collapse collapse bg-b" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <p><NavLink to='/gen-info'>General Info</NavLink></p>
                            <p><NavLink to='/technical'>Technical</NavLink></p>
                            <p><NavLink to='/seva-kendra'>Seva Kendra</NavLink></p>
                            <p><NavLink to='/commercial'>Commercial</NavLink></p>
                            <p><NavLink to='/new-update'>New Update</NavLink></p>
                            <p><NavLink to='/online-booking'>Online Booking</NavLink></p>
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header bg-b">
                        <button className="accordion-button collapsed bg-b" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                            Stack Ranking
                        </button>
                    </h2>
                    <div id="collapseFive" className="accordion-collapse collapse bg-b" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <p><NavLink to='/stack-ranking'>Stack Ranking</NavLink></p>
                            <p><NavLink to='/stack-summary'>Stack Ranking Summary</NavLink></p>
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header bg-b">
                        <button className="accordion-button collapsed bg-b" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                            SOP
                        </button>
                    </h2>
                    <div id="collapseSix" className="accordion-collapse collapse bg-b" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <p><NavLink to='sop-technical'>Technical</NavLink></p>
                            <p><NavLink to='sop-sevakendra'>Seva Kendra</NavLink></p>
                            <p><NavLink to='sop-commercial'>Commercial</NavLink></p>
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header bg-b">
                        <button className="accordion-button collapsed bg-b" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
                            Certification
                        </button>
                    </h2>
                    <div id="collapseSeven" className="accordion-collapse collapse bg-b" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <p><NavLink to='/online-test'>Online Test</NavLink></p>
                            <p><NavLink to='/show-result'>Show Result</NavLink></p>
                        </div>
                    </div>
                </div>
            </div>

            <p className='text-center text-light mt-5 pt-5'> SEVA CRM  <br /> By Rajdev Yadav</p>
        
        </div>
    )
}

export default Sidebar
