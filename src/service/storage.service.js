const Imagekit = require('imagekit')


var imagekit = new Imagekit({
    publicKey:process.env.publicKey,
    privateKey:process.env.privateKey,
    urlEndpoint:process.env.urlEndpoint
})

// this  file it used to upload he file on imagekit
// hme nhi pta hoga ki vo kitna time lega is liye promise

function uploadFile(file){
    return new Promise((res,rej)=>{
        imagekit.upload({
          file:file.buffer,   // file hme buffer mai aa rha tha 
          fileName:'hello songs'    
        },(err,result)=>{
            if(err){
                rej(err)
            }
            else{
                res(result)
            }
        })
    })
}


module.exports = uploadFile
// is ke baad hm song.js mai js kr filedata  = await uploadfile(req.file)