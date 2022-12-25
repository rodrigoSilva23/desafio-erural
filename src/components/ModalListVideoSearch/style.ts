import styled from "styled-components";
export const ContainerModalSearch = styled.div`
  width: 100%;

  main {
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    justify-items: center;
    align-items: center;

    .wrap-card {
      width: 80%;
      border-radius: 10px;
      height: 150px;
      margin: 10px;

      border: 1px solid #fff;
      overflow: hidden;
      .wrap-iframe {
        margin: 0;
        border: none;
        border-top-left-radius: 15px;
        border-bottom-left-radius: 15px;
        height: 100%;
        width: 40%;
        position: relative;
        left: -6px;
      }
      button {
        position: relative;
        top:-22px;
        left: 20%;
       margin: 20px;
       padding: 10px 20px;
        background: rgb(233, 126, 19);
        border: none;
        border-radius: 5px;
        font-size: 25px;
        transition: all 0.4s ease;
        :hover {
          opacity: 0.8;
          transform: scale(1.1);
        }
        :active {
          opacity: 1;
          transform: scale(0.9);
        }
      }
    }
  }
  .close-modal {
    width: 80%;
    display: flex;
    justify-content: end;
    margin-right: 50px;

    button {
      text-align: end;
      background: transparent;
      border: none;
      font-size: 25px;
      transition: all 0.4s ease;
      :hover {
        transform: scale(1.2);
      }
      :active {
        transform: scale(0.8);
      }
    }
  }
`;
