import { Link, Navigate, useNavigate } from "react-router-dom";
import { TextAnimedWrite } from "../../components/Text/TextAnimed";
import { ContainerHome } from "./styles";
import uuid from "react-uuid";

export const Home = () => {
  const navigate = useNavigate();
  const handleCreateRoom = () => {
    const randomIdRoom = uuid();
    navigate(`/room/${randomIdRoom }`);
  };
  return (
    <ContainerHome>
      <img src="./img/home.jpg" alt="imagem de fundo" />
      <section className="wrap-create-room">
        <h1>
          <TextAnimedWrite children={" Bem-vindo"} /> Watch-Rural
        </h1>
        <p>Crie Sua sala e compartilhe o melhor do mundo rural</p>
        <button onClick={() => handleCreateRoom()}> Criar Sala</button>
      </section>
    </ContainerHome>
  );
};
