/* CLIENT SIDE JS */

console.log('my JS is running');

const init = async () => {
  const response = await fetch('/bunnies');
  const bunniesJSON = await response.json();
  const list = document.createElement('div');
  const content = document.getElementById('content');

  bunniesJSON.forEach(bun => {
    const bunElement = document.createElement('div');
    bunElement.innerHTML = `
      <h4>${bun.name}</h4>
      <img src=${bun.image} />
    `;
    list.appendChild(bunElement);
  });

  content.appendChild(list);

}

const button = document.getElementById('bunny-button');
button.addEventListener('click', init);
