import "../css/UserSummary.css";
import { useState, useEffect } from "react";
import fetchUser from "../services/rando_user";
import User from "./User";

function UserSummary() {
  // const [fetchUser, setFetchUser] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);

  const refreshUser = async (event) => {
    // window.location.reload(false)
    event.preventDefault();
    const randoUserInfo = await fetchUser();
    setCurrentUser(randoUserInfo.results);
  };

  useEffect(() => {
    const getRandoUser = async () => {
      await fetchUser();
    };
    console.log(getRandoUser);
    setCurrentUser(getRandoUser);

    // getRandoUser();
  }, []);

  return (
    <main className="app-main">
      <button onClick={() => refreshUser()} />
      {currentUser.map((randoUser, index) => {
        return <User {...randoUser} key={index} />;
      })}
    </main>
  );
}

export default UserSummary;
