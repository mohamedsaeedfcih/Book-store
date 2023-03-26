const queries= require('../db/queries')
const dbconnection =require('../db/coneection')
const util = require('../util/utility')


exports.getstorelist= async (req,res)=>{
    try {
        const storelistquery =queries.querylist.GET_STORE_LIST_QUERY;
        const result = await dbconnection.dbQuery(storelistquery)

        return res.status(200).send(JSON.stringify(result))
    } catch (err) {
        console.log('error : '+ err)
       return res.status(500).send({error : "failed to list store"})

    }
}

exports.saveStore = async(req,res)=>{
    try {
        var createdBy = 'admin'
        var createdOn = new Date();
       // req.body
       const storeName = req.body.storeName;
       const address = req.body.address;
       console.log("storeName : " + storeName   + " ----- address : " + address)
       if(!storeName || !address){
           return res.status(500).send({ error: 'store name and address are required , can not empty' })
       }
       let storecode = util.generateStoreCode();

       value =[storeName ,storecode,address,createdBy ,createdOn]
       const savestorequery =queries.querylist.SAVE_STORE_QUERY;
       await dbconnection.dbconnection.dbQuery(savestorequery);
        return res.status(201).send("Successfully store created ");
    }       
    catch (err) {
    console.log("Error : " + err);
    return res.status(500).send({error : 'Failed to save store'});
    }
   
    
}
