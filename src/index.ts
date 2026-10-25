import { addTodo, toggleTodo, formatTodos } from "./todo.ts";

const owner = process.env.TODO_OWNER ?? "anonymous";

let todos = addTodo([], "learn Orca worktrees");
todos = addTodo(todos, "run two agents in parallel");
todos = toggleTodo(todos, 1);

console.log(`Todos of ${owner}:`);
console.log(formatTodos(todos));
