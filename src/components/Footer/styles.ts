import styled from "styled-components";

export const FooterComponent = styled.footer`
  width: 100%;
  height: 4rem;
  background-color: #17181b;
  display: flex;
  align-items: center;
  justify-content: center;
  
  .footer-content {
    width: 100%;
    display: flex;
    justify-content: center;
    text-align: center;
    p {
      color: #727172;
      font-size: 1.2rem;
    }
    .social-list {
      margin-left: 40px ;
      a {
        margin: 0 1rem;
        color: #727172;
        font-size: 1.3rem;
        :hover{
           transition: color 0.5s ;
          color: white;
        }
      }

      
    }
  }
 @media(max-width:768px) {
  .footer-content{
    display: flex;
    flex-direction: column;
    align-items: center;
    .social-list{
      margin: 10px 0 0 0  ;

    }
  }
  
   
 } 
`;
