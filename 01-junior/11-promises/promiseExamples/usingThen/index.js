const db = require('./db');
const Student = db.model('student');

Student.sync()
  .then(() => {
    return Student.create({
      first_name: '',
      last_name: 'Park',
      grade: 2
    })
  })
  .then((student) => {
    console.log(student.dataValues)
  })
  .catch(err => console.log(err.message))

const init = async () => {
  await Student.sync();
  const student = await Student.create({
    first_name: 'Orion',
    last_name: 'Park',
    grade: 2
  })
  console.log(student);
}

// init()

/*
app.get('/students', async (req, res, next) => {
  Student.findAll()
    .then(students => res.send(students))
    .catch(err => console.log(err.message))
  //const students = await Student.findAll().catch(next)

})
*/
