// 648. Replace Words


// In English, we have a concept called root, which can be followed by some other word to form another longer word
// let's call this word derivative. For example, when the root "help" is followed by the word "ful", we can form a derivative "helpful"


// Given a dictionary that consists of many roots and a sentence consisting of words seperated by spaces,
// replace all the derivatives in the sentence with the root forming it. If a derivative can be replaced
// by more than one root, replace it with the root that has the shortest length.

// return the sentence after the replacement.



/**
 * @param {string[]} dictionary
 * @param {string} sentence
 * @return {string}
 */
var replaceWords = function(dictionary, sentence) {
    // Split the sentence into words
    let words = sentence.split(' ');

    // Sort the dictionary by length
    dictionary.sort((a, b) => a.length - b.length);

    // Iterate over each word in the sentence
    for (let i = 0; i < words.length; i++) {
        let word = words[i];
        
        // Check each root in the sorted dictionary
        for (let root of dictionary) {
            // If the word starts with the root, replace the word with the root
            if (word.startsWith(root)) {
                words[i] = root;
                break; // Break to ensure we use the shortest root
            }
        }
    }

    // Join the words back into a sentence
    let result = words.join(' ');

    return result;
};
