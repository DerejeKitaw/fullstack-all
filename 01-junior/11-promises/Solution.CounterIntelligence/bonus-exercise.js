'use strict'

const {read, write} = require('./secrets')

async function theSchedule() {

  // We need to find and infiltrate their upcoming meetings
  // Their schedule data is encoded in Base64 and splited
  // into multiple json Files. 
  // Each file contains part of the information and a reference
  // to the next file.
  //
  // We got intel on the first file: '/schedule/TmV4dCB'
  //
  // 1. `read` /schedule/TmV4dCB - it's a JSON file - parse it
  // 2. The parsed data contains a `data` and `next` keys
  // 3. Keep reading the next files by following the `next` key
  //    until there is no next file.
  // 4. Server is inconsistent. Retry in case of error 503
  //    (server unavailable)
  
  let next = "TmV4dCB"
  let data = ''
  while(next) {
    try {
      const contents = JSON.parse(await read(`/schedule/${next}`))
      next = contents.next
      data += contents.data  
    } catch (error) {
      if(error.status !== 503) {
        console.error(error)
        break
      }
    }
  }
  // 5. Concatenate all pieces of data and convert it to an utf-8 string
  const utf8encoded = (new Buffer(data, 'base64')).toString('utf8');
  // 6. Log the string with the schedule
  console.log(utf8encoded);
}


(async () => {
  try {
    console.log('--- 1. the schedule ---')
    await theSchedule()
  } catch (err) { console.error(err) }
})()
