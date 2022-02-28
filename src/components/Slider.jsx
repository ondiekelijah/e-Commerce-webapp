import styled from "styled-components";
// import ArrowLeftOutlinedIcon from '@mui/icons-material/ArrowLeftOutlined';
// import ArrowRightOutlinedIcon from '@mui/icons-material/ArrowRightOutlined';

import KeyboardArrowRightOutlinedIcon from '@mui/icons-material/KeyboardArrowRightOutlined';
import KeyboardArrowLeftOutlinedIcon from '@mui/icons-material/KeyboardArrowLeftOutlined';

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  background-color: tomato;
  position: relative;
`;

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #f3ecec;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${props=> props.direction === "left" && "10px"};
  right: ${props=> props.direction === "right" && "10px"};
  margin: auto;
  opacity: 0.5;
`;

const Slider = () => {
  return (
    <Container>
      <Arrow direction="left">
        <KeyboardArrowLeftOutlinedIcon />
      </Arrow>
      <Arrow direction="right">
        <KeyboardArrowRightOutlinedIcon />
      </Arrow>
    </Container>
  );
};

export default Slider;
