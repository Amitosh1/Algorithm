class MaxBH {
    constructor() {
        this.arr = [];
    }

    add(num) {
        this.arr.push(num);
        var pos = this.arr.length - 1;
        var parent = Math.floor((pos - 1) / 2);
        if (parent >= 0) {
            while (this.arr[parent] < num) {
                var tmp = this.arr[parent];
                this.arr[parent] = num;
                this.arr[pos] = tmp;
                pos = parent;
                parent = Math.floor((parent - 1) / 2);
            }
        }
        return this.arr;
    }

    extractMax() {
        var tmp = this.arr[0];
        this.arr[0] = this.arr.pop();
        var pos = 0;
        while (true) {
            var rep_pos = 2 * pos + 1;
            if (rep_pos >= this.arr.length) {
                break;
            } else if (this.arr[pos] > this.arr[rep_pos] && this.arr[pos] > this.arr[rep_pos + 1]) {
                break;
            } else {
                var next = this.arr[rep_pos] > this.arr[rep_pos + 1] ? rep_pos : rep_pos + 1;
                next = (rep_pos + 1>=this.arr.length) ? rep_pos: rep_pos+1;
                var tmp2 = this.arr[pos];
                this.arr[pos] = this.arr[next];
                this.arr[next] = tmp2;
                pos = next;
            }
        }
        return tmp;
    }
}
