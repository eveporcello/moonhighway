import { expect } from 'chai'
import { shallow } from 'enzyme'
import App from '../../src/components/App'

describe("<App /> Component", () => {

    it("<App /> responds with hello world", () =>
        expect(shallow(<App />).find('h1').text())
            .to.equal('Hello World')
    )

})