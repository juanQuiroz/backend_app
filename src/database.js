import mongoose from 'mongoose'

const URI ="mongodb://vekjs:p131471483@cluster0-shard-00-00.yzzb4.mongodb.net:27017,cluster0-shard-00-01.yzzb4.mongodb.net:27017,cluster0-shard-00-02.yzzb4.mongodb.net:27017/db_ayuntamiento?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority"
mongoose.connect(URI, {

    useNewUrlParser: true, 
    
    useUnifiedTopology: true 
    
    }, err => {
    if(err) throw err;
    console.log('Connected to MongoDB')
    });