import mongoose from 'mongoose';

const collectionName = 'Pets';

const petSchema = new mongoose.Schema({
  name: { type: String, required: true },
  specie: { type: String, required: true }, 
  birthDate: { type: Date, required: true }, 
  owner: { type: mongoose.Schema.Types.ObjectId, ref: 'Users', default: null },
});

const PetsModel = mongoose.model(collectionName, petSchema);

export default PetsModel;
