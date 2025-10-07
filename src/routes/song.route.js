const express = require('express')

const router = express.Router()   // // yeh ek function hai aur yeh ek empty box bnata hain , Is box mein tum routes (web addresses) rakh sakte ho   /// create a router to group song routes   //Organize related routes in one file (cleaner project structure).


//  yeh api hai songs ko store aur create krne ke liye , yeh api jo app.js ka  express ko nhi pta chlta ki yeh existt  kr rha hai ki nhi kr rha is liye hmen is ko export kiya aur step 1 and 2 in app.js
router.post('/songs',(req,res)=>{

})


module.exports = router