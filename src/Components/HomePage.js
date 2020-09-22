import React from 'react';
import './HomePage.css';
import styled from 'styled-components'

const Title = styled.div`
color: #ededed;

z-index:10;
font: 100%/1.6 Baskerville, Palatino, serif;
font-size: 80px;
padding-bottom:100px;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
padding-top:10%;

`

const TitleBack = styled.div`

padding: 50px;
border-radius: 10px;

`

const Description = styled.div`

color: #ededed;

z-index:10;
font: 100%/1.6 Baskerville, Palatino, serif;
font-size: 30px;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
padding-left: 30%;
padding-right: 30%;
text-align: center;

`
function HomePage() {
    return (
      <div className="back" >
          <Title>
              <TitleBack>Ryan Shim</TitleBack>
          <Description>Currently, I am a second year computer
              science student at the University of Waterloo. This site is intended to get to know
              me better and showcase my projects, my experiences and who I am. Take a look at what I have done and
              contact me for any further questions. Enjoy. </Description></Title>
          
      </div>
    );
  }
  
  export default HomePage;