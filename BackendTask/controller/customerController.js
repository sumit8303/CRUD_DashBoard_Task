const db  = require('../dataBaseConfig.js')

exports.saveCustomer = (req, res)=>{
    let firstName = req.body.firstName
    let lastName = req.body.lastName
    let email = req.body.email
    let contactNumber = req.body.contactNumber
    let paymentBal = req.body.paymentBal
    let address = req.body.address
    let value = [[firstName, lastName, email, contactNumber, paymentBal, address]]

    let sql = 'insert into customer(firstName, lastName, email, contactNumber, paymentBal, address) values ?'

    db.query(sql, [value], (err, result)=>{
        if(err) throw err
        else{
            res.send("Customer Data Saved")
        }
    })
    
}

exports.getCustomer = (req, res)=>{
    let sql = 'select * from customer'
    db.query(sql, (err, result)=>{
        if(err) throw err
        else{
            res.json(result)
        }
    })
}



exports.deleteCustomer = (req, res)=>{
    let id = req.params.id
    let sql = "delete from customer where id = ?"
    db.query(sql, [id], (err,result)=>{
        if(err) throw err
        else{
            res.send("Customer Data Deleted")
        }
    })
}

exports.getCustomerById = (req, res)=>{
    let id = req.params.id
    let sql = 'select * from customer where id = ?'
    db.query(sql, [id], (err, result)=>{
        if(err) throw err
        else{
            res.json(result)
        }
    })
}


exports.updateCustomer=(req,res)=>{
    let id = req.params.id
    let newData = req.body
    let sql='update customer set ? where id=?'
    db.query(sql,[newData,id],(err,result)=>{
        if(err) throw err
        else{
            res.send("Customer Data Updated")
        }
    })
}