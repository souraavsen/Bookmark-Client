import axios from "axios";

export const fetchBookmarks = async () => {
  try {
    const data = await axios.get(
      `${import.meta.env.VITE_APP_SERVER_URL}/api/bookmarks`
    );
    return data;
  } catch (error) {
    console.log("____error____", error);
  }
};
