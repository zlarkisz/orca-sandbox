export type Todo = {
  id: number;
  title: string;
  done: boolean;
};

export function addTodo(todos: Todo[], title: string): Todo[] {
  const id = todos.length + 1;
  return [...todos, { id, title, done: false }];
}

export function toggleTodo(todos: Todo[], id: number): Todo[] {
  return todos.map((t) => (t.id === id ? { ...t, done: !t.done } : t));
}

export function formatTodos(todos: Todo[]): string {
  return todos.map((t) => `${t.done ? "[x]" : "[ ]"} ${t.id}. ${t.title}`).join("\n");
}
