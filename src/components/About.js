import React, { useState } from "react";
import "../css/About.css";
const About = () => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpansion = () => {
    setExpanded(!expanded);
  };
  // onClick={toggleExpansion}

  return (
    <div className="outer-container">
      <div className="inner-container">
        <div className="section1">
          <div>
            <div className="title">
              <h2> About Us</h2>
            </div>

            <div className="strip-container">
              <div className="breadcrumb">
                <span>Home › About Us</span>
              </div>
            </div>

            <div className="text">
              <p>
                Elevator and lift manufacturers and suppliers include KYR
                Elevators (A unit of Spectra Enterprises) an ISO 9001:2015
                certified company. To ensure that our products are created and
                delivered on schedule, we maintain a clean workplace and follow
                all safety regulations. Because of our significant experience,
                we have a solid reputation in the business. We're constantly
                searching for methods to make our distribution procedures more
                efficient.<br></br>
                <br></br> We deliver exceptional branding and stay in touch with
                our customers with every order. If you have any inquiries
                regarding any of our products, get in touch with us. We
                eventually succeed when we correctly prioritize the needs and
                preferences of our clients.<br></br>
                <br></br> You won't feel stressed using our items because we
                provide the required industry certifications. To ensure that we
                are consistently providing you with the best, our professional
                team and seasoned management regularly develop and improve the
                distribution and trade of our products.<br></br>
                <br></br> Even though we have a lot of market expertise in this
                area, we constantly innovate and adopt a highly shrewd
                client-centered strategy. We sell our products at fair prices to
                prevent giving the impression that we are taking advantage of
                you. Every attempt will be made to satisfy your needs whenever
                and wherever they may be.
              </p>
            </div>
          </div>

          <div>
            <div className="title">
              <h2> About Us</h2>
            </div>
            <div className="text">
              <table>
                <tr>
                  <th className="al">Nature of Business</th>
                  <td>Manufacturers, Wholesaler, Trader</td>
                </tr>
                <tr>
                  <th className="al">Number of Employees</th>
                  <td>20 - 50</td>
                </tr>
                <tr>
                  <th className="al">Year of Establishment</th>
                  <td>2006</td>
                </tr>
                <tr>
                  <th className="al">Market Covered</th>
                  <td>Anywhere in India</td>
                </tr>
                <tr>
                  <th className="al">Name of CEO</th>
                  <td>Mr. Navdeep Kumar</td>
                </tr>
                <tr>
                  <th className="al">GST No</th>
                  <td>02ABZPK6093K1Z0</td>
                </tr>
                <tr>
                  <th className="al">Annual Turnover</th>
                  <td>Rs. 0.5 to 2.5 Crore Approx.</td>
                </tr>
                <tr>
                  <th className="al">Legal Status of Firm</th>
                  <td>Individual (Sole proprietorship)</td>
                </tr>
                <tr>
                  <th className="al">Certification</th>
                  <td>ISO 9001:2015 certified company</td>
                </tr>
              </table>
            </div>
          </div>
        </div>

        <div class="ic showHide_rp">
				<ul>
						<li><b class="b2 fl"></b><b class="plus act"></b><p class="ofh b"><a href="https://www.kyrelevators.in/passenger-elevator.htm" title="Passenger Elevator">Passenger Elevator</a></p>
						<ul class="dn" >
									<li><b class="b3 fl"></b><p class="ofh"><a href="https://www.kyrelevators.in/commercial-passenger-elevator.htm" title="Commercial Passenger Elevator">Commercial Passenger Elevator</a></p>
								</li>
									<li><b class="b3 fl"></b><p class="ofh"><a href="https://www.kyrelevators.in/stainless-steel-passenger-elevator.htm" title="Stainless Steel Passenger Elevator">Stainless Steel Passenger Elevator</a></p>
								</li>
									<li><b class="b3 fl"></b><p class="ofh"><a href="https://www.kyrelevators.in/residential-passenger-elevator.htm" title="Residential Passenger Elevator">Residential Passenger Elevator</a></p>
								</li>
									<li><b class="b3 fl"></b><p class="ofh"><a href="https://www.kyrelevators.in/passenger-elevator-with-machine-room.htm" title="Passenger Elevator With Machine Room">Passenger Elevator With Machine Room</a></p>
								</li>
									<li><b class="b3 fl"></b><p class="ofh"><a href="https://www.kyrelevators.in/office-passenger-elevator.htm" title="Office Passenger Elevator">Office Passenger Elevator</a></p>
								</li>
									<li><b class="b3 fl"></b><p class="ofh"><a href="https://www.kyrelevators.in/geared-traction-passenger-elevator.htm" title="Geared Traction Passenger Elevator">Geared Traction Passenger Elevator</a></p>
								</li>
									<li><b class="b3 fl"></b><p class="ofh"><a href="https://www.kyrelevators.in/automatic-passenger-elevator.htm" title="Automatic Passenger Elevator">Automatic Passenger Elevator</a></p>
								</li>
									<li><b class="b3 fl"></b><p class="ofh"><a href="https://www.kyrelevators.in/auto-door-passenger-elevator.htm" title="Auto Door Passenger Elevator">Auto Door Passenger Elevator</a></p>
								</li>
									<li><b class="b3 fl"></b><p class="ofh"><a href="https://www.kyrelevators.in/manual-door-passenger-elevator.htm" title="Manual Door Passenger Elevator">Manual Door Passenger Elevator</a></p>
								</li>
									<li><b class="b3 fl"></b><p class="ofh"><a href="https://www.kyrelevators.in/electric-passenger-elevator.htm" title="Electric Passenger Elevator">Electric Passenger Elevator</a></p>
								</li>
									<li><b class="b3 fl"></b><p class="ofh"><a href="https://www.kyrelevators.in/standard-passenger-elevator.htm" title="Standard Passenger Elevator">Standard Passenger Elevator</a></p>
								</li>
						</ul>
						</li>
						<li><b class="b2 fl"></b><b class="plus"></b><p class="ofh b"><a href="https://www.kyrelevators.in/residential-elevator.htm" title="Residential Elevator">Residential Elevator</a></p>
						<ul class="dn">
									<li><b class="b3 fl"></b><p class="ofh"><a href="https://www.kyrelevators.in/automatic-residential-elevator.htm" title="Automatic Residential Elevator">Automatic Residential Elevator</a></p>
								</li>
									<li><b class="b3 fl"></b><p class="ofh"><a href="https://www.kyrelevators.in/indoor-residential-elevator.htm" title="Indoor Residential Elevator">Indoor Residential Elevator</a></p>
								</li>
									<li><b class="b3 fl"></b><p class="ofh"><a href="https://www.kyrelevators.in/manual-residential-elevator.htm" title="Manual Residential Elevator">Manual Residential Elevator</a></p>
								</li>
									<li><b class="b3 fl"></b><p class="ofh"><a href="https://www.kyrelevators.in/outdoor-residential-elevator.htm" title="Outdoor Residential Elevator">Outdoor Residential Elevator</a></p>
								</li>
						</ul>
						</li>
						<li><b class="b2 fl"></b><b class="plus"></b><p class="ofh b"><a href="https://www.kyrelevators.in/hospital-elevators.htm" title="Hospital Elevators">Hospital Elevators</a></p>
						<ul class="dn">
									<li><b class="b3 fl"></b><p class="ofh"><a href="https://www.kyrelevators.in/stretcher-hospital-elevator.htm" title="Stretcher Hospital Elevator">Stretcher Hospital Elevator</a></p>
								</li>
									<li><b class="b3 fl"></b><p class="ofh"><a href="https://www.kyrelevators.in/stainless-steel-hospital-elevator.htm" title="Stainless Steel Hospital Elevator">Stainless Steel Hospital Elevator</a></p>
								</li>
									<li><b class="b3 fl"></b><p class="ofh"><a href="https://www.kyrelevators.in/hospital-elevator.htm" title="Hospital Elevator">Hospital Elevator</a></p>
								</li>
						</ul>
						</li>
						<li><b class="b2 fl"></b><p class="ofh b"><a href="https://www.kyrelevators.in/commercial-goods-elevator.htm" title="Commercial Goods Elevator">Commercial Goods Elevator</a></p>
						</li>
						<li><b class="b2 fl"></b><p class="ofh b"><a href="https://www.kyrelevators.in/hydraulic-industrial-lift.htm" title="Hydraulic Industrial Lift">Hydraulic Industrial Lift</a></p>
						</li>
						<li><b class="b2 fl"></b><p class="ofh b"><a href="https://www.kyrelevators.in/capsule-passenger-lift.htm" title="Capsule Passenger Lift">Capsule Passenger Lift</a></p>
						</li>
						<li><b class="b2 fl"></b><p class="ofh b"><a href="https://www.kyrelevators.in/staircase-lift.htm" title="Staircase Lift">Staircase Lift</a></p>
						</li>
						<li><b class="b2 fl"></b><p class="ofh b"><a href="https://www.kyrelevators.in/material-movement-lift.htm" title="Material Movement Lift">Material Movement Lift</a></p>
						</li>
				</ul>
          



         
          <div className="Products">
            <div className="title">
              <h2>Contact Us</h2>
              <hr></hr>
            </div>
            <div className="text1">
              <div className="kvr">
                <p>KYR Elevators (A unit of Spectra Enterprises)</p>
                <hr class="dotted"></hr>
              </div>

              <div className="address">
                <p>
                  F225, Phase 8B, Industrial Area, Mohali, Punjab - 160071,
                  India
                </p>
                <hr class="dotted"></hr>
              </div>

              <div>
                <p>
                  <b>Mobile :</b> +91-9816032909, +91-7988011941
                </p>
                <hr class="dotted"></hr>
              </div>

              <div className="email">
                <p>
                  <b>E-mail :</b>{" "}
                  <a href="mailto:kyrengineers@gmail.com">
                    kyrengineers@gmail.com
                  </a>
                </p>
                <hr class="dotted"></hr>
              </div>
            </div>
          </div>
       
      </div>
      </div>
    </div>
  );
};

export default About;
