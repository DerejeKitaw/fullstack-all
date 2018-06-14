module.exports = (todos) => {
  return `
    <h1>My Todos!</h1>
    <ul>
      ${
        todos.map(todo => `<li>${todo.name}</li>`).join('')
      }
    </ul>
  `
}
