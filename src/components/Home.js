import React from "react";
import styled from "styled-components";
import Sections from "./Sections";

function Home() {
  return (
    <container>
      <Sections
        id="ModelX"
        title="Model X"
        description=" Order Online For Touchless Delivery"
        leftbutton=" Custom Order"
        rightbutton=" Existing Inventory"
        backgroundImg="model-x.jpg"
      />
      <Sections
        id="ModelY"
        title="Model Y"
        description=" Order Online For Touchless Delivery"
        leftbutton=" Custom Order"
        rightbutton=" Existing Inventory"
        backgroundImg="model-y.jpg"
      />
      <Sections
        id="Model3"
        title="Model 3"
        description=" Order Online For Touchless Delivery"
        leftbutton=" Custom Order"
        rightbutton=" Existing Inventory"
        backgroundImg="model-3.jpg"
      />
      <Sections
        id="ModelS"
        title="Model S"
        description=" Order Online For Touchless Delivery"
        leftbutton=" Custom Order"
        rightbutton=" Existing Inventory"
        backgroundImg="model-s.jpg"
      />
      <Sections
        title="Lowest Cost Solar Panels In America"
        description=" Money-Back Guarantee"
        leftbutton=" Order Now"
        rightbutton=" Learn More"
        backgroundImg="solar-panel.jpg"
      />
      <Sections
        title="Solar For New Roof"
        description=" Solar Roof Cost Less Than New Roof"
        leftbutton=" Order Now"
        rightbutton=" Learn More"
        backgroundImg="solar-roof.jpg"
      />
    </container>
  );
}

export default Home;
const container = styled.div`
  height: 100vh;
`;
