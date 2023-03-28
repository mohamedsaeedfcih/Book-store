const queries= require('../db/queries')
const dbconnection =require('../db/coneection')
const util = require('../util/utility')


exports.getbooklist= async (req,res)=>{
    try {
        const booklistquery =queries.querylist.GET_BOOK_LIST_QUERY;
        const result = await dbconnection.dbQuery(booklistquery)

        return res.status(200).send(JSON.stringify(result.rows))
    } catch (err) {
        console.log('error : '+ err)
       return res.status(500).send({error : "failed to get book"})

    }
}

exports.getbookdetailslist= async (req,res)=>{
    try {
        const bookid = req.params.id
        const bookdetailsquery =queries.querylist.GET_BOOK_DETAILS_LIST_QUERY;
        const result = await dbconnection.dbQuery(bookdetailsquery,[bookid])

        return res.status(200).send(JSON.stringify(result.rows[0]))
    } catch (err) {
        console.log('error : '+ err)
       return res.status(500).send({error : "failed to get  book details"})

    }
}


exports.savebook = async(req,res)=>{
    try {
        const createdBy = 'admin'
        const createdOn = new Date();
       // req.body
       const title = req.body.title;
       const description = req.body.description;
       const publisher = req.body.publisher;
       const auther = req.body.auther;
       const pages = req.body.pages;
       const storecode = req.body.storecode;
       console.log("storeName : " + storeName   + " ----- address : " + address)
       if(!title || !publisher || !auther || !storecode){
           return res.status(500).send({ error: 'title and publisher and auther and Storecode are required , can not empty' })
       }
       

       value =[title ,description,publisher,auther,pages,storecode,createdBy ,createdOn]
       const savebookquery =queries.querylist.SAVE_BOOK_QUERY;
       await dbconnection.dbQuery(savebookquery,value);
        return res.status(201).send("Successfully Add New book ");
    }       
    catch (err) {
    console.log("Error : " + err);
    return res.status(500).send({error : 'Failed to add new book'});
    }
   
    
}