

import mongoose from 'mongoose';
import { RbegsSchema ,PoliceSchema,ScienceSchema} from '../schemas/Rbe.js';

export const RbegsModel = mongoose.model('Rbegs', RbegsSchema);
export const PoliceModel = mongoose.model('Polices', PoliceSchema);
export const ScienceModel = mongoose.model('Sciencs',ScienceSchema);





