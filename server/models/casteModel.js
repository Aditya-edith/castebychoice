import mongoose from 'mongoose';

const { Schema } = mongoose;
const casteSchema = new Schema({
  Brahmin: { type: Number, required: true },
  Kshatriya: { type: Number, required: true },
  Shudra: { type: Number, required: true },
  Vaishya: { type: Number, required: true },
});

const Caste = mongoose.model('Caste', casteSchema);

export default Caste;
