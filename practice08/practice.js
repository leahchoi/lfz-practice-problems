function character_convert(str){
    let result = '';
    for(let i = 0; i < str.length; i++){
        result += str.charCodeAt(i);
    }
    return result;
}

character_convert('the cat in the hat');