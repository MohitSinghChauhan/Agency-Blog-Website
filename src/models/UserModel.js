import mongoose from 'mongoose';
const { model, Schema } = mongoose;

const userSchema = new Schema({
	Name: {
		type: String,
		required: true,
	},
	username: {
		type: String,
		required: true,
		unique: true,
	},
	email: {
		type: String,
		required: true,
	},
	password: {
		type: String,
		required: true,
	},
}, { timestamps: true });

const userModel = model('User',userSchema);
export default userModel;