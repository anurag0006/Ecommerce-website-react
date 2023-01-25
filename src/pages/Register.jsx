import React from 'react'
import styled from 'styled-components'
import IMG from "../images/IMG2.jpg"
import {mobile} from "../Responsive"

const Container = styled.div`
width:100vw;
height:100vh;
background: linear-gradient(
    rgba(255,255,255,0.5),
    rgba(255,255,255,0.5)
),
    url(${IMG});

display:flex;
align-items: center;
justify-content:center;
`
const Wrapper = styled.div`
padding:20px;
width:40%;
background-color: white;
${mobile({width:"75%"})};
/* display:flex;
flex-direction:column;
align-items:center;
justify-content: center; */
`
const Form = styled.form`
display: flex;
flex-wrap:wrap;
`
const Input = styled.input`
flex:1;
min-width:40%;
margin:20px 10px 0px 0px;
padding:10px;
`
const Title = styled.h1`
font-size: 24px;
font-weight:300;
`
const Agreement = styled.p`
font-size:12px;
margin:20px 0px;
`
const Button = styled.button`
width:40%;
border:none;
padding:15px 20px;
background-color: teal;
color:white;
cursor:pointer;
`
const Register = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Create an Account</Title>
        <Form>
            <Input placeholder="First Name"/>
            <Input placeholder="Last Name"/>
            <Input placeholder="Email"/>
            <Input placeholder="Username"/>
            <Input placeholder="Password"/>
            <Input placeholder="Confirm Password"/>
            <Agreement>
                By creating an acccount,I consent to the processing
                of a professional dat in accordance with the <b>Privacy Policy</b>
            </Agreement>
            <Button>Create</Button>
        </Form>
      </Wrapper>
    </Container>
  )
}

export default Register