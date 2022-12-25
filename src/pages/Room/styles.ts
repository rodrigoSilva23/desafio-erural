import { DiVim } from "react-icons/all";
import styled from "styled-components";

export const ContainerRoom = styled.main`
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-columns: 12fr;
  grid-template-rows: 1fr 10fr 1fr;
  align-content: space-between;
  .img-fundo-room {
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: -5;
  }
  header {
    width: 100%;
    height: 50px;
    display: grid;
    grid-template-columns: 3fr 7fr;
    align-items: center;
    justify-content: center;
    padding: 0 20px;
    background: rgb(232, 239, 226);
    box-shadow: 0 1px 10px 0px rgb(0, 0, 0, 0.4);
    .wrap-log {
      display: flex;
      align-items: center;
      p {
        margin-left: 10px;
        color: rgb(35, 120, 20);
        font-size: 20px;
      }
      img {
        width: 80px;
      }
    }
  }
  .wrap-content-header {
    display: flex;
    align-items: center;
    justify-items: center;
    flex-wrap: wrap;
    p {
      margin: 0 10px;
    }
    div {
      display: flex;
      align-items: center;
      margin: 0;
      border-radius: 10px;
      background-color: #fff;
    }
    div input {
      margin: 0;
      border: none;
      outline: 0;
      border-radius: 10px;
      height: 28px;
    }
    div img {
      margin-left: 5px;
      width: 30px;
      height: 30px;
    }
  }
  .wrap-main-content {
    overflow: hidden;
    overflow-y: auto;
    display: grid;
    margin: 0 2em;
    grid-template-columns: 8fr 4fr;
    grid-column-gap: 10px;
    grid-template-rows: 12fr;
    .wrap-chat-content {
      border-radius: 5px;
      margin: 1em 0em 0em 1em;
      background: rgb(38, 36, 34);
      width: 100%;
      div {
        margin: 7px 0 0 14px;
        width: 90%;
        height: 77vh;
      }
    }
    .wrap-video-content {
      width: 100%;
      border-radius: 5px;
      overflow-y: auto;
      margin: 1em 0em 0em 1em;
      background: rgb(38, 36, 34);
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      .iframe-main {
        iframe {
          width: 100%;
          height: 450px;
        }
      }
      ::-webkit-scrollbar {
        display: none;
      }
      :hover::-webkit-scrollbar {
        display: block;
        width: 12px;
        background-color: transparent;
        border-radius: 5px;
      }
      ::-webkit-scrollbar-thumb {
        background-color: #787878;
        border-radius: 5px;
      }

      .iframe-contant {
        width: 100%;
        display: flex;

        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        iframe {
          margin: 5px;
          width: 150px;
          height: 200px;
        }
        div {
          display: flex;
          flex-direction: column;
          flex-wrap: wrap;
          justify-content: center;
          align-items: center;
          text-align: center;

          a button {
            background: rgb(233, 126, 19);
            border: none;
            border-radius: 5px;
            margin: 10px 0;
            padding: 10px 30px;
            transition: all 0.2s;
            cursor: pointer;
            :hover {
              opacity: 0.9;
              transform: scale(1.05);
            }
            :active {
              opacity: 1;
              transform: scale(0.9);
            }
          }
          a {
            color: #000;
            text-decoration: none;
          }
        }
      }
    }
  }

  @media screen and (max-width: 768px) {
    header{
      display:flex;
      flex-direction: column;
    }
    .wrap-main-content {
      margin: 0px;
      display: block;

      .wrap-chat-content,
      .wrap-video-content {
        width: auto;
        margin: 10px;
      }
    }
  }

  @media screen and (max-width: 768px) {
    header{
      display:flex;
      flex-direction: column;
      flex-wrap: wrap;
      height:80px;
      .wrap-content-header{

      }
    }
    .wrap-main-content {
      margin: 0px;
      display: block;

      .wrap-chat-content,
      .wrap-video-content {
        width: auto;
        margin: 10px;
      }
    }
  }
`;
