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

    return ( <div className="container border border-primary">
        <div className="row g-2 mb-5">
            {
                images?.map( (img:any ) => <Item key={img?.id} data={img} />)
            }    
        </div>
        
    </div>);
}
 
export default Gallery;