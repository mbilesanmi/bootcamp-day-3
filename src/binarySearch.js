/**
 * Created by Maranatha Ilesanmi on 3/15/2017.
 */


Array.prototype.toTwenty = function() {
    var arr = [];
    for (i = 0; i < 20; i++) {
        arr.push(i+1);
    }
    return arr;
}

Array.prototype.toForty = function() {
    var arr = [];
    for (i = 0; i < 40; i+=2) {
        arr.push(i+2);
    }
    return arr;
}

Array.prototype.toOneThousand = function() {
    var arr = [];
    for (i = 0; i < 1000; i+=10) {
        arr.push(i+10);
    }
    return arr;
}

Array.prototype.search = function(n) {
    var index1 = 0;
    var index2 = this.length - 1;
    var curIndex;
    var curElement;
    var count = 0;

    while (index1 <= index2) {
        curIndex = (index1 + index2) / 2 | 0;
        curElement = this[curIndex];

        if (curElement < n) {
            index1 = curIndex + 1;
        } else if (curElement > n) {
            index2 = curIndex - 1;
        } else {
            break;
        }
        curIndex = -1;

    }

    return {"count":count, "index": curIndex, "length":this.length};
}