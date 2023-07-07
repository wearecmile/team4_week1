class TodoList {
  constructor() {
    if (TodoList.instance == null) {
      this.todos = JSON.parse(localStorage.getItem("todo-list")) ?? [];

      TodoList.instance = this;
    }
    return TodoList.instance;
  }
  addTodo = (todo) => {
    this.todos.unshift(todo);
    this.updateLocalStorage(this.todos);
  };
  updateTodo = (todo) => {
    this.todos = this.todos.map((item) => {
      return item.id === todo.id ? todo : item;
    });
    this.updateLocalStorage(this.todos);
  };
  removeTodo = (todo) => {
    this.todos = this.todos.filter((item) => {
      return item.id !== todo.id;
    });
    this.updateLocalStorage(this.todos);
  };
  updateLocalStorage = (todoList) => {
    localStorage.setItem("todo-list", JSON.stringify(todoList));
  };
  markAsCompleted = (todo) => {
    this.todos = this.todos.map((item) => {
      return item.id === todo.id ? todo : item;
    });
    const incomplete = this.todos.filter((item) => !item.complete);
    const complete = this.todos.filter((item) => item.complete);
    this.todos = [...incomplete, ...complete];
    this.updateLocalStorage(this.todos);
  };
}

const Todos = new TodoList();

export default Todos;
