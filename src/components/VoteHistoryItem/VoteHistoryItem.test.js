import React from 'react';
import {shallow} from 'enzyme';
import {checkProps} from '../../TestUtils/index';
import VoteHistoryItem from './VoteHistoryItem';

describe('VoteHistoryItem Component', () => {

    describe('Checking PropTypes', () => {
        it('Should NOT throw a warning', () => {
            const expectedProps = {
                poll: jest.object,
                voteType: jest.number
            };
            const propsError = checkProps(VoteHistoryItem, expectedProps);
            expect(propsError).toBeUndefined();
        });

    });

    describe('Component Renders', () => {
        let wrapper;
        beforeEach(() => {
            const poll = {
                awayName: "Israel U18",
                homeName: "Ukraine U18",
                sport: "FOOTBALL",
                group: "Under 18",
            };
            const props ={
                poll,
                voteType: 2
            }
            wrapper = shallow(<VoteHistoryItem {...props} />);
        });

        it('renders correctly', () => {
            expect(wrapper).toMatchSnapshot();
        });

    });


});