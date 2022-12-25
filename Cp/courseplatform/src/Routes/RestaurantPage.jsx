import Loader from "../Components/Loader";
import { useParams } from "react-router-dom";
import { useEffect,useState } from "react";

function RestaurantPage() {
  const [loader,setLoder] = useState(true);
  const [data,seData] = useState({})
  const {id} = useParams();
  useEffect(()=>{
    fetch(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/getrestaurants/${id}`)
    .then((res)=>res.json())
    .then((data)=>{
      console.log(data)
      seData(data.data)
      setLoder(false);
    })
  },[])
  const changetype=(string)=>{
    string = string.split('');
    for(let i=0;i<string.length;i++){
     if(string[i] == '_'){
      string[i] = ' ';
      string[i+1] = string[i+1].toUpperCase();
     }

     string[0] = string[0].toUpperCase();
    }
    return string.join('');
  }
  if (loader) {
    return <Loader />
  }
  return (
    <div data-testid="restaurant-container">
      <img data-testid="restaurant-image" width={"100%"} src={data.image} alt={data.name}/>
      <div>
        <h4 data-testid="restaurant-name">{data.name}</h4>
      </div>
      <div className="flex">
        <div>
          Type:
          <b data-testid="restaurant-type">{changetype(data.type)}</b>
        </div>
        <div>
          Rating:
          <b data-testid="restaurant-rating">{data.rating}</b>
        </div>
      </div>
      <div className="flex">
        <div>
          Votes:
          <b data-testid="restaurant-votes">{data.number_of_votes}</b>
        </div>
        <div>
          Starting Price:
          <b data-testid="restaurant-price">{data.price_starts_from}</b>
        </div>
      </div>
      <div></div>
    </div>
  );
}
export default RestaurantPage;
