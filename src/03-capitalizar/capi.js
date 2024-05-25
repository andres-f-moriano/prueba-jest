/**Realizar una función para capitalizar cadenas de texto */


function capi(text) {
    const textSeparate = text.split(" ");
    for (var i = 0; i < textSeparate.length; i++) {
        textSeparate[i] = textSeparate[i].charAt(0).toUpperCase() + textSeparate[i].slice(1);
    }
    const textCapitalize = textSeparate.join(" ");
    
    return textCapitalize;
}
module.exports = capi;