const queries= require('../db/queries')
const dbconnection =require('../db/coneection')
const util = require('../util/utility')


exports.getBookList= async (req,res)=>{
    try {
        const bookListQuery = queries.queryList.GET_BOOK_LIST_QUERY;
        const result = await dbconnection.dbQuery(bookListQuery)

        return res.status(200).send(JSON.stringify(result.rows))
    } catch (err) {
        console.log('error : '+ err)
       return res.status(500).send({error : "failed to get book"})

    }
}

exports.getBookDetails= async (req,res)=>{
    try {
        const bookId = req.params.bookId;
        const bookDetailsQuery = queries.queryList.GET_BOOK_DETAILS_QUERY;
        const result = await dbconnection.dbQuery(bookDetailsQuery, [bookId] )

        return res.status(200).send(JSON.stringify(result.rows[0]))
    } catch (err) {
        console.log('error : '+ err)
       return res.status(500).send({error : "failed to get  book details"})

    }
}


exports.savebook = async(req,res)=>{
    try {
         
        var createdBy = "admin";
        var createdOn = new Date();
        // req.body
        var title = req.body.title;
        var description = req.body.description;
        var author = req.body.author;
        var publisher = req.body.publisher;
        var pages = req.body.pages;
        var storeCode = req.body.storeCode;
       //console.log("storeName : " + storeName   + " ----- address : " + address)
       if(!title || !author || !publisher || !storeCode){
           return res.status(500).send({ error: 'title and publisher and auther and Storecode are required , can not empty' })
       }
       

       values =[title , description , author , publisher , pages , storeCode,  createdBy , createdOn];
       const savebookquery =queries.queryList.SAVE_BOOK_QUERY;
       await dbconnection.dbQuery(savebookquery,values);
        return res.status(201).send("Successfully Add New book ");
    }       
    catch (err) {
    console.log("Error : " + err);
    return res.status(500).send({error : 'Failed to add new book'});
    }
   
    
}
exports.updatebook = async(req,res)=>{
    try {
         
        var createdBy = "admin";
        var createdOn = new Date();
        // req.body
        var bookId= req.body.bookId;
        var title = req.body.title;
        var description = req.body.description;
        var author = req.body.author;
        var publisher = req.body.publisher;
        var pages = req.body.pages;
        var storeCode = req.body.storeCode;
       
       if(!bookId || !title || !author || !publisher || !storeCode){
           return res.status(500).send({ error: 'bookId and title and publisher and auther and Storecode are required , can not empty' })
       }
       

       values =[title , description , author , publisher , pages , storeCode,  createdBy , createdOn ,bookId];
       const updatebookquery =queries.queryList.UPDATE_BOOK_QUERY;
       await dbconnection.dbQuery(updatebookquery,values);
        return res.status(201).send("Successfully update book ");
    }       
    catch (err) {
    console.log("Error : " + err);
    return res.status(500).send({error : 'Failed to update book'});
    }
   
    
}

exports.deleteBook = async (req , res) => {
    var bookId = req.params.bookId;

    try {
      // validate not empty
      
      if(!bookId){
        return res.status(500).send({ error: 'can not delete empty bookId' })
        }

        var deleteBookQuery = queries.queryList.DELETE_BOOK_QUERY;
        await dbconnection.dbQuery(deleteBookQuery , [bookId]);

        return res.status(200).send("Successfully book deleted ");
    } catch (err) {
        console.log("Error : " + err);
        return res.status(500).send({error : 'Failed to delete book with id : '+ bookId});
    }

} 