const {model} = require('mongoose');
const {RbegsSchema} = require('../schemas/Rbe');
const RbegsModel = new model('Rbegs', RbegsSchema);
module.exports = {RbegsModel};

