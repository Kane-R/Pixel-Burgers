/** devoured()
 *  Loops through every DOM element of class '.devoured'
 *  sets custom attributes: Greys the background out, removes animations
 * 
 */
const devoured = () => {
    $('.devoured').each( function(index) {
        const filling = $( this )

        // removes animations from class '.burger-wrapper'
        filling.parent('.burger-wrapper').css({
            'transform':'none',
            'transition':'none',
            'cursor':'default',
        });

        //get the background colour of anything with '.devoured'
        const colour = filling.css('background-color');
        //do a RegExp replace to only get the RGB values. rgb(R,G,B) -> [R,G,B]
        const RGB = colour.replace(/\(|\)|r|g|b/g,'').split(',')
        //convert this to hsl to edit the 'darkness' and 'greyness' in lamens terms directly
        const HSL = RGB2HSL(...RGB);
        // edit saturation ('greyness') by slapping it with an 80% markdown
        HSL[2] *= 0.2;
        // edit lightness ('darkness') by slapping it with an 50% markdown
        HSL[1] *= 0.8;
        //prepare to send it back to css by formatting it
        const cssHSL = `hsla(${HSL[0]},${HSL[1]}%,${HSL[2]}%)`
        //send this back to CSS!
        filling.css('background-color',cssHSL);

        // we will need to set the text to white as we have greyed out the background
        filling.css('color','white');
    });
}