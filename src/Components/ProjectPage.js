import React from 'react';
import './ResumePage.css'
import styled from 'styled-components'

const ProjectTitle = styled.div`
    color:white;
    padding: 20px;
    font-size: 50px;
    font: Baskerville, Palatino, serif;
`

const BodyText = styled.div`
    color: white;
    font-size: 20px;
    padding: 20px;
`




function ProjectPage() {
    return (
      <div className="row" style={{height: "calc(100% - 56px)", margin: "0px"}}>
          <a href="https://github.com/RyanShim2000/Solitaire" className='solitaire hov col-lg-6'>
              <ProjectTitle>Solitaire</ProjectTitle>
              <BodyText>A Solitaire card game built using Pygame, a python
                  library. Implemented functionality of cards and decks
                    using object oriented programming.
              </BodyText>

          </a>
          <a className='django hov col-lg-6' href="https://github.com/RyanShim2000/online-store">
            <ProjectTitle>E-Commerce Application</ProjectTitle>
            <BodyText>Used django to develop an ecommerce app that supports buying products, login/logout
                features, and credit card payment using StripeJs.
            </BodyText>
          </a>
          <a className='datasci hov col-lg-6' href="https://github.com/RyanShim2000/personal-website-fall2020">
            <ProjectTitle>Personal Website</ProjectTitle>
            <BodyText>A responsive website built using React. It's the website you are on right now!</BodyText>
          </a>
          <a href="https://github.com/RyanShim2000/Weather-Application" className='weather hov col-lg-6'>
            <ProjectTitle>Weather App</ProjectTitle>
            <BodyText>A weather app built using ReactJs to show weather data in cities
                all over the world. Data was pulled from an API. UI was enhanced using CSS3 and 
                Bootstrap4. </BodyText>
          </a>
      </div>
    );
  }
  
  export default ProjectPage;