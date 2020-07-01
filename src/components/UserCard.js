import React from "react";
import { Card, CardBody } from "reactstrap";

const UserCard = ({ user }) => {
  return (
    <Card className="text-center mt-3 mb-4">
      <img src={user.avatar_url} alt="NO DATA" className="img-thumbnail" />
      <CardBody>
        <div className="text-warning">{user.name}</div>
        <div className="text-warning">{user.location}</div>
        <div className="text-warning">{user.bio}</div>
        <div className="text-danger">
          Available for hire: {user.hireable ? "YES" : "NOPE"}
        </div>
        <div className="text-info">Followers {user.followers}</div>
      </CardBody>
    </Card>
  );
};

export default UserCard;
