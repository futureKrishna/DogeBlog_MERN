const mongoose=require('mongoose')

const db="mongodb://localhost:27017/dogeblogDB"

mongoose.connect(db).then(()=>{
  console.log('connection successfull')
}).catch((err)=>console.log(`not connected`))