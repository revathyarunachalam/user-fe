import axios from "axios";
import { APIENDPOINT, USERID } from "../utils/constants";

const getUser = async () => {
  const { data } = await axios.get(`${APIENDPOINT}/user/${USERID}`)
  .catch((err) => err.response);
  return data;
};

const updateUser = async (user) => {
  const { data } = await axios
    .put(`${APIENDPOINT}/user/${USERID}`,
    user,
    )
  .catch((err) => err.response);
  return data;
};


export {
  getUser,
  updateUser
}
