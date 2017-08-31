function reverseString(str) {
    var mirroredStr = '';
    for (var i = str.length; i >= 0; i--) {
        mirroredStr += str.charAt(i);
    } 
    return mirroredStr;
}

var theWord = prompt('Введите текст', '');
console.log(reverseString(theWord));