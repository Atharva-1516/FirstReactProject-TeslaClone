import React from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";

const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-color: orange;
  background-repeat: no-repeat;
  background-image: url(/images/model-s.jpg);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-image: ${(props) => `url("/images/${props.bgImage}")`};
`;
const ItemText = styled.div`
  padding: 15vh;
  text-align: center;
`;
const ButtonGroup = styled.div`
  display: flex;
  margin-bottom: 30px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
const RightButton = styled.div`
  background-color: rgba(23, 26, 32, 0.8);
  height: 40px;
  width: 256px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  opacity: 0.85;
  text-transform: uppercase;
  font-size: 12px;
  cursor: pointer;
  margin: 8px;
`;
const DownArrow = styled.img`
  // margin-top: 20px;
  height: 40px;
  overflow-x: hidden;
  animation: animateDown infinite 1.5s;
`;
const Buttons = styled.div``;
const LeftButton = styled(RightButton)`
  background-color: white;
  color: black;
  opacity: 0.65;
`;
function Sections({
  title,
  description,
  leftbutton,
  rightbutton,
  backgroundImg,
}) {
  return (
    <Wrap id="ModelY" bgImage={backgroundImg}>
      <Fade bottom>
        <ItemText id="ModelY">
          <h1>{title}</h1>
          <h6>{description}</h6>
        </ItemText>

        <Buttons>
          <ButtonGroup>
            <LeftButton>{leftbutton} </LeftButton>

            <RightButton>{rightbutton}</RightButton>
          </ButtonGroup>

          <DownArrow src="/images/down-arrow.svg"></DownArrow>
        </Buttons>
      </Fade>
    </Wrap>
  );
}

export default Sections;
