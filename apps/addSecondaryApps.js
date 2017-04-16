import { blogRouter } from '../apps/blog/router'
import { instructorFormRouter } from '../apps/instructorsForm/server'
import { INSTRUCTOR_FORM_ROUTE_PREFIX } from '../apps/instructorsForm/server'


export default (app)=>{
    //adding blog placeholder
    app.use('/blog', blogRouter);

    //adding instructorForm placeholder
    app.use(INSTRUCTOR_FORM_ROUTE_PREFIX, instructorFormRouter);
}