// Here we define keywords that map to certain colours;

const foodColours = {
    cheese:'#ffc500',
    bacon:'#f65656',
    burger:'#975324',
    beef:'#975324',
    lettuce:'#008C00',
    tomato:'#ff4000',
    chicken:'#f9d590',
    lamb:'#693d3d',
    spinach:'#698056',
    mayo:'#FAF6E6',
    mayonnaise:'#FAF6E6',
    mustard:'#e1ad01',
    pickles:'#384d3e',
    eggplant:'#614051',
    mushroom:'#D8CCC0',
    onion:'#B96C93',
    egg:'#f6e6d6',
    avocado:'#568203',
    capsicum:'#BB112A',
    basil:'#579C63',
    ranch:'#EDE5CC',
    fish:'#FAEBD7',
    rocket:'#D0F0C0',
    pineapple:'#563C0D',
    cucumber:'#73AF59',
    pork:'#CB6862',
    ham:'#FCD7DE',
    salami:'#A53535',
    proscittuo:'#DFA575',
    mint:'#98FF98',
}


/** colourPicker
 * A function that maps a colour from a $jQuery object's text that defines a burger 'filling'
 * @param  {jQuery} $jQuery 
 * @return {string} A string with the hexcolour to use 
 */ 
function colourPicker( $jQuery ) {

    const fillingName = $jQuery.text().trim().toLowerCase();

    const foodColour = foodColours[fillingName];
    
    if ( foodColour === undefined ){
        //if no matching colours, pick a random colour
        const colourKeys = Object.keys(foodColours);

        const randomNumber = Math.floor(Math.random()*colourKeys.length);

        const randomFoodColour = foodColours[colourKeys[randomNumber]];

        return randomFoodColour

    } else {
        // otherwise return mapped colour
        return foodColour
    }

}
