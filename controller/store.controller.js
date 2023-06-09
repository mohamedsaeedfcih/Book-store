const queries= require('../db/queries')
const dbconnection =require('../db/coneection')
const util = require('../util/utility')


exports.getstorelist= async (req,res)=>{
    try {
        const storelistquery =queries.queryList.GET_STORE_LIST_QUERY;
        const result = await dbconnection.dbQuery(storelistquery)

        return res.status(200).send(JSON.stringify(result.rows))
    } catch (err) {
        console.log('error : '+ err)
       return res.status(500).send({error : "failed to list store"})

    }
}

exports.saveStore = async(req,res)=>{
    try {
        const createdBy = 'admin'
        const createdOn = new Date();
       // req.body
       const storeName = req.body.storeName;
       const address = req.body.address;
       console.log("storeName : " + storeName   + " ----- address : " + address)
       if(!storeName || !address){
           return res.status(500).send({ error: 'store name and address are required , can not empty' })
       }
       let storeCode = util.generateStoreCode();

       values =[storeName , storeCode , address , createdBy , createdOn];
       const savestorequery =queries.queryList.SAVE_STORE_QUERY;
       await dbconnection.dbQuery(savestorequery,values);
        return res.status(201).send("Successfully store created ");
    }       
    catch (err) {
    console.log("Error : " + err);
    return res.status(500).send({error : 'Failed to save store'});
    }
   
    
}
