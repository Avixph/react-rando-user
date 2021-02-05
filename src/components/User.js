import "../css/User.css";
import { useState } from "react";

function User({ picture, name, login, email, location }) {
  const [showMore, setShowMore] = useState(false);

  const showMoreInfo = () => {
    setShowMore(!showMore);
  };

  return (
    <div className="app-view">
      <div className="user-profile">
        <br />
        <img src={picture.large} alt="user" />
        <h5>{login.username}</h5>
        <button onClick={showMoreInfo}>
          {showMore ? "Hide Info" : "Show Info"}
        </button>
        {showMore ? (
          <div className="user-info">
            <h3>
              {name.first} {name.last}
            </h3>
            <p>{email}</p>
            <p>
              {location.state}, {location.country}
            </p>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default User;
