import Instructor from '../db/models/instructors';
const instructors = require('./instructors.json');

function addDummyInstructors() {
  Instructor
    .find({})
    .exec()
    .then(v=>{if(v.length>0) return Promise.reject()})
    .then(()=>
      Promise.all(
        instructors
          .map(v=>new Instructor(v))
          .map(v=>v.save())
      )
    )
    .then(v=>console.log("POPULATED WITH SAMPLE INSTRUCTORS"))
}

export default addDummyInstructors

// import {connect} from '../db';
// connect()
//addDummyInstructors()
