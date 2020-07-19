
Math.decimal = (number,places) =>{
    const scale = Math.pow(10,places);
    //scale up the number
    number *= scale
    //round the number to the nearest integer
    number = Math.round(number);
    //scale it back down
    number /=scale
    //finally return it
    return number
}