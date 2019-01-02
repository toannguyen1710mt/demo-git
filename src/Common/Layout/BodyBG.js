import React from 'react'
import styled from 'styled-components'

//import image for background
import colorBackground from '../../images/colorBackground.jpg'

// style CSS for component 
const Background = styled.div`
  background-image: url(${colorBackground});
  height: 500px;
  margin-top: 20px;
  // width: auto;
`;

class BodyBackground extends React.Component {
    render() {
        return(
            <Background></Background>
        )
    }
}

export default BodyBackground


