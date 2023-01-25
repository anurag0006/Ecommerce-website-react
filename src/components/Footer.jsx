import React from 'react'
import styled from 'styled-components'
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import PinterestIcon from '@mui/icons-material/Pinterest';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import payment from "../images/payement.png";
import {mobile} from "../Responsive";




const Container= styled.div`
display:flex;
${mobile({flexDirection:"column"})};


`
const Left= styled.div`
flex:1;
padding:20px;
`
const Logo = styled.h1`
`
const Desc= styled.p`
margin:20px 0;
`
const SocialContainer = styled.div`
display:flex;
`
const SocialIcon = styled.div`
width:40px;
height:40px;
border-radius:50%;
color:white;
background-color:#${props=>props.color};
display:flex;   
align-items:center;
justify-content: center;
margin-right:20px;
`

const Center= styled.div`
flex:1;
padding:20px;
${mobile({display:"none"})};
`

const Title = styled.h3`
margin-bottom:30px;
`

const List = styled.ul`
margin:0;
padding:0;
list-style:none;
display:flex;
flex-wrap:wrap;

`
const ListItem = styled.li`
width:50%;
margin-bottom:10px;
`


const Right= styled.div`
flex:1;
padding:20px;
${mobile({backgroundColor:"#fff8f8"})};


`

const ContactItem = styled.div`
margin-bottom: 20px;
display:flex;
align-items:center;

`

const Payment = styled.img`
width:60%;
height:20%;
`






const Footer = () => {
  return (
   <Container>
    <Left>
        <Logo>A.K. Styles</Logo>
        <Desc>
        Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available
        </Desc>
        <SocialContainer>
            <SocialIcon color="385999"><TwitterIcon/></SocialIcon>
            <SocialIcon color="E4405F"><InstagramIcon/></SocialIcon>
            <SocialIcon color="E4405F"><FacebookIcon/></SocialIcon>
            <SocialIcon color="E60023"><PinterestIcon/></SocialIcon>
        </SocialContainer>
    </Left>

    <Center>
    <Title>Useful Links</Title>
    <List>
        <ListItem>Home</ListItem>
        <ListItem>Cart</ListItem>
        <ListItem>Men Fashion</ListItem>
        <ListItem>Women Fashion</ListItem>
        <ListItem>Accessories</ListItem>
        <ListItem>My Account</ListItem>
        <ListItem>Track Order</ListItem>
        <ListItem>Wishlist</ListItem>
        <ListItem>Terms</ListItem>
        <ListItem>Give Aways</ListItem>
    </List>
    </Center>
    <Right>
        <Title>Contact</Title>
        <ContactItem>
            <LocationOnIcon style = {{marginRight:"10px"}}/>
            504, Dg-2 Hostel, IIT BHU...
        </ContactItem>
        <ContactItem>
            <LocalPhoneIcon style = {{marginRight:"10px"}}/>
            +91 987 7240 866
        </ContactItem>
        <ContactItem>
            <MailOutlineIcon style = {{marginRight:"10px"}}/>
            contact@akstyles.com
        </ContactItem>
        <Payment src ={payment}/>
    </Right>
   </Container>
  )
}

export default Footer