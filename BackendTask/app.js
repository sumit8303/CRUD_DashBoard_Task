const express = require('express')
const dotenv = require('dotenv')
dotenv.config({ path: './.env'})
const cors = require('cors')
const db = require('./dataBaseConfig.js')
const customerRouter = require('./routes/customerRoute.js') 
const productRouter = require('./routes/productRoute.js')


let app = express()
app.use(express.json())
app.use(cors())
app.use(express.static('uploads'))
let hostname = '127.0.0.1'

let customerTableQuery = `
CREATE TABLE IF NOT EXISTS customer (
  id INT NOT NULL AUTO_INCREMENT,
  firstName VARCHAR(255) NULL,
  LastName VARCHAR(255) NULL,
  email VARCHAR(255) NULL,
  contactNumber VARCHAR(255) NULL,
  paymentBal VARCHAR(255) NULL,
  address VARCHAR(255) NULL,
  PRIMARY KEY (id));
`
db.query(customerTableQuery, (err, result) => {
    if (err) throw err
    else {
        console.log("Customer Table Is Created")
    }
})


let productTableQuery = `
CREATE TABLE  if not exists product (
  id INT NOT NULL AUTO_INCREMENT,
  brand VARCHAR(255) NULL,
  price VARCHAR(255) NULL,
  category VARCHAR(255) NULL,
  rating VARCHAR(255) NULL,
  image VARCHAR(255) NULL,
  PRIMARY KEY (id));
`
db.query(productTableQuery, (err, result)=>{
    if(err) throw err
    else{
        console.log("Product Table Is Created")
    }
})


let productCategoryTableQuery = `
CREATE TABLE  if not exists productCategory (
  id INT NOT NULL AUTO_INCREMENT,
  category_name VARCHAR(255) NULL,
  category_discription VARCHAR(255) NULL,
  PRIMARY KEY (id));
`
db.query(productCategoryTableQuery, (err, result)=>{
    if(err) throw err
    else{
        console.log("ProductCategory Table Is Created")
    }
})

app.use('/api', customerRouter)
app.use('/api', productRouter)

app.listen(process.env.PORT, hostname, () => {
    console.log(`server is running at http://${hostname}:${process.env.PORT}/api/`)
})