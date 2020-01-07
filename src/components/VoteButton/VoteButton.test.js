import React from 'react';
import { shallow } from 'enzyme';
import { checkProps } from '../../TestUtils/index';
import VoteButton from './VoteButton';

describe('VoteButton Component', () => {

    describe('Checking PropTypes', () => {
        it('Should NOT throw a warning', () => {
            const expectedProps = {
                buttonText: jest.string,
                clickHandler: jest.func,
                voteType: jest.number,
                gameId: jest.string,
                type: jest.string,
            };
            const propsError = checkProps(VoteButton, expectedProps);
            expect(propsError).toBeUndefined();
        });

    });

    describe('Component Renders', () => {
        let wrapper;
        const props = {
            buttonText: "Home Team",
            clickHandler: jest.fn(),
            voteType: 2,
            gameId: "CSJn3kZhdx",
            type: "home"
        };

        beforeEach(() => {
            wrapper = shallow(<VoteButton {...props} />);
        });

        it('renders correctly', () => {
            expect(wrapper).toMatchSnapshot();
        });

        it('Test click event', () => {
            wrapper.find('button').simulate('click');
            expect(props.clickHandler.mock.calls.length).toEqual(1);
        });
    });


});