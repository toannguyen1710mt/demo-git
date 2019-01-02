import React from 'react'
import styled from 'styled-components'
//import image for background
import darkground from '../../images/darkground.jpg'



// style CSS for component 
const Background = styled.div`
  background-image: url(${darkground});
//   background-image: url(${props => props.img || {darkground}});
//   background-color: gray;
  height: 500px;
  margin-top: 20px;
  // width: auto;
`;

class NavBackground extends React.Component {
    render() {
        return(
            <Background ></Background>
        )
    }
}

export default NavBackground


