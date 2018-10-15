function top_k_words(str, k_words) {

  //2) Treat uppercase and lowercase words as the same word.
  str = str.toLowerCase();

   //3) Remove punctuation.
  const regex = /[a-z\s]/;
  //str.match(regex)
  str = str.replace(/[^\w\s]|_/g, "").replace(/\s+/g, " ");

  console.log(str)

  //1) Given a string and integer return the top k words by frequency
  //str = str.split(" ");

  let words = str.split(" ");
  let freqMap = {};
  words.forEach(function(w) {
      if (!freqMap[w]) {
          freqMap[w] = 0;
      }
      freqMap[w] += 1;
  });

console.log(freqMap)

let sortable = [];
for (let freq in freqMap) {
    sortable.push([freq, freqMap[freq]]);
}

sortable.sort(function(a, b) {
    return b[1] - a[1];
});

console.log(sortable.slice(0, k_words))


}

console.log(top_k_words("That. that, exists exists in that that! that that exists exists in. James: while John had had & had had had had % had had had had had a better effect on the teacher. Time times time times time squared equals time times time times time times time", 5))
