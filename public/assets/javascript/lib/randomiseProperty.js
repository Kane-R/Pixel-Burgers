/** randomiseProperty
 * Get's the property of a Jquery Object and alters the property by a random buffer.
 * @param  {jQuery} $filling - the jquery object to access
 * @param  {Object} options the options to be passed to the function
 * @param  {string} options.property - the css property to change
 * @param  {string} options.adjustment - the maximum percentage to adjust this property by as a decimal 
 * @param  {string} options.units - the units of the property e.g px, rem, vh etc...
 * @return {string} a string with the altered property
 */
const randomiseProperty =  ( $Query, options )  => {
    
    if(options.adjustment === undefined && options.property === undefined){
        return new Error('invalid options, please revise');
    }
    if($Query === undefined){
        return new Error('jQuery Object not defined!');
    }
    if(options.units === undefined){
        options.units = 'px';
    }
    //css property to randomise, and it's units
    const cssProperty = options.property;
    const units = options.units;
    //maximum adjustment to alter this property by as a decimal percentage 
    const maxAdjustment = options.adjustment;
    //generates a random number between 0 and 1
    const randomNumber = Math.random();

    //get's the property from the jQuery object
    let property = parseFloat($Query.css(cssProperty));

    //alters the maxAdjustment by the random Number
    property *= (1 - maxAdjustment*(1 - 2*randomNumber) );
    property =  property.toString();
    property += units;
    return property.toString();
}
