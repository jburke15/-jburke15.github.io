
let movieScores = [3, 4, 5, 8, 3, 2, 7, 8, 9, 10];
 

let goodMovies = [];
let okMovies = [];
let badMovies = [];
 

let totalScore = 0;
 

let avgScore = 0;
 

let goodCount = 0;
let okCount = 0;
let badCount = 0;
 

for(let i=0; i<movieScores.length; i++){
    
    totalScore += movieScores[i];
    
    
    if(movieScores[i] > 7){
        goodMovies.push(movieScores[i]);
        
        goodCount++;
    } 
    
    else if (movieScores[i] >= 5 && movieScores[i] <= 7){
        okMovies.push(movieScores[i]);
        
        okCount++;
    } 
    
    else if (movieScores[i] < 5){
        badMovies.push(movieScores[i]);
       
        badCount++;
    }

avgScore = totalScore / movieScores.length;
 

console.log("Good movies: " + goodCount);
console.log("Ok movies: " + okCount);
console.log("Bad movies: " + badCount);
console.log("Average score: " + avgScore);
