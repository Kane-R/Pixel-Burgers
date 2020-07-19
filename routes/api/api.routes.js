const db = require('../../models');

module.exports = app => {

    //displays all burgers
    app.get("/api/burgers", (req,res) => {
        db.Burgers.findAll()
        .then( results => res.json(results) )
        .catch( error => res.status(500).console.log(error) )
    });

    app.post("/api/burgers", (req, res) => {
        const { name } = req.body

        db.Burgers.create({
            name:name
        })
        .then( results => res.status(200).json(results) )
        .catch( error => res.status(500).json(error).end() )
    });

 
    app.delete("/api/burgers/:id", (req, res) => {
        db.Burgers.destroy({
            where:{ id:req.params.id }
        })
        .then( response => res.json(response) )
        .catch( error => res.status(500).console.log(error) )
    });

    app.put("/api/burgers", (req, res) => {
        
        const { id } = req.body

        db.Burgers.update(
        { devoured:true },
        { where:{ id:id } }
        )
        .then( response => res.json(response) )
        .catch( error => res.json(error) )
    });
}