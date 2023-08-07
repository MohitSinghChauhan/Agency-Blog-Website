import mongoose from 'mongoose';

const connect = async () => {
	try {
		await mongoose.connect(process.env.MONGO_CONNECTION_STRING);
	} catch (err) {
		throw new Error('MongoDB Connection Failed');
	}
};

export default connect;
