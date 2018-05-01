var censorWords = ["sad", "bad", "mad"];
var customCensoredWords = [];
function censor(inStr) {
    for (idx in censorWords) {
        inStr = inStr.replace(censorWords[idx], "****");
    }
    for (idx in customCensoredWords) {
        inStr = inStr.replace(customCensoredWords[idx], "****");
    }
    return inStr;
}
function addCensorWord(word) {
    customCensoredWords.push(word);
}
function getCensoredWord() {
    return censorWords.concat(customCensoredWords);
}
exports.censor = censor;
exports.addCensorWord = addCensorWord;
exports.getCensoredWord = getCensoredWord;