import "./App.css";
import { Route, Routes } from "react-router-dom";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import Error from "./components/Error/Error";
import Dashboard from "./components/Dashboard/Dashboard";
import Home from "./components/Dashboard/Sidebar/Tabs/Home/Home";
import Setting from "./components/Dashboard/Sidebar/Tabs/Setting/Setting";
import Users from "./components/Dashboard/Sidebar/Tabs/Users/Users";
import Inventory from "./components/Dashboard/Sidebar/Tabs/Inventory/Inventory";
import AddItem from "./components/Dashboard/Sidebar/Tabs/AddItem/AddItem";
import Dealers from "./components/Dashboard/Sidebar/Tabs/Dealers/Dealers";

function App() {
  return (
    <div style={{ maxWidth: "1920px", margin: "0 auto" }}>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        <Route path="/dashboard/" element={<Dashboard />}>
          <Route index element={<Home />} />
          <Route path="setting" element={<Setting />} />
          <Route path="users" element={<Users />} />
          <Route path="add" element={<AddItem />} />
          <Route path="view" element={<Inventory />} />
          <Route path="dealers" element={<Dealers />} />
        </Route>
        <Route path="/*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
