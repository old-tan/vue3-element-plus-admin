import request from '../utils/request.js'

const login = (data) => {
  return request.post("/user/login", data);
};
const getUserList = (data) => {
  return request.get("/user/list", data);
};
const saveUser = (data) => {
  return request.post("/user/save", data);
};
const delUser = (data) => {
  return request.del("/user/delete", data);
};
const getUserDetail = (data) => {
  return request.get("/user/detail", data);
};
export default {
  login, getUserList, saveUser, delUser, getUserDetail
}