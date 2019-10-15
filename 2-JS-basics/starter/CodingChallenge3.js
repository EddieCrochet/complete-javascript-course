var tipCalc = function(bill) {
    var percentage;
    if (bill < 50) {
        percentage = .2;
    } else if (bill > 200) {
        percentage = .1;
    } else {
        percentage = .15;
    }
    return percentage * bill;
}

var tipTotals = [tipCalc(124), tipCalc(48), tipCalc(268)];
var billTotals = [tipTotals[0] + 124, tipTotals[1] + 48, tipTotals[2] + 268];

console.log(tipTotals);
console.log(billTotals);