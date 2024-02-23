window.onload = function() {
    let pronouns = ['the', 'our'];
    let adjs = ['great', 'big'];
    let nouns = ['jogger', 'racoon'];

    let domainList = document.getElementById('domainList');

    for (let i = 0; i < pronouns.length; i++) {
        for (let j = 0; j < adjs.length; j++) {
            for (let k = 0; k < nouns.length; k++) {
                let domainName = pronouns[i] + adjs[j] + nouns[k] + '.com';
                let listItem = document.createElement('li');
                listItem.textContent = domainName;
                domainList.appendChild(listItem);
            }
        }
    }
};