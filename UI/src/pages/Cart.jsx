import React from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import { Add, Remove } from "@mui/icons-material";
import { mobile } from "../responsive";

const Container = styled.div``;
const Wrapper = styled.div`
  padding: 40px 50px;
  ${mobile({
        padding: "10px",
    })}
`;
const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;
const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const TopButton = styled.button`
  padding: 20px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
`;
const TopTexts = styled.div`
  ${mobile({
        display: "none",
    })}
`;
const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0 10px;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({
        flexDirection: "column",
    })}
`;
const Info = styled.div`
  flex: 3;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({
        flexDirection: "column",
    })}
`;
const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;
const Image = styled.img`
  width: 150px;
`;
const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
const ProductName = styled.span``;
const ProductId = styled.span``;
const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;
const ProductSize = styled.span``;
const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;
const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
  ${mobile({
        margin: "5px 10px",
    })}
`;
const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
  ${mobile({
        marginBottom: "20px",
    })}
`;

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;


const Summary = styled.div`
  flex: 1;
  border: 0.5px solid gray;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
`;

const SummaryTitle=styled.h1`
font-weight: 200;
`
const SummaryItem=styled.div`
margin: 30px 0px;
display: flex;
justify-content: space-between;
font-weight: ${props=>props.type === "total"  && "500"};
font-size: ${props=>props.type === "total"  && "24px"};
`
const SummaryItemText=styled.span`

`
const SummaryItemPrice=styled.span``
const Button=styled.button`
width: 100%;
padding: 10px;
background-color: black;
color: white;
font-weight: 600;
border: none;
`



const Cart = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <Title>YOUR BAG</Title>
        <Top>
          <TopButton>CONTINUE SHOPPING</TopButton>
          <TopTexts>
            <TopText>Shopping bag (2)</TopText>
            <TopText>My wishlist (0)</TopText>
          </TopTexts>
          <TopButton type="filled">CHECKOUT NOW</TopButton>
        </Top>

        <Bottom>
          <Info>
            <Product>
              <ProductDetail>
                <Image src="https://i.ibb.co/2v409v5/hoodie.jpg" />
                <Details>
                  <ProductName>
                    <b>Product: </b> Custom Hoodie
                  </ProductName>
                  <ProductId>
                    <b>ID: </b> Q2f783gt3HuRrX
                  </ProductId>
                  <ProductColor color="skyblue" />
                  <ProductSize>
                    <b>Size: </b> M
                  </ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                  <Add />
                  <ProductAmount>1</ProductAmount>
                  <Remove />
                </ProductAmountContainer>
                <ProductPrice>KES 800</ProductPrice>
              </PriceDetail>
            </Product>
            <Hr />
            <Product>
              <ProductDetail>
                <Image src="https://i.ibb.co/PFYfx2w/4056532-161a8d92b4df00.jpg" />
                <Details>
                  <ProductName>
                    <b>Product: </b> Ondie Work Boots
                  </ProductName>
                  <ProductId>
                    <b>ID: </b> jf783gt3HuRs6
                  </ProductId>
                  <ProductColor color="black" />
                  <ProductSize>
                    <b>Size: </b> 32
                  </ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                  <Add />
                  <ProductAmount>2</ProductAmount>
                  <Remove />
                </ProductAmountContainer>
                <ProductPrice>KES 4000</ProductPrice>
              </PriceDetail>
            </Product>
          </Info>
          <Summary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>KES 4800</SummaryItemPrice>
            </SummaryItem>

            <SummaryItem>
              <SummaryItemText>Estimated shipping fees</SummaryItemText>
              <SummaryItemPrice>KES 300</SummaryItemPrice>
            </SummaryItem>

            <SummaryItem>
              <SummaryItemText>Shipping discount</SummaryItemText>
              <SummaryItemPrice>KES -200</SummaryItemPrice>
            </SummaryItem>

            <SummaryItem type="total">
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>KES 4900</SummaryItemPrice>
            </SummaryItem>
            <Button>CHECKOUT NOW</Button>
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Cart;
