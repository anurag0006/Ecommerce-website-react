import React,{useState} from 'react'
import styled from 'styled-components'
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import sliderItems from "./data.jsx";
import {mobile} from "../Responsive";
  

const Container = styled.div`
  width:100%;
  height:100vh;
  display:flex;
  position: relative;
  overflow: hidden;
  ${mobile({display:"none"})};
`

const Wrapper = styled.div`
height:100%;
display: flex;
transform: translateX(${(props) => props.slideIndex * -100}vw);
transition:all 1.5s ease;
`

const Slide = styled.div`
 width:100vw;
 height:100vh;
 display:flex;
 align-items:center;
 background-color: #${props=>props.bg};
`

const ImgContainer = styled.div`
flex:1;
height:100%;
text-align:center;
`
const Img = styled.img`

height:80vh;
width:28vw;
object-fit: cover;

`
const InfoContainer = styled.div`
flex:1;
padding:50px ;
text-align: center;
`

const Title = styled.h1`
font-size: 70px;
`
const Desc = styled.p`
margin: 30px 0px;
padding:0 50px;
font-size: 20px;
font-weight: 500;
letter-spacing: 3px;
`

const Button = styled.button`
 padding: 10px;
 font-size: 20px;
 background-color: transparent;
 border-radius: 10px;
 cursor:pointer;
`


const Arrow = styled.div`
height: 50px;
width:50px;
background-color: #fff7f7;
border-radius:50%;
display:flex;
align-items:center;
justify-content:center;
position: absolute;
top:0;
bottom:0;
left : ${props => props.direction === " left" && "10px"};
right : ${props => props.direction === "right" && "10px"};
margin:auto;
cursor: pointer;
opacity:0.5;
z-index: 2;
`



const Slider = () => {
   
  const [slideIndex, setSlideIndex] = useState(0);

  const handleClick = (direction) => {
      if(direction === "left")
      {
        setSlideIndex(slideIndex > 0 ? slideIndex-1 : 2)
      }
      else{
        setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0)
      }
  };



  return (
    <Container>
      <Arrow onClick = {() =>handleClick("right")} direction="left">
        <ArrowLeftIcon />
      </Arrow>
      <Wrapper slideIndex = {slideIndex}>
      {sliderItems.map(item=> (
        <Slide key = {item.id} bg = {item.bg}>
          <ImgContainer>
            <Img src={item.img} />
          </ImgContainer>
          <InfoContainer>
           <Title>{item.title}</Title>
           <Desc>{item.desc}</Desc>
           <Button>SHOP NOW</Button>
          </InfoContainer>
        </Slide> 
      ))}
      </Wrapper>
      <Arrow onClick = {() =>handleClick("leftx")} direction="right">
        <ArrowRightIcon />
      </Arrow>
    </Container>
  )
}

export default Slider;