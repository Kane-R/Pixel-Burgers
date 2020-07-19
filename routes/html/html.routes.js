const db = require('../../models');
const sort = require('./../../lib/sort-results');

module.exports = app => {

    //serve index to the root route
    app.get('/', (req,res) => {
        db.Burgers.findAll()
        .then(results =>{
            console.log(results);
            //sort our results
            burgers = sort(results);

            console.log(burgers);
            results = results.map(Burger => Burger.dataValues );
            res.render('index',burgers);
            res.status(200);
        })
        .catch(error => {
            console.log(error);
            res.status(500)
        })
    });

}
