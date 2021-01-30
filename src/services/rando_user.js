import axios from "axios";

async function fetchUser() {
  const RandoUserURL = `https://api.randomuser.me/`;
  console.log(RandoUserURL);
  const RandoUserURL = await axios.get(RandoUserAPI).then(({ data }) => {
    return data;
  });
  return RandoUserInfo;
  // const { data } = await axios.get(RandoUserAPI);
  // return data;
}

export default fetchUser;
