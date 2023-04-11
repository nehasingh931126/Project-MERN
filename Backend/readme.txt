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
------------------------------------------------------------------------------------------------------------------------------
Errors: How to Handle Common Errors
Error COming from any routes
Errors to handle when No such route is present
-----------------------------------------------------------------------------------------------------------------------
express-validator: one of the packages that can be used for validating the request
-----------------------------------------------------------------------------------------------------------------------
422 Unprocessable Content
The HyperText Transfer Protocol (HTTP) 422 Unprocessable Content response status code indicates that the server 
understands the content type of the request entity, and the syntax of the request entity is correct, 
but it was unable to process the contained instructions
-----------------------------------------------------------------------------------------------------------------------
Geocoding Api: do check this
-----------------------------------------------------------------------------------------------------------------------
axios is a good package for HTTP Interactions
encodeURIComponent
-----------------------------------------------------------------------------------------------------------------------
When you are working with Async code better to use the next() then using the throw it will not work correclty

With next you need to add the return since if you donot add it will continue its execution further 
with throw it will stop the execution there itself so we donot need to add return with throw
-----------------------------------------------------------------------------------------------------------------------


Useful Resources & Links

Official Node.js Docs: https://nodejs.org/en/docs/

Official Express.js Docs: https://expressjs.com/

Further Node + Express Resources: https://academind.com/learn/node-js/

----------------------------------------------------------------------------------------------------------------------
Mongoose: Mongoose is an Object Data Modeling (ODM) library for MongoDB and Node.js. It manages relationships 
between data, provides schema validation, and is used to translate between objects in code and the representation of 
those objects in MongoDB.

 place: place.toObject({getters: true}): ?? What it does

the find method is available in both the mongodb and also in mongoose 
the find in mongodb returns the cursor Since there can be large chunk of data you can also implement the cursor 
method in the mongoose do check it: New thing to learn

----------------------------------------------------------------------------------------------------------------------
email: { type: String, email: true, required: true, unique: true },

Unique: is good for indexing
----------------------------------------------------------------------------------------------------------------------
Estabilisting relation between user and places
places: [{ type: mongoose.Types.ObjectId, required: true, ref: 'Place' }],

creator: {type: mongoose.Types.ObjectId, ref: 'User' ,required: true}

----------------------------------------------------------------------------------------------------------------------
You can add the transaction feature to your code 
start the session
start the transaction
add the operations required
commti the transaction

here is the Example

const session = await mongoose.startSession();
      session.startTransaction();
      await createdPlace.save({session:session});
      user.places.push(createPlace);
      await user.save({ session: session });
      await session.commitTransaction();

----------------------------------------------------------------------------------------------------------------------
Some notes about populate
Populate method will only be used once you have the relation between the collections otherwise it wont work
Here is one example:
place = await PlaceModel.findById(placeId).populate('creator');