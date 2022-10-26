import { useParams } from "react-router-dom";

import Gallery from "./Gallery";
import Header from "./Header";
import { useContext } from 'react';
import { PhotoContext } from './../context/PhotoContext';
import { useEffect } from 'react';

type PropType = {
    runSearch?: any
}

const Container = () => {
  const params = useParams();
  const {runSearch}   = useContext<PropType>(PhotoContext);

  useEffect(() =>{
    if(params.searchQuery){
        runSearch(params.searchQuery);
      }
  }, [params])


    return ( 
        <div>
            <Header/>
            <Gallery/>
        </div>);
}
 
export default Container;