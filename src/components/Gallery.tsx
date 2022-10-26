import { useContext } from 'react';
import { PhotoContext } from '../context/PhotoContext';
import Item from './Item';

type PropType = {
    images?: [];
    loading?: boolean;
    runSearch? : (query:string) => void 
}

const Gallery = () => {
    const {images} = useContext<PropType>(PhotoContext);

    return ( <div className="container border">
        <div className="row border">
            {
                images?.map( (img:any ) => <Item key={img?.id} data={img} />)
            }    
        </div>
        
    </div>);
}
 
export default Gallery;