import React, { useState } from "react";
import styled from "styled-components";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

function NavBar() {
  const [BurgerStatus, setBurgerStatus] = useState(false);
  return (
    <ImageBox>
      <a>
        <img src="/images/logo.svg" alt="" srcset="" />
      </a>
      <Menu>
        <a href="#ModelX"> Model X </a>
        <a href="#ModelY"> Model Y </a>
        <a href="#Model3"> Model 3 </a>
        <a href="#ModelS"> Model S </a>
      </Menu>
      <RightMenu>
        <a href="#">Shop</a>
        <a href="#">Tesla Account</a>
        <CustomMenu onClick={() => setBurgerStatus(true)} />
      </RightMenu>
      <BurgerMenu show={BurgerStatus}>
        <CustonClose onClick={() => setBurgerStatus(false)} />
        <li>
          <a href="">Inventory</a>
        </li>
        <li>
          <a href="">Used</a>
        </li>
        <li>
          <a href="">Trad-in</a>
        </li>
        <li>
          <a href="">Demo Drive</a>
        </li>
        <li>
          <a href="">Fleet</a>
        </li>
        <li>
          <a href="">Commerical Energy</a>
        </li>
        <li>
          <a href="">Carrer</a>
        </li>
        <li>
          <a href="">Find Us</a>
        </li>
      </BurgerMenu>
    </ImageBox>
  );
}

export default NavBar;
const ImageBox = styled.div`
  display: flex;
  min-height: 1000px;
  position: fixed;
  padding: 0 20px;
  top: 0px;
  left: 0;
  right: 0;
  z-index: 1;
`;

const Menu = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  flex-direction: row;
  a {
    font-weight: 600;
    text-transform: uppercase;
    padding: 0 10px;
    margin: 30px;
  }
`;
const RightMenu = styled.div`
  display: flex;
  align-item: center;
  top: 10px;

  a {
    font-weight: 600;
    text-transform: uppercase;
    margin-right: 10px;
    margin: 30px;
  }
`;
const CustomMenu = styled(MenuIcon)`
  cursor: pointer;
  top: 100px;
`;
const BurgerMenu = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background-color: white;
  width: 300px;
  z-index: 16;
  list-style: none;
  padding: 20px;
  display: flex;
  flex-direction: column;
  text-align: start;
  transform: ${(props) => {
    console.log("show prop value:", props.show);
    return props.show ? "translateX(0)" : "translateX(100%)";
  }};
  transition: transform 0.2s ease in;
  li {
    padding: 20px 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);

    a {
      font-weight: 600;
    }
  }
`;
const CustonClose = styled(CloseIcon)`
  cursor: pointer;
`;
