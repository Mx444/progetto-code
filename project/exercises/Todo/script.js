class AppTodoList {
  todos = [];

  addTodo(description, idTodo) {
    this.todos = [
      ...this.todos,
      { description: description, status: false, idTodo: idTodo },
    ];
  }
  removeTodo(idTodo) {
    function onFilter(todo) {
      if (idTodo !== todo.idTodo) return true;
      return false;
    }
    const newTodos = this.todos.filter(onFilter);
    this.todos = newTodos;
  }
  toggleTodoStatus(idTodo) {
    function toggle(todo) {
      if (idTodo === todo.idTodo) {
        return { ...todo, status: !todo.status };
      } else {
        return todo;
      }
    }
    const newToggle = this.todos.map(toggle);
    this.todos = newToggle;
  }
  updateTodo(idTodo, newDescription) {
    function update(todo) {
      if (idTodo === todo.idTodo) {
        return { ...todo, description: newDescription };
      } else {
        return todo;
      }
    }
    const newUpdate = this.todos.map(update);
    this.todos = newUpdate;
  }
}

const todo = new AppTodoList();
todo.addTodo("Spesa", 1);
todo.addTodo("Dormire", 2);
todo.addTodo("Cucinare", 3);
