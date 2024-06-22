const db  = require('../dataBaseConfig.js')

exports.saveProduct = (req, res)=>{
    let brand = req.body.brand
    let price = req.body.price
    let category = req.body.category
    let rating = req.body.rating
    let image = req.file.filename
    let value = [[brand, price, category, rating, image]]

    let sql = 'insert into product(brand, price, category, rating, image) values ?'

    db.query(sql, [value], (err, result)=>{
        if(err) throw err
        else{
            res.send("product saved")
        }
    })
    
}

exports.getProduct = (req, res)=>{
    let sql = 'select * from product'
    db.query(sql, (err, result)=>{
        if(err) throw err
        else{
            res.json(result)
        }
    })
}



exports.deleteProduct = (req, res)=>{
    let id = req.params.id
    let sql = "delete from product where id = ?"
    db.query(sql, [id], (err,result)=>{
        if(err) throw err
        else{
            res.send("data deleted")
        }
    })
}

exports.getProductById = (req, res)=>{
    let id = req.params.id
    let sql = 'select * from product where id = ?'
    db.query(sql, [id], (err, result)=>{
        if(err) throw err
        else{
            res.json(result)
        }
    })
}


exports.updateProduct=(req,res)=>{
    let id=req.params.id
    let newData=req.body
    let sql='update product set ? where id=?'
    db.query(sql,[newData,id],(err,result)=>{
        if(err) throw err
        else{
            res.send("data updated")
        }
    })
}

exports.addCategory = (req, res)=>{
    let category_name = req.body.category_name
    let category_discription = req.body.category_discription
    let value = [[category_name,category_discription]]

    let sql = "insert into productCategory(category_name,category_discription) values ?"
    db.query(sql, [value], (err, result)=>{
        if(err) throw err
        else{
            res.send('category created')
        }
    })
}

exports.getCategory = (req, res)=>{
    let sql = "select * from productCategory"
    db.query(sql, (err, result)=>{
        if(err) throw err
        else{
            res.json(result)
        }
    })
}