
// export const ErrorHandling = (err, req, res, next) => {
//     return res.status(err.status || 500).json({
//       error: {
//         message: err.message? err.message : err.mymsg,
//         randomInfo: "Some additinal information",
//         stack: err.stack
//       }
//     });
//   }



  

export const ErrorHandling = (err, req, res, next) => {
    
    let errorMessage = err.message? err.message : err.mymsg;

  if (err.name === 'ValidationError' && err.errors) {
    errorMessage = Object.values(err.errors)[0].message;
  }

  if(err.name === "MongoServerError" && err.code === 11000){
    const fieldName = Object.keys(err.keyValue)[0];
    const duplicateValue = err.keyValue[fieldName];
    errorMessage = `Duplicate values error in field ${fieldName}: ${duplicateValue}`;
  }

    return res.status(err.status || 500).json({
      error: {
        name: err.name,
        code: err.code,
        message: errorMessage,
        randomInfo: "Some additinal information",
        stack: err.stack
      }
    });
  }