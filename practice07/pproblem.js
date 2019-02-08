function translate(word){
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    if(vowels.indexOf(word[0]) !== -1){
        return word + 'way';
    }
    for(let i = 0; i < word.length; i++){
        if(vowels.indexOf(word[i]) !== -1){
            return word.slice(i, word.length) + word.slice(0, i) + 'ay';
        }
    }
}

translate('friends');