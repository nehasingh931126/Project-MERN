Some of the Packages
npm install --save express body-parser
npm install --save-dev nodemon

"test": "echo \"Error: no test specified\" && exit 1",
"start": "nodemon app.js"

const placeId= req.params.placeId; // this is the object whick gives all the param in key value pair
{place} :  this is {place: place}

More specifc routes should me on the top



--------------------------
Error handling Middleware:

if you provide any middleware function with 4 arguments that will be treated as the Special middleware function which
is special middlware function
That means this function will only be executed on request that have the error in it 
app.use((error, req, res, next)=> {
  if(res.headerSent) {
    return next(error);
  }
  res.status(error.code || 500)
  res.json({message: error.message || 'An Unknown error occured!'})
})

How to use this now 
One you can throw the error from the routes created or you can use the next method from the routes

if you are in asynchronous code you can pass it this way
if(!place){
    next(error);
}

if you have synchornous code
if(!place){
    const error 
}

Always keep in mind to return the next, for throw its not required it will already cancel the execution

Example
if(!place) {
        const error = new Error('Could not find a place for the provided Id.');
        error.code = 404
        throw(error)
    }

if (!place) {
  const error = new Error("Could not find a place for the provided UserId.");
  error.code = 404;
  return next(error);
}


----------------------------------------------------------------------------------------------------------------------
Good way to create the Model and keep the Separate class for Errors Refer to the model and http_erro.js
if (!place) {
      throw new HttpError(
        "Could not find a place for the provided UserId.",
        404
      );
    }
------------------------------------------------------------------------------------------------------------------------------
Architecture: 
MVC is good way of Keeping the code





