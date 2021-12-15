import http from '../http-common';

const similarityImage = (data) => {
  return http.post("/api/similarity", data, {withCredentials: true});
}


const getDrapeImage = (data) => {
  return http.post("/api/drape", data, {withCredentials: true});
}

const uploadImage = (data) => {
  return http.post("/api/upload", data, {withCredentials: true});
}

const getImages = () => {
  return http.get("/api/images");
}

const deleteImage = (data) => {
  return http.post("/api/image", data, {withCredentials: true});
}

export default {
  similarityImage,
  getDrapeImage,
  uploadImage,
  getImages,
  deleteImage
};