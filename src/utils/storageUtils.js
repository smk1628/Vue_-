export const setTodos = (valus)=>{
    localStorage.setItem('todos_key',JSON.stringify(valus))
}
export const getTodos = ()=>JSON.parse(localStorage.getItem('todos_key') || '[]')