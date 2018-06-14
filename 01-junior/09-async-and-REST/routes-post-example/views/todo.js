module.exports = (todo) => {
  return `
    <h1>${todo.name}</h1>
    <p>Due: ${todo.date.toString()}</p>
  `
}
