import jwt from 'jsonwebtoken';

const validateToken = (req, res, next) => {
 const authorizationHeader = req.headers.authorization;

 console.log(authorizationHeader);
 let result;
 if (authorizationHeader) {
  const token = req.headers.authorization.split(' ')[1]; // Bearer <token>
  const options = {
   expiresIn: '2d',
  };
  try {
   result = jwt.verify(
    token,
    /*process.env.JWT_SECRET*/ 'illamapalooza',
    options
   );

   // Let's pass back the decoded token to the request object
   req.decoded = result;
   // We call next to pass execution to the subsequent middleware
   next();
  } catch (err) {
   // Throw an error just in case anything goes wrong with verification
   throw new Error(err);
  }
 } else {
  result = {
   error: `Authentication error. Token required.`,
   status: 401,
  };
  res.status(401).send(result);
 }
};

export default validateToken;
