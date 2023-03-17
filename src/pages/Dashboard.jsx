//rrd imports
import { useLoaderData } from "react-router-dom"

//Library
import { toast } from "react-toastify"


//componenets
import Intro from "../components/intro"
import AddBudgetForm from "../components/AddBudgetForm"
import AddExpenseForm from "../components/AddExpenseForm"


//Helper Functions
import { createBudget, fetchData } from "../helpers"

//Loader
export function dashboardLoader(){
    const userName = fetchData("userName")
    const budgets = fetchData("budgets")
    return {userName, budgets }
}

//action
export async function dashboardAction({request}){
    const data = await request.formData();
    const {_action, ...values}=Object.fromEntries(data)
    if (_action === "newUser") {
        try{
            localStorage.setItem("userName", JSON.stringify(values.userName))
            return toast.success(`Welcome, ${values.userName}`)
        } catch (e) {
            throw new Error("There was a problem creating your account.")
        }   
    }
    
    if (_action === "createBudget") {
        try{
            createBudget({
              name: values.newBudget,
              amount: values.newBudgetAmount
            })
            return toast.success(`Budget created!`)
        } catch (e) {
            throw new Error("There was a problem creating your budget.")
        }   
    }
}

const Dashboard = () => {
    const {userName,budgets} = useLoaderData()
    return (
        <>
            {userName ? 
            ( <div className="dashboard">
                <h1>Welcome back, <span className="accent">
                    {userName}</span></h1>
                    <div className="gird-sm">
                        {/* {{budgets ? () : ()}} */}
                       { 
                       budgets && budgets.length > 0 ?
                       (
                            <div className="grid-lg">
                            <div className="flex-lg">
                                <AddBudgetForm />
                                <AddExpenseForm budgets={budgets} />
                            </div>
                        </div>
                       ) : (
                        <div className="grid-sm">
                            <p>Persoanl budgeting is the secret to financial freedom.</p>
                            <p>Create a budget to get started!</p>
                            <AddBudgetForm />
                        </div>
                       )
                        }
                    </div>
            </div> 
            ) : <Intro /> }
        </>
    )
}

export default Dashboard