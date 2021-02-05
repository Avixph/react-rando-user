import axios from "axios";

export default async function fetchUser() {
  const RandoUserURL = `https://api.randomuser.me/`;
  console.log(RandoUserURL);
  const RandoUserInfo = await axios.get(RandoUserURL).then(({ data }) => {
    return data;
  });
  return RandoUserInfo;
}