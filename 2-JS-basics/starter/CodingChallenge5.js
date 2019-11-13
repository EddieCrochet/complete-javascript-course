var john = {
    totals: [],
    tips: [],
    billValues: [124, 48, 268, 180, 42],
    tipCalc: function() {
        for(let i = 0; i < this.billValues.length; i++) {
            if(this.billValues[i] < 50) {
                let tip = this.billValues[i] * .2;
                this.tips.push(tip);
                let total = tip + this.billValues[i];
                this.totals.push(total);
            } else if (this.billValues[i] > 200) {
                let tip = this.billValues[i] * .1;
                this.tips.push(tip);
                let total = tip + this.billValues[i];
                this.totals.push(total);
            } else {
                let tip = this.billValues[i] * .15;
                this.tips.push(tip);
                let total = tip + this.billValues[i];
                this.totals.push(total);
            }
        }
    }
}

var mark = {
    totals: [],
    tips: [],
    billValues: [77, 375, 110, 45],
    tipCalc: function() {
        for(let i = 0; i < this.billValues.length; i++) {
            if(this.billValues[i] < 100) {
                let tip = this.billValues[i] * .2;
                this.tips.push(tip);
                let total = tip + this.billValues[i];
                this.totals.push(total);
            } else if (this.billValues[i] > 300) {
                let tip = this.billValues[i] * .25;
                this.tips.push(tip);
                let total = tip + this.billValues[i];
                this.totals.push(total);
            } else {
                let tip = this.billValues[i] * .1;
                this.tips.push(tip);
                let total = tip + this.billValues[i];
                this.totals.push(total);
            }
        }
    }
}

mark.tipCalc();
john.tipCalc();
console.log(john, mark);

function calcAvg(_arr) {
    var sum = 0;
    for(let i = 0; i < _arr.length; i++) {
        sum += _arr[i];
    }
    var average = sum/_arr.length;
    return average;
    //probably should have made this variable an additional property
    //of each respective object, but this will do
}

console.log(calcAvg(mark.tips));
console.log(calcAvg(john.tips));

if (calcAvg(mark.tips) > calcAvg(john.tips)) {
    console.log("Mark's family paid more tips averaging "
     + calcAvg(mark.tips) + ".");
} else {
    console.log("John's family paid more tips averaging "
     + calcAvg(john.tips) + ".");
}