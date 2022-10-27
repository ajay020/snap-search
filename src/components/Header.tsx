import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { PhotoContext } from "../context/PhotoContext";

type PropType = {
  images?: [];
  loading?: boolean;
  runSearch?: any;
};

const Header = () => {
  const [query, setQuery] = useState();
  const { runSearch } = useContext<PropType>(PhotoContext);

  const changeHandler = (e: any) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (query) {
      runSearch(query);
    }
  };

  return (
    <div className="container border pt-4 w-50 my-5 bg-dark rounded shadow">
      <form
        className="header row g-2 justify-content-center "
        onSubmit={handleSubmit}
      >
        <div className="col-sm-12 col-md-8">
          <input
            type="text"
            onChange={(e) => changeHandler(e)}
            value={query}
            className="form-control d-inline-block"
            placeholder="Search pohotos"
          />
        </div>
        <div className="col-auto">
          <button className="btn  btn-outline-primary">Search</button>
        </div>
      </form>
      <div className="header__links row mb-2 g-2 mt-5 justify-content-center">
        <Link to="river" className="btn   btn-outline-primary  col-sm-auto ">
          River
        </Link>
        <Link to="landscape" className="btn  btn-outline-primary mx-2 col-sm-auto">
          Landscape
        </Link>
        <Link to="bird" className="btn btn-outline-primary  col-sm-auto">
          Bird
        </Link>
      </div>
    </div>
  );
};

export default Header;
