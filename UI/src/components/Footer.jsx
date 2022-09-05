import {
    Facebook,
    Instagram,
    MailOutline,
    Phone,
    Room,
    Twitter,
    YouTube,
} from "@mui/icons-material";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  display: flex;
  padding: 15px 25px;
  ${mobile({
        flexDirection: "column",
        padding:"0px"
    })}
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;
const Logo = styled.h1``;
const Description = styled.p`
  margin: 20px 0px;
`;
const SocialIconsContainer = styled.div`
  display: flex;
`;
const SocialIcon = styled.div`
  height: 40px;
  width: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.bg};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({
        display: "none"
    })}
`;

const Title = styled.h3`
  margin-bottom: 30px;
`;
const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;
const ListItems = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({
        backgroundColor:  "#fcf5f5"

    })}
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const Payment = styled.img`
  width: 50%;
`;

const Footer = () => {
    return (
        <Container>
            <Left>
                <Logo>Ondie.</Logo>
                <Description>
                    Your No.1 Online shopping mall for your favourite fashion and designer
                    oufits.
                </Description>
                <SocialIconsContainer>
                    <SocialIcon bg="1877F2">
                        <Facebook />
                    </SocialIcon>
                    <SocialIcon bg="E4405F">
                        <Instagram />
                    </SocialIcon>
                    <SocialIcon bg="1DA1F2">
                        <Twitter />
                    </SocialIcon>

                    <SocialIcon bg="CD201F">
                        <YouTube />
                    </SocialIcon>
                </SocialIconsContainer>
            </Left>

            <Center>
                <Title>Quick Links</Title>
                <List>
                    <ListItems>Home</ListItems>
                    <ListItems>Cart</ListItems>
                    <ListItems>Men Fashion</ListItems>
                    <ListItems>Women Fashion</ListItems>
                    <ListItems>Accessories</ListItems>
                    <ListItems>My Account</ListItems>
                    <ListItems>Order Tracking</ListItems>
                    <ListItems>Wishlist</ListItems>
                    <ListItems>Terms & Conditions</ListItems>
                </List>
            </Center>
            <Right>
                <Title>Contact</Title>
                <ContactItem>
                    <Room style={{marginRight:10}} /> Matumbato Road, Upperhill
                </ContactItem>
                <ContactItem>
                    <Phone style={{marginRight:10}}/> +2547 6814 4877
                </ContactItem>
                <ContactItem>
                    <MailOutline style={{marginRight:10}}/>
                    info@ondie.shop
                </ContactItem>
                <Payment src="https://i.ibb.co/WVvsphM/Payment-method.png" />
            </Right>
        </Container>
    );
};

export default Footer;
