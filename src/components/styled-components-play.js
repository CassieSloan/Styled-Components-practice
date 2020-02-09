import React, {Component} from "react";
import styled from "styled-components";
const Title = styled.h1`  
    font-size: 1.5em;
    text-align: center;
    color: palevioletred;
`
const Wrapper = styled.section`
    padding: 4em;
    background: papayawhip;
`;

const Button = styled.button`
background: ${ props => props.primary ? "pink" : "blue" };
color: ${props => props.primary ? "black" : "white" };
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border-radius: 3px;
`

const InheritButton = styled(Button)`
  color: white;
  border-color: tomato;
  background: tomato;
`;

class styledComponentsPlay extends React.Component {
    render() {
        return(
            <>
            <Wrapper>
                <Title>
                    Hello
                </Title>
                <Button primary>Primary props</Button>
                <Button>no props</Button>
                <InheritButton>inherit button</InheritButton>
            </Wrapper>
            </>
        )
    }
}

export default styledComponentsPlay; 