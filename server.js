const express = require('express')
console.log(express)
const app = express()
const PORT=process.env.PORT || 3000

app.get('/',(req,res)=>{

    res.send('Hello World')
}


)


app.listen(PORT,()=>{

console.log(`server is running out of PORT ${PORT}`)

})