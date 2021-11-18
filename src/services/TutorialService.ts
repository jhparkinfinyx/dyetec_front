import http from '../http-common';

const getAll = () => {
  // return http.get("/tutorials");
  return new Promise((resolve, reject) => {
    resolve([
      {id: 0, name: '매운새우깡', price: 1800, choice: 1},
      {id: 1, name: '큰쵸', price: 1200, choice: 1},
      {id: 2, name: '허니버터칩', price: 1500, choice: 1},
    ])
  });
  // return [
  //   {id: 0, name: '매운새우깡', price: 1800, choice: 1},
  //   {id: 1, name: '큰쵸', price: 1200, choice: 1},
  //   {id: 2, name: '허니버터칩', price: 1500, choice: 1},
  // ];
}

const get = id => {
  return http.get(`/tutorials/${id}`);
};

const create = data => {
  return http.post("/tutorials", data);
};

const update = (id, data) => {
  return http.put(`/tutorials/${id}`, data);
};

const remove = id => {
  return http.delete(`/tutorials/${id}`);
};

const removeAll = () => {
  return http.delete(`/tutorials`);
};

const findByTitle = title => {
  return http.get(`/tutorials?title=${title}`);
};

export default {
  getAll,
  get,
  create,
  update,
  remove,
  removeAll,
  findByTitle
};