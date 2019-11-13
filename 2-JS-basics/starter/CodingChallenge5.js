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