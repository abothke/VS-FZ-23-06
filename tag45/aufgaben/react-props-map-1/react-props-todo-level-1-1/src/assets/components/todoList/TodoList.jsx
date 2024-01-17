import TodoItem from "../todoItem/TodoItem";

const TodoList = ({list}) => {
    return ( 
        <>
        <div key="1">
        <h1>My Todos</h1>
        </div>
        {list.map ((item) =>{
            return(
                <>
                <TodoItem
                text={item.text}
                id={item.id}
                />
                </>
            )
        })}
        </>
     );
}
 
export default TodoList;