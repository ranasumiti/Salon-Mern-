import { Outlet } from "react-router-dom";
import AdminFooter from "./AdminFooter";
import AdminHeader from "./AdminHeader";

export default function AdminLayout(){


    return(<>
    <AdminHeader></AdminHeader>
    <Outlet></Outlet>
    <AdminFooter></AdminFooter>
    
    
    
    </>)
}