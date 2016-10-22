import { Rellax } from '../../../src/components/relax'
import { mount } from 'enzyme'
import { expect } from 'chai'

describe("<Rellax /> Screen Wrap Component", () => {

    let wrapper,
        MockScreenA = () => <div className="screen-a"></div>,
        MockScreenB = () => <div className="screen-b"></div>,
        MockScreenC = () => <div className="screen-c"></div>

    before(() =>
        wrapper = mount(
            <Rellax>
                <MockScreenA />
                <MockScreenB />
                <MockScreenC />
            </Rellax>
        )
    )


    it("passes correct index to third screen", () =>
        expect(wrapper.find(MockScreenC).props().index)
            .to.equal(2)
    )

    it("passes correct breakpoints to child screens", () =>
        expect(wrapper.find(MockScreenB).props().breakpoints)
            .to.deep.equal([0, 768, 1536])
    )

    it("passes screenConfig object to child screens", () =>
        expect(typeof wrapper.find(MockScreenA).props().screenConfig)
            .to.equal("object")
    )

    it("passes screenScale function to each component", () =>
        expect(typeof wrapper.find(MockScreenA).props().screenScale)
            .to.deep.equal("function")
    )

    it("passes fullScale to every screen", () =>
        expect(typeof wrapper.find(MockScreenA).props().fullScale)
            .to.deep.equal("function")
    )

})