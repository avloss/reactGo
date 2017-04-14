/**
 * Created by avloss on 09/04/2017.
 */


export function renderBlog(app){
  app.get('/blog', (req,res)=>res.send("placeholder for the blog!"))
  return app
}