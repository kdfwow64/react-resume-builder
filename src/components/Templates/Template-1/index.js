import React, {Component} from 'react';
// import './css/reset.css'
// import './css/custom.css'
import {finalizeChildStyles} from "./style";

export default function Index(props) {
  const classes = finalizeChildStyles();

  return (

    <div classname="classes.container">

      <header>
        <div classname="classes.block_parent bg-style">
          <div classname="classes.user_img">
            <img src="imgs/user_img.jpg" alt="avatar"/>
          </div>
          <div classname="classes.user_detail">
            <h1>John Doe</h1>
            <h3>UI/UX Designer</h3>
          </div>
          <div classname="classes.user_contact">
            <h5>www.johndoe.io</h5>
          </div>
        </div>
      </header>
      <section>
        <div classname="classes.block_parent">
          <div classname="classes.left_block">
            <div classname="classes.summary-block">
              <h2>Summary</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                officia deserunt mollit anim id est laborum.</p>
            </div>
            <h2>Contact</h2>
            <ul classname="classes.contact-detail">
              <li>
                <span classname="classes.contact-title">Address:</span>
                <div classname="classes.contact-description">
                  <p>S1, Mirzo Ulugbek, Tashkent 100070</p>
                </div>
              </li>
              <li>
                <span classname="classes.contact-title">Mobile:</span>
                <div classname="classes.contact-description">
                  <p>+998 99 853 22 20</p>
                </div>
              </li>
              <li>
                <span classname="classes.contact-title">Email:</span>
                <div classname="classes.contact-description">
                  <p>info@johndoe.io</p>
                </div>
              </li>
              <li>
                <span classname="classes.contact-title">Website:</span>
                <div classname="classes.contact-description">
                  <p>johndoe.io</p>
                </div>
              </li>
              <li>
                <span classname="classes.contact-title">Skype:</span>
                <div classname="classes.contact-description">
                  <p>johndoe85</p>
                </div>
              </li>
              <li>
                <span classname="classes.contact-title">LINKEDIN:</span>
                <div classname="classes.contact-description">
                  <p>@johndoe85</p>
                </div>
              </li>
            </ul>
            <h2>Skills</h2>
            <ul classname="classes.skill-bar">
              <li>
                <span classname="classes.skill-title">Adobe XD</span>
                <div classname="classes.skill-progress">
                  <span classname="classes.skill-progress-inner"/>
                </div>
              </li>
              <li>
                <span classname="classes.skill-title">Sketch</span>
                <div classname="classes.skill-progress">
                  <span classname="classes.skill-progress-inner"/>
                </div>
              </li>
              <li>
                <span classname="classes.skill-title">Illustrator</span>
                <div classname="classes.skill-progress">
                  <span classname="classes.skill-progress-inner"/>
                </div>
              </li>
              <li>
                <span classname="classes.skill-title">Photoshop</span>
                <div classname="classes.skill-progress">
                  <span classname="classes.skill-progress-inner"/>
                </div>
              </li>
              <li>
                <span classname="classes.skill-title">Web flow</span>
                <div classname="classes.skill-progress">
                  <span classname="classes.skill-progress-inner"/>
                </div>
              </li>
            </ul>
          </div>
          <div classname="classes.right_block">
            <h2>Work Experiences</h2>
            <ul classname="classes.other-details">
              <li>
                <span classname="classes.experience-title">GRAPHIC DESIGNER<br/><br/>2015 - 2019</span>
                <div classname="classes.organization-title">
                  <h6>SOFT DESIGN STUDIOS</h6>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                    labore et dolore magna aliqua.</p>
                </div>
              </li>
              <li>
                <span classname="classes.experience-title">WEB DESIGNER<br/><br/>2013 - 2015</span>
                <div classname="classes.organization-title">
                  <h6>WEB TECH LTD</h6>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                    labore et dolore magna aliqua.</p>
                </div>
              </li>
              <li>
                <span classname="classes.experience-title">LEAD WEB DESIGNER<br/><br/>2010 - 2013</span>
                <div classname="classes.organization-title">
                  <h6>DEV CREATIVE SOLUTIONS</h6>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                    labore et dolore magna aliqua.</p>
                </div>
              </li>
            </ul>

            <h2>Education</h2>
            <ul classname="classes.other-details">
              <li>
                <span classname="classes.experience-title">UNIVERSITY OF LOREM<br/><br/>2008 - 2010</span>
                <div classname="classes.organization-title">
                  <h6>CERTIFICATE OF WEB TRAINIG</h6>
                  <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur. Excepteur sint occaecat cupidatat non proident.</p>
                </div>
              </li>
              <li>
                <span classname="classes.experience-title">UNIVERSITY OF LOREM<br/><br/>2004 - 2008</span>
                <div classname="classes.organization-title">
                  <h6>BECHELOR OF ART DIRECTOR</h6>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                    labore et dolore magna aliqua.</p>
                </div>
              </li>
              <li>
                <span classname="classes.experience-title">UNIVERSITY OF LOREM<br/><br/>2003 - 2004</span>
                <div classname="classes.organization-title">
                  <h6>GRAPHIC DESIGN</h6>
                  <p>Velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                    proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
              </li>
            </ul>
            <h2>Reference</h2>
            <div classname="classes.block_parent">
              <div classname="classes.reference-wrap">
                <div classname="classes.reference-details">
                  <div classname="classes.reference-title">MANNONOV SARDOR</div>
                  <ul>
                    <li>Director, Sr. design studio</li>
                    <li>Phone: +998 853 22 20</li>
                    <li>Email: mannonov@hotmail.com</li>
                  </ul>
                </div>
                <div classname="classes.reference-details">
                  <div classname="classes.reference-title">JENSEN SMITH</div>
                  <ul>
                    <li>Web developer, Design group LTD</li>
                    <li>Phone: +123 434 4455</li>
                    <li>Email: jensonsmith@gmail.com</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );

}
