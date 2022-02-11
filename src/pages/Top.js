import React, { useEffect, useContext } from "react";
import Layout from "../components/Layout/Layout";
import { fetchPopularData } from "../api/index";
import { Store } from "../store/index";

const Top = () => {
  const { globalState, setGlobalState } = useContext(Store);
  useEffect(() => {
    fetchPopularData().then((result) => {
      console.log("data", result);
      setGlobalState({
        type: "SET_POPULAR",
        payload: { popular: result.data.items },
      });
    });
  }, []);
  return <Layout>Top Page</Layout>;
};

export default Top;
