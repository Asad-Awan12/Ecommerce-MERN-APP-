const express = require('express')
const mongoose = require('mongoose');
const cors = require('cors')
const app = express()

const port = 3000
// Parse Options
app.use(express.json())
app.use(cors({
  origin:'http://localhost:5173',
  credentials:true
}))

// mongodb+srv://asadsikindar:KzMhwo44xHG74Sdc@cluster0.l1kni.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
// getting-started.js
// mongodb+srv://asadsikindar:KzMhwo44xHG74Sdc@cluster0.l1kni.mongodb.net/Ecommerce?retryWrites=true&w=majority&appName=Cluster0

async function main() {
  await mongoose.connect(`mongodb+srv://asadsikindar:KzMhwo44xHG74Sdc@cluster0.l1kni.mongodb.net/Ecommerce?retryWrites=true&w=majority&appName=Cluster0`);
  app.get('/', (req, res) => {
    res.send('Home Route!')
  })
}
main().then(()=>console.log('MognooDb Connected Successfully!!')
).catch(err => console.log(err));

// Routes
const UserRoutes = require('./Routes/User.router')
const ProductRoutes = require('./Routes/Product.router')
app.use('/api/users',UserRoutes)
app.use('/api/products',ProductRoutes)


  
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})