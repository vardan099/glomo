import React from 'react';
import { shallow } from 'enzyme';
import { checkProps } from '../../TestUtils/index';
import TeamInfo from './TeamInfo'
import VoteButton from '../VoteButton/VoteButton';
import HomeTeamLogo from '../../images/home-logo.png'

describe('TeamInfo Component', () => {

    describe('Checking PropTypes', () => {
        it('Should NOT throw a warning', () => {
            const expectedProps = {
                teamName: jest.string,
                teamLogo: jest.string,
                voteHandler: jest.fn,
                type: jest.string,
                objectId: jest.string
            };
            const propsError = checkProps(TeamInfo, expectedProps);
            expect(propsError).toBeUndefined();
        });

    });

    describe('Component Renders', () => {
        let wrapper;
        beforeEach(() => {
            const props = {
                teamName: "Ukraine U18",
                teamLogo: HomeTeamLogo,
                voteHandler: jest.fn,
                type: "home",
                objectId: "fZZUhitsVt"
            };
            wrapper = shallow(<TeamInfo {...props} />);
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