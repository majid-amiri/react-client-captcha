import "babel-polyfill";
import "jest-enzyme";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import "jest-canvas-mock";
require.extensions[".svg"] = () => {};

Enzyme.configure({ adapter: new Adapter() });
window.scroll = jest.fn();
