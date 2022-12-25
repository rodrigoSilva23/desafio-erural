import { ContainerModalSearch } from "./style";

interface PropsModalListVideosSearch {
  searchValues: any;
  className?: string;
  setIsModalListVideosSearch: Function;
  setLinkVideo: Function;

}

export const ModalListVideosSearch = ({
  searchValues,
  className,
  setIsModalListVideosSearch,
  setLinkVideo,
}: PropsModalListVideosSearch) => {
  return (
    <ContainerModalSearch className={className}>
      <main>
        <div className="close-modal">
          <button onClick={() => setIsModalListVideosSearch(false)}>X</button>
        </div>
        {(searchValues)  ? (
          searchValues.map((video: any, index: number) => {
            const {  video_files: videoFiles } = video;
         
            return (
              <>
                {videoFiles && (
                  <div key={videoFiles[0]?.id} className="wrap-card">
                    <iframe
                      src={videoFiles[0]?.link}
                      className="wrap-iframe"
                    ></iframe>

                    <button onClick={()=> setLinkVideo(videoFiles[0]?.link)}>Assistir</button>
                  </div>
                )}
              </>
            );
          })
        ) : (
          <div key={'errorPesquisa'} >procurando..</div>
        )}
      </main>
    </ContainerModalSearch>
  );
};
