/* Building on your solutions from the previous exercises, 
write a function localGreet that takes a locale as input, 
and returns a greeting. 
The locale allows us to greet people from different countries differently 
also when they share the language, for example: 

localGreet('en_US.UTF-8'); // 'Hey!'
localGreet('en_GB.UTF-8'); // 'Hello!'
localGreet('en_AU.UTF-8'); // 'Howdy!'

Distinguish greetings for English speaking countries like the US, UK, Canada, or Australia in your implementation, 
and feel free to fall back on the language-specific greetings in all other cases, for example:

localGreet('fr_FR.UTF-8'); // 'Salut!'
localGreet('fr_CA.UTF-8'); // 'Salut!'
localGreet('fr_MA.UTF-8'); // 'Salut!'

When implementing localGreet, make sure to re-use your 
extractLanguage, extractRegion and greet functions from the previous exercises.

*/

function extractLanguage(locale) {
    return locale.slice(0,locale.indexOf('_')); 
}

function extractRegion(locale) {
    return locale.slice(locale.indexOf('_') + 1,locale.indexOf('.')); 
}

function greet(language, region) {
    switch (language) {
        case 'en':
            switch (region) {
                case 'US':
                    return 'Hey!';
                case 'GB':
                    return 'Hello!';
                case 'AU':
                    return 'Howdy!';
                default:
                    return 'Region not recognized.';
            }
        case 'fr':
            return 'Salut!';
        case 'ja':
            return 'Konnichiwa!';
        case 'nl':
            return 'Hallo!';
        default:
            return 'Language not recognized.'
    }
}

function localGreet(locale) {
    let language = extractLanguage(locale);
    let region = extractRegion(locale);
    return greet(language, region);
}

console.log(localGreet('en_GB.UTF-8'));