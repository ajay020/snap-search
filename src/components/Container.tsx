import { useParams } from "react-router-dom";

import Gallery from "./Gallery";
import Header from "./Header";
import { useContext } from "react";
import { PhotoContext } from "./../context/PhotoContext";
import { useEffect } from "react";
import Loader from "./Loader";

type PropType = {
  runSearch?: any;
  loading?: boolean;
  images?: any;
};

const Container = () => {
  const params = useParams();
  const { runSearch, loading } = useContext<PropType>(PhotoContext);

  useEffect(() => {
    if (params.searchQuery) {
      runSearch(params.searchQuery);
    }
  }, [params]);

  return (
    <div>
      <Header />
      {loading ? <Loader /> : <Gallery />}
    </div>
  );
};

export default Container;
