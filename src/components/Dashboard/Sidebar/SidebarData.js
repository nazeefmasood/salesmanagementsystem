import {
  Home,
  PackagePlus,
  BaggageClaim,
  Settings2,
  Store,
  Users,
  User2,
  ListOrdered,
} from "lucide-react";
const SidebarData = [
  {
    id: 0,
    name: "Home",
    icon: <Home size={24} />,
    path: "/dashboard",
  },
  {
    id: 1,
    name: "View Inventory",
    icon: <ListOrdered size={24} />,
    path: "/dashboard/view",
  },
  {
    id: 2,
    name: "Add Items",
    icon: <PackagePlus size={24} />,
    path: "/dashboard/add",
  },
  {
    id: 3,
    name: "Setting",
    icon: <Settings2 size={24} />,
    path: "/dashboard/setting",
  },
  {
    id: 4,
    name: "Manage Users",
    icon: <Users size={24} />,
    path: "/dashboard/users",
  },
  {
    id: 5,
    name: "Sell",
    icon: <BaggageClaim size={24} />,
    path: "/dashboard/sell",
  },
  {
    id: 6,
    name: "Shops",
    icon: <Store size={24} />,
    path: "/dashboard/shops",
  },
  {
    id: 7,
    name: "Dealers",
    icon: <User2 size={24} />,
    path: "/dashboard/dealers",
  },
];

export default SidebarData;
