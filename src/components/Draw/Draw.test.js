import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAtrr, checkProps } from '../../TestUtils/index';
import Draw from './Draw'
import VoteButton from '../VoteButton/VoteButton'

describe('Draw Component', () => {

    describe('Checking PropTypes', () => {
        it('Should NOT throw a warning', () => {
            const expectedProps = {
                country: jest.string,
                state: jest.string,
                sport: jest.string,
                group: jest.string,
                voteHandler: jest.func,
                type: jest.string,
                objectId: jest.string
            };
            const propsError = checkProps(Draw, expectedProps);
            expect(propsError).toBeUndefined();
        });

    });

    describe('Component Renders', () => {
        let wrapper;
        beforeEach(() => {
            const props = {
                country: "Sweden",
                state: "STARTED",
                sport: "FOOTBALL",
                group: jest.string,
                voteHandler: ()=>{},
                type: "draw",
                objectId: "fZZUhitsVt"
            };
            wrapper = shallow(<Draw {...props} />);
        });

        it('renders correctly', () => {
            expect(wrapper).toMatchSnapshot();
        });

        it('Should render VoteButton Component', () => {
            const desc = wrapper.find(VoteButton);
            expect(desc.length).toBe(1);
        });

    });




});