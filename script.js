let pronouns = ['the', 'our'];

  let adjs = ['great', 'big'];

  let nouns = ['jogger', 'racoon'];


for (let i = 0; i < pronouns.length; i++) {
    for (let j = 0; j < adjs.length; j++) {
        for (let k = 0; k < nouns.length; k++) {
            let domainName = pronouns[i] + adjs[j] + nouns[k] + '.com';
            console.log(domainName);
        }
    }
}
