/**
 * 
 * @param {array} results An array of database JSON objects from a db query. 
 * @returns {object} an object with sorted results under the keys 'devoured' and 'notDevoured'
 */
const sort = results => {
    //first we split the burger name up into an array of words that make up the name.
        //? 'Fried chicken burger' => ['Fried','chicken','burger'];
    results = results.map(burger => {
        return {
            id:burger.id,
            name: burger.name.split(' ').map(word => {
                return { word:word }
            }),
            devoured:burger.devoured
        }
    });
    
    //Set up a placeholder 
    const burgers = {
        devoured:null,
        notDevoured:null
    }

    //then we filter the burgers that have been devoured
    burgers.devoured = results.filter(burger => {
        if(burger.devoured){
            return burger
        }
    });

    //then we filter the burgers that haven't been devoured
    burgers.notDevoured = results.filter(burger => {
        if(!burger.devoured){
            return burger
        }
    });

    return burgers;

}


module.exports = sort; 