/**
 * Schema Definitions
 *
 */
import mongoose from 'mongoose';
import Float from 'mongoose-float';

const FloatType = Float.loadType(mongoose,20)

var SchemaTypes = mongoose.Schema.Types;


const MasseuseSchema = new mongoose.Schema({
  name: String,
  stars: Number,
  lat: {type:FloatType},
  lon: {type:FloatType},
  picture: String,
  number: String,
  style: []

});

// Compiles the schema into a model, opening (or creating, if
//	nonexistent) the 'Topic' collection in the MongoDB database
export default mongoose.model('Masseuse', MasseuseSchema);
