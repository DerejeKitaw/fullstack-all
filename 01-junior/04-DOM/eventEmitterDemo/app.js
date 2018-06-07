const div = document.getElementById('div')
const button1 = document.getElementById('button1')

button1.addEventListener('click', function(evt) {
  console.log('listening on button1');
  //console.log('event', evt);
  console.log('this', this);
  console.log('target', evt.target)
})

div.addEventListener('click', (evt) => {
  console.log('listening on div');
  //console.log('event', evt);
  console.log('this', this);
  console.log('target', evt.target)

  //using object destructuring to grab event.target.id
  //we will review this soon :) Until then, look it up!
  const { id } = event.target;
  let { style } = document.body;

  //now we can do fun things with all the buttons!
  if (id === 'button1') { style.backgroundColor = 'blue'}
  else if (id === 'button2') { style.backgroundColor = 'purple'}
  else if (id === 'button3') { style.backgroundColor = 'orange'}
})
