//rrd imports
import { redirect } from "react-router-dom";

//library
import { toast } from "react-toastify";

//helpers
import { deleteItem } from "../helpers";

export async function logoutAction(){
    //delete the user
    deleteItem({
        key: "userName"
    })
    toast.success("You've deleted your account")//Can add a promise here for database response check
    //return dedirect
    return redirect("/")
};

