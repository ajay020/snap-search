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

  const changeHandler = (e:any) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e:any) =>{
    e.preventDefault();
    if (query) {
        runSearch(query);
    }
  }

  return (
    <div className="container border w-50 my-4">
      <form className="row g-2 p-5 justify-content-center" onSubmit={handleSubmit}>
        <div className="col-auto bg-secondary">
          <input
            type="text"
            onChange={(e) => changeHandler(e)}
            value={query}
            className="form-control"
            placeholder="Search pohotos"
          />
        </div>
        <div className="col-auto">
          <button className="btn btn-outline-primary">Search</button>
        </div>
      </form>
      <div className="row mb-2  justify-content-center">
        <Link to="river" className="btn   btn-outline-primary  col-auto">River</Link>
        <Link to="landscape" className="btn  btn-outline-primary mx-2 col-auto">Landscape</Link>
        <Link to="bird" className="btn btn-outline-primary  col-auto">Bird</Link>
      </div>
    </div>
  );
};

export default Header;
