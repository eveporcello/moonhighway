import { skrollScale, skrollrAttributes } from '../../../src/components/relax'
import { expect } from 'chai'

describe("skrollScale", ()=> {

    let sut

    before(() => sut = skrollScale([0, 803, 1606, 2409, 3212, 4015]))
    it("converts 0 percent of breakpoint 0", () => expect(sut('0%')).to.equal(0))
    it("converts 0 percent of breakpoint 3", () => expect(sut('0%', 3)).to.equal(2409))
    it("converts 100 percent of breakpoint 4", () => expect(sut('100%', 4)).to.equal(4015))
    it("converts 100 percent of breakpoint 5", () => expect(sut('100%', 5)).to.equal(4015))
    it("converts 25 percent of breakpoint 1", () => expect(sut('25%', 1)).to.equal(1004))
    it("converts 90 percent of breakpoint 0", () => expect(sut('90%')).to.equal(723))
    it("converts 33.334 percent of breakpoint 3", () => expect(sut('33.33334%', 3)).to.equal(2677))

})

describe("skrollrAttributes", () => {

    let sample = {
        '0%': {
            transform: 'rotate(0deg)',
            backgroundColor: 'red'
        },
        '20%': {
            transform: 'rotate(20deg)'
        },
        '40%': {
            transform: 'rotate(-20deg)'
        },
        '80%': {
            transform: 'rotate(0deg)',
            backgroundColor: 'blue'
        }
    }

    describe("screen percentages", () => {

        let results,
            sut = skrollrAttributes([0, 803, 1606, 2409, 3212, 4015], 2)

        before(() => results = sut(sample))

        it("skrollr object has correct scroll values", () =>
            expect(Object.keys(results)).to.deep.equal([
                "data-1606",
                "data-1767",
                "data-1927",
                "data-2248"
            ])
        )

        it("skrollr object object has correct css", () =>
            expect(Object.keys(results).map(k => results[k])).to.deep.equal([
                "transform: rotate(0deg); background-color: red;",
                "transform: rotate(20deg);",
                "transform: rotate(-20deg);",
                "transform: rotate(0deg); background-color: blue;"
            ])
        )

    })

    describe("full scroll percentages", () => {

        let results,
            sut = skrollrAttributes(4015)

        before(() => results = sut(sample))

        it("skrollr object has correct scroll values", () =>
            expect(Object.keys(results)).to.deep.equal([
                "data-0",
                "data-803",
                "data-1606",
                "data-3212"
            ])
        )

        it("skrollr object object has correct css", () =>
            expect(Object.keys(results).map(k => results[k])).to.deep.equal([
                "transform: rotate(0deg); background-color: red;",
                "transform: rotate(20deg);",
                "transform: rotate(-20deg);",
                "transform: rotate(0deg); background-color: blue;"
            ])
        )

    })

})

