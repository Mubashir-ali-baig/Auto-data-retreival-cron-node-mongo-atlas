exports.findDocument = (db, collection)=>{
    console.log("INSIDE FIND DOCUMENT")
    const coll = db.collection(collection);
    return coll.find({}).toArray();
}