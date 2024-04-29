import mongoose from "mongoose";


const connect = async () => {
    if (mongoose.connections[0].readyState) return;

    try {
        await mongoose.connect(process.env.MONGOURL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            // useCreateIndex: true,
            // useFindAndModify: false,
        })

        console.log('Connection successfully established');

    } catch (error) {

        throw new Error('Error connecting to Mongo');

    }
}

export default connect;