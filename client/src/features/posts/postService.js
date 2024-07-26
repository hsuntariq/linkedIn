import axios from "axios";
const base_url = "http://localhost:3001/api/post";

export const uploadPost = async (postData) => {
  const response = await axios.post(
    `${base_url}/upload-post/${postData.user_id}`,
    postData
  );

  return response.data;
};
