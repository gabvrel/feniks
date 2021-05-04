import React from "react";
import dynamic from "next/dynamic";

const App = dynamic(() => import("./App"), {
  loading: () => (
    <div
      style={{
        display: "flex",
        height: "100vh",
        justifyContent: "center",
        alignContent: "center",
      }}
    >
      <h2>LOADING...</h2>
    </div>
  ),
});

const Home = () => {
  return <App />;
};

export default Home;
