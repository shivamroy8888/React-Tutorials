import Loader from "../Components/Loader";
import { AppContext } from "../Context/AppContext";
import { useContext } from "react";
import { useEffect,useState } from "react";
import RestaurantTable from "../Components/RestaurantTable";
import Pagination from "../Components/Pagination";


function Dashboard() {
  const [data,setData] = useState([]);
  const [totalpage,settotalPage] = useState(0);
  const [page,setPage] = useState(1);
  const [loader,setLoader] = useState(true);
  const [filter,setFilter] = useState("all");
  useEffect(()=>{
   getdata()
  },[page,filter])
  const getdata=()=>{
    setLoader(true);
    fetch(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/getrestaurants?page=${page}&limit=10&filter=${filter}`)
    .then((res)=>res.json())
    .then((data)=>{
      setData(data.data)
      setLoader(false);
      settotalPage(data.totalPages)
      console.log(data);
    });
  }
  const {authState,logoutUser} = useContext(AppContext);
  return (
    <div>
      <h3>Dashboard</h3>
      <div>
        <button data-testid="logout-btn" onClick={()=>(logoutUser())}>Logout</button>
        <p>
          Token:
          <b data-testid="user-token">{authState.token}</b>
        </p>
      </div>
      <br />
      <div>
        <select data-testid="filter-box"  onChange={(e)=>{setFilter(e.target.value)}}>
          <option value="">All</option>
          <option value="fine_dining">Fine Dining</option>
          <option value="ethnic">Ethnic</option>
          <option value="fast_food">Fast Food</option>
          <option value="cafe">Cafe</option>
          <option value="casual_dining">Casual Dining</option>
          {/* fine_dining, ethnic, fast_food, cafe, casual_dining	 */}
        </select>
      </div>
      <br />
      <div style={{ display: "flex", justifyContent: "center" }}>
       {loader ? <Loader /> : <RestaurantTable data={data}/> } 
        {/* Restaurant Table, remember to show loading indicator when API is loading */}
      </div>
      <br />
      <div data-testid="pagination-container">
        <Pagination
        handlePageChange={(page)=>(setPage(page))}
        currentPage={page}
        totalPages={totalpage} />
        {/* Pagination */}</div>
    </div>
  );
}

export default Dashboard;
