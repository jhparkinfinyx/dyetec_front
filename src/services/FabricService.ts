import http from '../http-common';

const getAll = () => {
  // return http.get("/tutorials");
  return new Promise((resolve, reject) => {
    resolve([
      {
        id: 1,
        name: "TA01Y-0117",
        type: "POLYAMID",
        ratio: "PA 84%, PU 16%",
      },{
        id: 2,
        name: "TA01Y-0116",
        type: "POLYAMID",
        ratio: "PA 84%, PU 16%",
      },
      {
        id: 3,
        name: "TA01Y-0115",
        type: "POLYAMID",
        ratio: "PA 84%, PU 16%",
      },
      {
        id: 3,
        name: "TA01Y-0115",
        type: "POLYAMID",
        ratio: "PA 84%, PU 16%",
      },
      {
        id: 4,
        name: "TA01Y-0115",
        type: "POLYAMID",
        ratio: "PA 84%, PU 16%",
      },
      {
        id: 5,
        name: "TA01Y-0115",
        type: "POLYAMID",
        ratio: "PA 84%, PU 16%",
      },
      {
        id: 6,
        name: "TA01Y-0115",
        type: "POLYAMID",
        ratio: "PA 84%, PU 16%",
      },
      {
        id: 7,
        name: "TA01Y-0115",
        type: "POLYAMID",
        ratio: "PA 84%, PU 16%",
      },
      {
        id: 8,
        name: "TA01Y-0115",
        type: "POLYAMID",
        ratio: "PA 84%, PU 16%",
      },
      {
        id: 9,
        name: "TA01Y-0115",
        type: "POLYAMID",
        ratio: "PA 84%, PU 16%",
      },
      {
        id: 10,
        name: "TA01Y-0115",
        type: "POLYAMID",
        ratio: "PA 84%, PU 16%",
      },
      {
        id: 11,
        name: "TA01Y-0115",
        type: "POLYAMID",
        ratio: "PA 84%, PU 16%",
      },
      {
        id: 12,
        name: "TA01Y-0115",
        type: "POLYAMID",
        ratio: "PA 84%, PU 16%",
      },
      {
        id: 13,
        name: "TA01Y-0115",
        type: "POLYAMID",
        ratio: "PA 84%, PU 16%",
      },
      {
        id: 14,
        name: "TA01Y-0115",
        type: "POLYAMID",
        ratio: "PA 84%, PU 16%",
      },
      {
        id: 15,
        name: "TA01Y-0115",
        type: "POLYAMID",
        ratio: "PA 84%, PU 16%",
      },
      {
        id: 16,
        name: "TA01Y-0115",
        type: "POLYAMID",
        ratio: "PA 84%, PU 16%",
      },
      {
        id: 17,
        name: "TA01Y-0115",
        type: "POLYAMID",
        ratio: "PA 84%, PU 16%",
      },
      {
        id: 18,
        name: "TA01Y-0115",
        type: "POLYAMID",
        ratio: "PA 84%, PU 16%",
      },
      {
        id: 19,
        name: "TA01Y-0115",
        type: "POLYAMID",
        ratio: "PA 84%, PU 16%",
      },
      {
        id: 20,
        name: "TA01Y-0115",
        type: "POLYAMID",
        ratio: "PA 84%, PU 16%",
      },
      {
        id: 21,
        name: "TA01Y-0115",
        type: "POLYAMID",
        ratio: "PA 84%, PU 16%",
      },
      {
        id: 22,
        name: "TA01Y-0115",
        type: "POLYAMID",
        ratio: "PA 84%, PU 16%",
      },
      {
        id: 23,
        name: "TA01Y-0115",
        type: "POLYAMID",
        ratio: "PA 84%, PU 16%",
      },
      {
        id: 24,
        name: "TA01Y-0115",
        type: "POLYAMID",
        ratio: "PA 84%, PU 16%",
      },
      {
        id: 25,
        name: "TA01Y-0115",
        type: "POLYAMID",
        ratio: "PA 84%, PU 16%",
      },
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