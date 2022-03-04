const { findAll: findAllCultivar, findOne : findOneCultivar, insert : insertCultivar, destroy: destroyCultivar, update: updateCultivar } = require('./models/cultivar');
const { findAll: findAllVariety, findOne: findOneVariety, insert : insertVariety, destroy : destroyVariety, update: updateVariety } = require('./models/variety');

// findAllCultivar().then(console.table);
// findAllVariety().then(console.table);

// findOneVariety(7).then(console.table);
// findOneCultivar(7).then(console.table);

// insertCultivar({'scientific_name' : 'test', 'vernacular_name': 'test', 'family': 'orange'})
// insertVariety({'variety_name': 'test', 'bitterness': 5, 'juiciness': 2, 'specimen_id': 17});

// destroyVariety(32);

// destroyCultivar(16);

// updateCultivar(17, {'scientific_name': 'michel', 'vernacular_name': 'test2', 'family': 'orange'});
// updateVariety(34, {'variety_name': 'test2', 'bitterness': 3, 'juiciness': 5});