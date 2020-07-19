// loops through each class of 'filling' and sets some custom properties
// this makes the page feel more alive.
const setFillings = () => {
    $('.filling').each( function(index) {
        //the jQuery object of each filling
        const filling = $( this );

        // sets custom dynamic properties for this filling
        const width             = randomiseProperty(filling, { property:'width' ,adjustment:0.1, });
        const radius            = randomiseProperty(filling, { property:'border-radius', adjustment:3, });
        const backgroundColor   = colourPicker(filling);
        const textColour        = getContrast(backgroundColor);
        
        const CSS = {
            'width':width,
            'border-radius':radius,
            'backgroundColor':backgroundColor,
            'color':textColour
        }
        //finally, add the markup
        $( filling ).css(CSS)
    });
} 

 

//TODO: re-size the input to make longer
//TODO: change input colours for more impact
