module.exports = () => {
  return `
    <form method="POST" action="/todos">
      <label for="name">Name: </label>
      <input name="name" />
      <label for="date">Due: </label>
      <input name="date" type="date" />
      <button type="submit">Create Todo</button>
    </form>
  `
}
