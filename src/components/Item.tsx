
const Item = ({data}: any) => {

    let farm = data.farm;
    let id = data.id;
    let server = data.server;
    let secret = data.secret;

    let url = `https://farm${farm}.staticflickr.com/${server}/${id}_${secret}_m.jpg`;

    return ( <div className="border" style={{width: "200px", height: "200px"}}>
        <img src={url} alt="" className="img-fluid w-100"  />
    </div> );
}
 
export default Item;