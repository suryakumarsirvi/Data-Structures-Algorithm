// Accept an English alphabet from user and check if it is a consonant or a vowel.

function checkChar(alphabet) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];

    const isVowel = vowels.includes(alphabet)

    if(isVowel){
        return console.log(`${alphabet} is Vowel.`)
    }else{
        return console.log(`${alphabet} is Consonant.`)
    }
}

checkChar("s")