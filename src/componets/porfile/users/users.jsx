import React from "react";

const Users = () => {
  return (
    <div id="friends">
      <div className="friend">
        <img
          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/245657/1_copy.jpg"
          alt="a"
        />
        <p>
          <strong>Miro Badev</strong>
        </p>
        <div className="status available"></div>
      </div>

      <div className="friend">
        <img
          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/245657/2_copy.jpg"
          alt="a"
        />
        <p>
          <strong>Martin Joseph</strong>
        </p>
        <div className="status away"></div>
      </div>

      <div className="friend">
        <img
          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/245657/3_copy.jpg"
          alt="a"
        />
        <p>
          <strong>Tomas Kennedy</strong>
        </p>
        <div className="status inactive"></div>
      </div>

      <div className="friend">
        <img
          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/245657/4_copy.jpg"
          alt="a"
        />
        <p>
          <strong>Enrique Sutton</strong>
        </p>
        <div className="status inactive"></div>
      </div>

      <div className="friend">
        <img
          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/245657/5_copy.jpg"
          alt="a"
        />
        <p>
          <strong> Darnell Strickland</strong>
        </p>
        <div className="status inactive"></div>
      </div>
    </div>
  );
};

export default Users;
