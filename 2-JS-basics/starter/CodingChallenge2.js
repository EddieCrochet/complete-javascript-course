var johnScore, mikeScore, maryScore;

johnScore = (89 + 127 + 103) / 3;
mikeScore = (89 + 120 + 103) / 3;
maryScore = (297 + 134 + 105) / 3;

console.log(johnScore, mikeScore, maryScore);

//var winner = johnScore > mikeScore ? 'John' : 'Mike';


if (johnScore > mikeScore && johnScore > maryScore){
    console.log('John\'s score is higher at ' + johnScore + ' points.');
} else if (mikeScore > johnScore && mikeScore > maryScore){
    console.log('Mike\'s score is higher at ' + mikeScore + ' points.')
} else if (maryScore > johnScore && maryScore > mikeScore){
    console.log('Mary\'s score is the highest at ' + maryScore + ' points!');
} else {
    console.log('Looks like it\'s a draw.');
}

/*never reaches my draw default??
switch (winner){
    case 'John':
        console.log(winner + ' is the winner with ' + johnScore + ' points!');
        break;
    case 'Mike':
        console.log(winner + ' is the winner with ' + mikeScore + ' points!');
        break;
    default:
        console.log('Looks like it\'s a draw.');
}

/* first way but no switch
johnScore > mikeScore ? console.log('John\'s score is higher at ' + johnScore + ' points.')
    :   console.log('Mike\'s score is higher at ' + mikeScore + ' points.');
    */
