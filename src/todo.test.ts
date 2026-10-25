import { test } from "node:test";
import assert from "node:assert/strict";
import { addTodo, toggleTodo, formatTodos } from "./todo.ts";

test("addTodo appends an undone item", () => {
  const todos = addTodo([], "buy milk");
  assert.deepEqual(todos, [{ id: 1, title: "buy milk", done: false }]);
});

test("toggleTodo flips done", () => {
  const todos = toggleTodo(addTodo([], "a"), 1);
  assert.equal(todos[0].done, true);
});

test("formatTodos renders checkboxes", () => {
  const todos = toggleTodo(addTodo(addTodo([], "a"), "b"), 2);
  assert.equal(formatTodos(todos), "[ ] 1. a\n[x] 2. b");
});
