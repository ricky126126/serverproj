const express = require('express')
const multer = require('multer')
const uploadFile = require('../service/storage.service')

const router = express.Router()   // // yeh ek function hai aur yeh ek empty box bnata hain , Is box mein tum routes (web addresses) rakh sakte ho   /// create a router to group song routes   //Organize related routes in one file (cleaner project structure).6


const upload = multer({storage:multer.memoryStorage()})  //// jo form data hai os ko readkrne ke liye use krte hai

//  yeh api hai songs ko store aur create krne ke liye , yeh api jo app.js ka  express ko nhi pta chlta ki yeh existt  kr rha hai ki nhi kr rha is liye hmen is ko export kiya aur step 1 and 2 in app.js
router.post('/songs',upload.single('audio'), async(req,res)=>{

    console.log(req.body)
    console.log(req.file)

    const fileData = await uploadFile(req.file)   // this uploads the received file and saves the upload result into fileData.

    console.log(fileData)

    res.json({
        message:'song created sucessfully',
        song:req.body   // per tha req.body hai vo client server ko data bhejta hai and fir retrun mai mujhe yeh server se mi
    })

})


module.exports = router