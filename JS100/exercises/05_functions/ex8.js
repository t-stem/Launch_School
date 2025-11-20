/* Write a function that takes an ISO 639-1 language code and returns a greeting in that language. 
You can take the examples below or add whatever languages you like. */


function greet(code) {
    switch (code) {
        case 'en':
            return 'Hello';
        case 'fr':
            return 'Bonjour';
        case 'jp':
            return 'Konnichiwa';
        case 'nl':
            return 'Hallo';
        default:
            return 'Enter a language code';
    }
}

console.log(greet('jp'));