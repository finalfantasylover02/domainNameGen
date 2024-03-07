document.addEventListener('DOMContentLoaded', function() {
    // Arrays for domain name parts
    let pronouns = ['the', 'our'];
    let adjs = ['great', 'big'];
    let nouns = ['jogger', 'racoon'];

    // Generate random indices for each array
    let randomPronounIndex = Math.floor(Math.random() * pronouns.length);
    let randomAdjIndex = Math.floor(Math.random() * adjs.length);
    let randomNounIndex = Math.floor(Math.random() * nouns.length);

    // Construct the domain name
    let domainName = pronouns[randomPronounIndex] + adjs[randomAdjIndex] + nouns[randomNounIndex] + '.com';

    // Update the content of the <p> element with id "domainName"
    document.getElementById('domainName').textContent = domainName;
});
