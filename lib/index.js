export class StackCycle {

    constructor(arr=[], startIndex=0) {
        this.array = arr
        this.index = startIndex
    }

    next() {
        this.index = this.index + 1
        if (this.index == this.array.length) {
            this.index = this.index - 1
        }
        return this.current()
    }

    prev() {
        this.index = this.index - 1
        if (this.index < 0) {
            this.index = 0
        }
        return this.current()
    }

    current() {
        return this.array[this.index]
    }

    currentIndex() {
        return this.index
    }

}