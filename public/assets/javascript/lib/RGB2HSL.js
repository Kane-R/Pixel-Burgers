const getHue = ( R, G, B, max, chroma) => {
    let hue;
    if (chroma === 0) {
      hue = 0;
    } else {
      switch(max) {
          case R:{
              const segment = (G - B) / chroma;
              let shift   = 0 / 60;       // R° / (360° / hex sides)
              if (segment < 0) {          // hue > 180, full rotation
              shift = 360 / 60;         // R° / (360° / hex sides)
              }
              hue = segment + shift;
              break;
          }
          case G: {
              const segment = (B - R) / chroma;
              const shift   = 120 / 60;     // G° / (360° / hex sides)
              hue = segment + shift;
              break;
          }
          case B:{
              const segment = (R - G) / chroma;
              const shift   = 240 / 60;     // B° / (360° / hex sides)
              hue = segment + shift;
              break;
          }
      }
    }
    return Math.round(hue * 60); // hue is in [0,6], scale it up
  }
  
  const getSaturation = (chroma,lightness) => {
      let saturation;
      if (chroma === 0) {
          saturation = 0
      } else {
          saturation = chroma /(1 - Math.abs((2*lightness) - 1))
      }
      return Math.decimal(saturation,3);
  }
  
  const getLightness = (max,min) => {
      const lightness = (max + min)/2
      return Math.decimal(lightness,3);
  }
  

  /** RGB2HSL()
   * Converts an RGB colour into a HSL colour
   * @param  {number} R - the Red intensity value [0,255]
   * @param  {number} G - the Green intensity value [0,255]
   * @param  {number} B - the Blue intensity value [0,255]
   * @return {array}    -   
   */
  const RGB2HSL = ( R, G, B ) => {
      R = Math.decimal(R/255,4);
      G = Math.decimal(G/255,4);
      B = Math.decimal(B/255,4);
      
      const max = Math.max(R, G, B);
      const min = Math.min(R, G, B);
      const chroma   = max - min;
  
      const hue         = getHue( R, G, B, max, chroma );
      let lightness     = getLightness(max,min)
      const saturation  = Math.decimal(getSaturation(chroma,lightness)*100,3);
      // converts the lightness value to the appropriate number of signifficant figures
      lightness = Math.decimal(lightness*100,3);
  
      return [hue, saturation, lightness];
  }
  