const todos = [
  {
    id: 1,
    name: 'Learn about databases',
    date: new Date(2018, 5, 12)
  },
  {
    id: 2,
    name: 'Finish Express Checkpoint',
    date: new Date(2018, 5, 16)
  }
]

module.exports = {
  list: () => {
    return todos;
  },
  get: (id) => {
    return todos.find(todo => todo.id === +id)
  },
  add: (todo) => {
    todos.push(todo);
    return todos;
  }
}
