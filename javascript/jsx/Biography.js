import React from 'react';
import SlidingPane from './SlidingPane';

export default class SlidingPaneContainer extends React.Component{
  constructor(props){
    super(props);
  }

  render(){

    var workExperience = [
      "Web Technologist Intern at Hewlett Packard",
      "Technical Service Consultant at Santa Clara University IT",
      "After School Math Teacher at Breakthrough Silicon Valley"
    ];

    var schoolWork = [
      "Senior Computer Science and Engineering Major @ SCU.",
      "AP Scholar With Distinction @ Bellarmine College prep"
    ];

    var outsideSchool = [
      "Co-Founder of All Male a Cappella group The SCU Testostertones",
      "Culture Show Director for Intandesh @ SCU"
    ];

    return(
      <section className='bio-content'>
        <h1> Arman Elahi </h1>
        <section className='heading'>
          <ul>
            <li> Undergraduate Senior studying Computer Science and Engineering at Santa Clara University</li>
            <li> C, C++, JavaScript, Java </li>
            <li> Music, Dance, and Soccer Enthusiast </li>
            <li> Bay Area born & raised (Bellarmine College Prep) </li>
          </ul>
        </section>
        <SlidingPane heading="Work Experience" items={workExperience}/>
        <SlidingPane heading="School Work" items={schoolWork}/>
        <SlidingPane heading="Outside of School" items={outsideSchool}/>
      </section>

    )
  }
}
