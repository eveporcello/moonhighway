import { expect } from 'chai'
import { shallow } from 'enzyme'
import { HomePage } from '../../src/components/home'

describe("<HomePage /> Component", () => {

    it("<HomePage /> renders div.relax-root", () =>
        expect(shallow(<HomePage />).find('div.relax-root')).to.be.ok
    )

})