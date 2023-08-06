import mongoose from 'mongoose';
const { model, Schema } = mongoose;

const userSchema = new Schema({
	name: {
		type: String,
		required: true,
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

export default mongoose.models.UserDetail || model('UserDetail',userSchema);