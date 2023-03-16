const generateRandomColor = () => {
    const existingBudgetLength = fetchData("budgets")?.length ?? 0;
    return `${existingBudgetLength * 34} 65% 50%`
}

//Local storage 
export const fetchData = (key) => {
    return JSON.parse(localStorage.getItem(key))
}

//Createe budget
export const createBudget = ({
    name, amount
}) =>  {
    const newItem = {
       Id: crypto.randomUUID(),
       name: name,
       createdAt: Date.now(),
       amount: +amount, 
       color: generateRandomColor()
    }
    const existingBudgets = fetchData("budgets") ?? [];
    return localStorage.setItem("budgets",
    JSON.stringify([...existingBudgets, newItem]))
}

//delete item
export const deleteItem = ({key}) => {
    return localStorage.removeItem(key)
}