import RestaurantCard from "./RestaurantCard";

function RestaurantTable({data=[]}) {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Rating</th>
          <th>Type</th>
          <th>Price Starts From</th>
        </tr>
      </thead>
      <tbody>
        {
          data.map((e,i)=>{
            return <RestaurantCard name={e.name} 
            rating={e.rating} 
            type={e.type} 
            price_starts_from={e.price_starts_from}
            id={e.id}
            key={i} />
          })
        }
        
      </tbody>
    </table>
  );
}

export default RestaurantTable;
