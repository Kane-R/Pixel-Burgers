
/** HSL2RGB()
 *  Converts a HSL colour to an RGB colour
 * @param  {number} H - hue [0 , 360];
 * @param  {number} S - saturation [0,100];
 * @param  {number} L - lightness [0,100];
 * @return {array} - an array with RGB values [R,G,B] from with R,G and B within range of [0,255];
 */
const HSL2RGB = (H,S,L) => {
    S /= 100;
    L /= 100;

    const C = (1 - Math.abs(2*L-1))*S;
    const X = C * (1-Math.abs( ( (H/60) % 2 ) - 1 ));
    const m = L - ( C / 2 );
    
    let RGB;

    if (0<=H && H < 60) {
        RGB = [C,X,0]
    }
    if(60<=H && H < 120) {
        RGB = [X,C,0]            
    }
    if(120<=H && H < 180) {
        RGB = [0,C,X]
    }
    if(180<=H && H < 240) {
        RGB = [0,X,C]
    }
    if(240<=H && H < 300) {
        RGB = [X,0,C]
    }
    if(300<=H && H < 360) {
        RGB = [C,0,X]
    }

    RGB = RGB.map(value => value = Math.round((value + m)*255));

    return RGB;
}