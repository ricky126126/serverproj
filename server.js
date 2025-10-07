const app = require('./src/app')



app.get('/',(req,res)=>{
    res.send('this is a home page')
})


app.listen(3000,()=>{
    console.log('server is running on port 3000')
})