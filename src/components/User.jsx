import React from "react";
import { useParams } from "react-router-dom";

function User() {
  const { id } = useParams();
  return (
    <>
      <div className="bg-gray-500 py-36 text-center">
        <h1 className="text-white text-4xl uppercase font-bold">User: {id}</h1>
      </div>
    </>
  );
}

export default User;
