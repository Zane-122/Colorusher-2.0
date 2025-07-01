import React from "react";
import styled from "styled-components";
import BasicTitle from "./text/Basic-title";

const SidebarContainer = styled.div`
    width: 100vw;
    height: 125px;
    background-color: rgb(255, 255, 255);
    border-bottom-right-radius: 15px;
    corner-bottom-left: 15px;

    border-bottom: 10px solid rgb(0, 0, 0);
    padding: 10px;

    position: fixed;
    top: -75px;
    left: 0;
    right: 0;
    z-index: 1000;


    transition: top 0.2s ease-in-out;
    &:hover {
        top: 0;
    }
`;

const Sidebar = () => {
    return (
        <SidebarContainer>
            
        </SidebarContainer>
    )
}

export default Sidebar;