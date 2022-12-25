import styled from "styled-components";
export const ContainerHome = styled.main`
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
 img{
  width: 100vw;
  height: 100%;
  position: absolute;
  z-index: -1;
 }
 h1 span{
  color: rgb(233,126,19);
 }
  .wrap-create-room{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10px;
    margin: 10px;
    background: rgba(232,239,226,0.8);
    border-radius: 5px;
    button{
      background: rgb(233,126,19);
      border: none;
      border-radius: 5px;
      margin: 10px 0;
      padding: 10px 30px;
      transition: all 0.2s;
      :hover{
        opacity: 0.9;
        transform: scale(1.05);
      }
      :active{
        opacity: 1;
        transform: scale(0.9);
      }
    }
  }
`;
