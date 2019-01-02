import styled from 'styled-components'

 const StyledButton = styled.button`
    color: ${props => props.inputColor || "white"};
    background-color:  ${props => props.inputBColor || "#4CAF50"}; 
    border: 2px solid #4CAF50;
    border-radius: 5px;
    padding: 5px 20px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 15px;
    margin: 4px 0px;
    cursor: pointer;
    &:hover { background-color: white; color: #4CAF50; transition-duration: 0.4s;}
`;

export default StyledButton