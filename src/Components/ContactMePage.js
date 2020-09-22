import React from 'react';
import styled from 'styled-components';
import './ContactPage.css'



const ContactText = styled.div`
  color:#ededed;
  font-size: 50px;
  
  `
const BackGround = styled.div`




	
  font: 100%/1.6 Baskerville, Palatino, serif;

  `
const Info = styled.div`
  padding: 10px;
  color:#ededed;
  font-size:20px;
`

const InfoText = styled.div`
  color:#ededed;
  font-size:20px;
  padding-top: 20px;
`
const InfoTag = styled.a`
  color:#ededed;
  padding: 10px;
  font-size:20px;

  display:inline-block;
  :hover {
    color: #ededed;
    text-decoration: none;
    
  }
  `
const LeftCol = styled.div`
  padding:2vw;
  
  `



function ContactMePage() {
    return (
      <BackGround className='backcontact'>
        <div className="container">
        <div className="row">
        <div className="col-lg-6">
          <ContactText>
                Contact me 
          </ContactText>
          <InfoText>
            I'm always open for conversations with people in the tech industry. Whether it is to ask questions
            about my site or an offer to work on a project together, I am enthusiastically eager to work on new things.
            For high school students or freshman university students who
            are looking for mentorship or guidance, I am availible to share my experience and give tips and tricks
            on how I got my first internship and succeeded at school. Also, check out my github to see my projects. More will 
            be coming soon! 
          </InfoText>
        </div>
        <LeftCol className="col-lg-6">
        
          <Info style={{paddingTop: '20px'}} >
          <i className="far fa-envelope fa-2x" style={{verticalAlign: 'middle', padding: '10px'}}></i>
            rshim@uwaterloo.ca
          </Info>
          <Info>
          <i className="fas fa-phone fa-2x" style={{verticalAlign: 'middle', padding: '10px'}}></i>
            416-822-0455
          </Info>
          <InfoTag href="https://github.com/RyanShim2000">
          <i className="fab fa-github fa-2x" style={{verticalAlign: 'middle', padding: '10px'}}></i>  
            github.com/RyanShim2000
          </InfoTag>
          
        </LeftCol>
        </div>
        </div>
      </BackGround>
    );
  }
  
  export default ContactMePage;