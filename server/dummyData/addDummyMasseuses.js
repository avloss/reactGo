import Instructor from '../db/models/masseuses';
const instructors = require('./masseuses.json');

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
    .then(v=>console.log("POPULATED WITH SAMPLE MASSAGE PROVIDERS"))
}

export default addDummyInstructors

// import {connect} from '../db';
// connect()
//addDummyInstructors()
