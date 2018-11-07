import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const AxaSchema = new Schema(
    {
        numContrat: {type: String, required: true, unique: true}
    });

module.exports = mongoose.model('Kitten', AxaSchema);