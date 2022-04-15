import React from "react";
import Styled from "styled-components";




const FooterContainer = Styled.div`
    display: flex;
    justify-content: space-between;
    `

const UlContainer = Styled.ul`
    display: flex;
    li{
      list-style: none;
    }
`

export default function Footer() {
  return <footer>
    <FooterContainer>
      <p>nutt@me.com</p>
      <div>
        <UlContainer>
          <li><a>Linkedin</a></li>
          <li><a>Linktree</a></li>
          <li><a>Contact</a></li>
        </UlContainer>
      </div>
    </FooterContainer>
  </footer>;
}
