import { Link, Navigate, useLocation, useParams } from "react-router-dom";
import { Footer } from "../../components/Footer";
import { ImSearch } from "react-icons/all";
import { ContainerRoom } from "./styles";
import { getSearchListVideos } from "../../service/api";
import { useEffect, useState } from "react";
import { ModalListVideosSearch } from "../../components/ModalListVideoSearch";
import Chat from "../../components/chat";

export const Room = () => {
  const {id:IdRoomCreated}= useParams()
  
  const [searchVideo, setSearchVideo] = useState("");
  const [listVideos, setListVideos] = useState([]);
  const [linkVideo, setLinkVideo] = useState(
    "https://www.youtube.com/embed/tgbNymZ7vqY"
  );
  const [dadosSearchVideo, setDadosSearchVideo] = useState([]);
  const [isModalListVideosSearch, setIsModalListVideosSearch] = useState(false);

  const handleSearchVideo = async (searchValue: string) => {
    if (!searchVideo) return alert("Digite alguma coisa");
    setIsModalListVideosSearch(true);
    getSearchListVideos(searchValue).then((searchVideo) =>
      setDadosSearchVideo(searchVideo?.data.videos)
    );
  };
  useEffect(() => {
    (async (value?: string) => {
      getSearchListVideos(value || "rural").then((listVideo: any) => {
        setListVideos(listVideo.data.videos);
      });
    })();
  }, []);

  return (
    <ContainerRoom>
      <img
        className="img-fundo-room"
        src="/img/fundo-room.gif"
        alt="fundo animado da sala"
      />
      <header>
        <div className="wrap-log">
          <img src="/img/log-erural.svg" alt="logo Watch Rural" />
          <p>watch</p>
        </div>
        <div className="wrap-content-header">
          <div>
            <img
              src="https://w2g.tv/room/assets/1.8a80cf2b.png"
              alt="icon Youtube"
            />
            <input
              type="text"
              name="s"
              id="search"
              onChange={(e) => setSearchVideo(e.target.value)}
              placeholder="Pesquisa"
            />
            <button onClick={() => handleSearchVideo(searchVideo)}>
              <ImSearch size={20} color="rgb(233,126,19)" width={10} />
            </button>
          </div>

          <p>
            Total De Membros: <span>10</span>
          </p>
          <p>
            Membros Online: <span>1</span>
          </p>
        </div>
      </header>
      <main className="wrap-main-content">
        <section className="wrap-video-content">
          <div className="iframe-main" id="iframe-main">
            <iframe src={linkVideo}></iframe>
          </div>
          {isModalListVideosSearch ? (
            <ModalListVideosSearch
              className={"modal-list-video"}
              searchValues={dadosSearchVideo}
              setIsModalListVideosSearch={setIsModalListVideosSearch}
              setLinkVideo={setLinkVideo}
            />
          ) : (
            <div className="iframe-contant">
              {listVideos.map((value: any) => {
                return (
                  <div key={value.video_files[0].id}>
                    <div>
                      <iframe src={value.video_files[0].link}></iframe>
                    </div>
                    <a href="#iframe-main">
                      <button
                        onClick={() => setLinkVideo(value.video_files[0].link)}
                      >
                        Assistir
                      </button>
                    </a>
                  </div>
                );
              })}
            </div>
          )}
        </section>
        <section className="wrap-chat-content">{<Chat  idRoom={IdRoomCreated || ""} />}</section>
      </main>

      <Footer className="Footer" />
    </ContainerRoom>
  );
};
