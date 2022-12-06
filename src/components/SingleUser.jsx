import React from "react";

export default function SingleUser({ user }) {
  return (
    <div className="singleUser">
      <img src={user.picture.large} alt="" />
      <div className="userInfo">
        <h3>
          {user.name.first} {user.name.last}
        </h3>
        <p className="userMail">
          Email: 
           {user.email}
        </p>
        <p className="userLocation">
            {user.location.country}
        </p>
      </div>
    </div>
  );
}
