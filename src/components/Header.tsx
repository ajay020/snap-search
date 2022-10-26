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
    <div className="container bg-dark">
      <form className="row  p-5 justify-content-center" onSubmit={handleSubmit}>
        <div className="col-auto bg-primary">
          <input
            type="text"
            onChange={(e) => changeHandler(e)}
            value={query}
            className="form-control"
            placeholder="Search pohotos"
          />
        </div>
        <div className="col-auto bg-secondary">
          <button className="btn btn-outline-primary">Search</button>
        </div>
      </form>
      <div className="row bg-primary">
        <Link to="/river" className="btn col-auto">River</Link>
        <Link to="/landscape" className="btn col-auto">Landscape</Link>
        <Link to="/bird" className="btn col-auto">Bird</Link>
      </div>
    </div>
  );
};

export default Header;
