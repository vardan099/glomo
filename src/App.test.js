import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {shallow} from "enzyme/build";
import VoteHistoryList from "./components/VoteHistoryList/VoteHistoryList";
import SportsPoll from "./components/SportsPoll/SportsPoll";

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
});

describe('Component Renders', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<App/>);
    });

    it('renders correctly', () => {
        expect(wrapper).toMatchSnapshot();
    });

    it('Should render a VoteHistoryList Components', () => {
        const desc = wrapper.find(VoteHistoryList);
        expect(desc.length).toBe(1);
    });

    it('Should render a SportsPoll Components', () => {
        const desc = wrapper.find(SportsPoll);
        expect(desc.length).toBe(1);
    });

});

