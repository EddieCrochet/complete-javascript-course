var tip;
var tipCalc = function(bill) {
    if (bill < 50) {
        tip = .2;
    } else if (bill > 200) {
        tip = .1;
    } else {
        tip = .15;
    }
}

var tipTotals = [tipCalc(124), tipCalc(48), tipCalc(268)];
var billTotals = [tipTotals[0] + 124, tipTotals[1] + 48, tipTotals[2] + 268];