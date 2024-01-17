const TodoItem = (todo) => {
    console.log(todo);
    return ( 
        <>
        <li key={todo.id}>{todo.text}</li>
        </>
     );
}
 
export default TodoItem;