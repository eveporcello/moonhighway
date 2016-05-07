import expect from 'expect'
import {shallow} from 'enzyme'
import App from '../../components/App'

describe("App Component", () => {
    it("Renders Moon Highway Website", () => {
        const wrapper = shallow(<App />);
        expect(wrapper.find('h1').text()).toEqual("Moon Highway Website");
    });
});


