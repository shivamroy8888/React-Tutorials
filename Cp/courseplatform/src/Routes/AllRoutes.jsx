import {Routes, Route} from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import Dashboard from "./Dashboard"
import RestaurantPage from "./RestaurantPage";
import PrivateRoute from "../Components/PrivateRoute";

function AllRoutes() {
  return <div>{/* Add Home, Login dashboard and restaurant pages */}
  <Routes>
     <Route path="/" element={<Home/>}/>
     <Route path="/dashboard" element={
     <PrivateRoute>
      <Dashboard/>
     </PrivateRoute>
     }
     />
     <Route path="/login" element={<Login/>}/>
     
     <Route path="/restaurants/:id" element={ 
     <PrivateRoute>
      <RestaurantPage/>
      </PrivateRoute>}/>

  </Routes>
  </div>;
}

export default AllRoutes;
// /login - Login Page
// /dashboard - Dashboard - Private
// /restaurants/<id> - Restaurant Single Page - Private