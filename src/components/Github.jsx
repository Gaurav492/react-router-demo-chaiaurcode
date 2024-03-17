import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
  const gitHData = useLoaderData();
  //   const [gitHData, setGitHData] = useState({});
  //   useEffect(() => {
  //     async function getFollowers() {
  //       let data = await fetch("https://api.github.com/users/Gaurav492");
  //       let res = await data.json();

  //       setGitHData(res);
  //     }

  //     console.log(gitHData);
  //     getFollowers();
  //   }, []);
  return (
    <div className="text-center m-4 bg-gray-600 text-white text-4xl p-7 flex justify-center content-center flex-col rounded-lg">
      <div className="text-center">
        <img
          className="rounded block w-1/4 mx-auto"
          src={gitHData?.avatar_url}
          alt=""
        />
      </div>
      <h1>Github Followers: {gitHData?.followers}</h1>
    </div>
  );
}

export default Github;

export const githubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/Gaurav492");
  return response.json();
};
