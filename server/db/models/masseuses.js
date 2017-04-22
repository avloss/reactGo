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
  lon: {type:FloatType},
  lat: {type:FloatType},
  type: Number
});

// Compiles the schema into a model, opening (or creating, if
//	nonexistent) the 'Topic' collection in the MongoDB database
export default mongoose.model('Masseuse', MasseuseSchema);
