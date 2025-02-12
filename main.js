let story = 'Last weekend, I took literally the most beautiful bike ride of my life. The route is called "The 9W to Nyack" and it actually stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it basically took me an entire day. I stopped at Riverbank State Park to take some extremely artsy photos. It was a short stop, though, because I had a really long way left to go. After a quick photo op at the very popular Little Red Lighthouse, I began my trek across the George Washington Bridge into New Jersey.  The GW is actually very long - 4,760 feet! I was already very tired by the time I got to the other side.  An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson.  Something that was very surprising to me was that near the end of the route you actually cross back into New York! At this point, you are very close to the end.';

let overusedWords = ['really', 'very', 'basically'];

let unnecessaryWords = ['extremely', 'literally', 'actually' ];


// splits each part of the words into an array split is dependent on how much spacing you put in or specific characters like a comma it will keep going until it reaches the next one

var storyWords = story.split(' ')
// Confirmed it worked
console.log(storyWords)
// asking for the length once in an array will count the words not the characters. 
console.log(storyWords.length)

// There is an array of words that are unnecessary. Iterate over your array to filter out these words. Save the remaining words in an array called betterWords. There are several ways that you could achieve this.
var filterOut = function(array,iteratorfunction){
  return array.filter(function(word){
    return !iteratorfunction(word);
  })
}

var betterWords = filterOut(storyWords,function(word) {
  return unnecessaryWords.includes(word);
})

console.log(betterWords)

// var countOverUsedWords = function(array,iteratorfunction1){
//   return array.filter(function(word){
//     return iteratorfunction1(word)
//   })

// }
// var getCountofOverUsedWords = countOverUsedWords(story,function(word){
//   return overusedWords.length(word)
// })
// console.log(getCountofOverUsedWords)

var getSentences = story.split('.')
console.log(getSentences.length)
console.log(story.join)

// will re write this as practice as I did not feel confindent in it today 
