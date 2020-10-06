import axios from "axios";

const KEY = "AIzaSyCM1AydXk4Fvi5IePVZ3snn4VVq5UPWPzk";
const youtube = axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
});

const params = {
  part: "snippet",
  maxResuls: 40,
  key: KEY,
  regionCode: "JP",
  type: "video",
};

export const fetchPopularData = async () => {
  //非同期関数
  return await youtube.get("/videos", {
    params: {
      ...params,
      chart: "mostPopular",
    },
  });
};

export const fetchSelectedData = async (id) => {
  return await youtube.get("/videos", {
    params: {
      ...params,
      id,
    },
  });
};

export const fetchRelatedData = async (id) => {
  return await youtube.get("/search", {
    params: {
      ...params,
      relatedToVideoId: id,
    },
  });
};

export const fetchSearchData = async (query) => {
  return await youtube.get("/search", {
    params: {
      ...params,
      q: query,
    },
  });
};
