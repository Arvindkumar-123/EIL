

import mongoose from 'mongoose';
import { RbegsSchema ,PoliceSchema} from '../schemas/Rbe.js';

export const RbegsModel = mongoose.model('Rbegs', RbegsSchema);
export const PoliceModel = mongoose.model('Polices', PoliceSchema);





