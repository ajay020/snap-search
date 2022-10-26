import axios from "axios";
import { createContext, useState } from "react";
import { apiKey } from './../api/config';


export const PhotoContext = createContext({});

const PhotoContextProvider = (props:any) => {
    const [images, setImages]  = useState([]);
    const [loading, setLoading] = useState(true);

    const runSearch = (query:string) =>{
        const method = "flickr.photos.search";
        let url = `https://api.flickr.com/services/rest/?method=${method}&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`;

        axios.get(url)
              .then(response =>{
                setImages(response.data?.photos.photo);
                setLoading(false);
              })
              .catch(error =>{
                console.log(error);
                setLoading(false);
              })  
    }
    return (
         <PhotoContext.Provider value={{images, loading, runSearch}}>
            {props.children}
        </PhotoContext.Provider> );
}
 
export default PhotoContextProvider;