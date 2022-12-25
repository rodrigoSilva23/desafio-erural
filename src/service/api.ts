import axios from "axios";
// neste caso não coloquei no .env
const AuthStr = `bearer 563492ad6f9170000100000149001ae239af425fb68862127b3daf6f`;
async function getSearchListVideos(param: string) {
  try {
    const response = await axios.get(
      `https://api.pexels.com/videos/search?query=${param}&per_page=10`,
      { headers: { 
        Authorization: AuthStr 
      } }
    );
    return response;
  } catch (error) {
    console.error(error);
  }
}

export { getSearchListVideos };
