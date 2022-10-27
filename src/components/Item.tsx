
const Item = ({data}: any) => {

    let farm = data.farm;
    let id = data.id;
    let server = data.server;
    let secret = data.secret;

    let url = `https://farm${farm}.staticflickr.com/${server}/${id}_${secret}_m.jpg`;

    return ( <div className="photo col-xs-12 col-sm-4 col-md-4 col-lg-2" style={{width:"180px", height:"180px",}}>
        <img src={url} alt="" className="p-0" style={{width:"100%", height:"100%",}}  />
    </div> );
}
 
export default Item;