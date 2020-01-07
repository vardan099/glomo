import React from 'react';
import { shallow } from 'enzyme';
import { checkProps } from '../../TestUtils/index';
import SportsPoll from './SportsPoll'
import Draw from "../Draw/Draw";
import TeamInfo from "../TeamInfo/TeamInfo";

describe('SportsPoll Component', () => {

    describe('Checking PropTypes', () => {
        it('Should NOT throw a warning', () => {
            const expectedProps = {
                game: jest.object,
                voteHandler: jest.fn
            };
            const propsError = checkProps(SportsPoll, expectedProps);
            expect(propsError).toBeUndefined();
        });

    });

    describe('Component Renders', () => {
        let wrapper;
        beforeEach(() => {
            const props = {
                game:{
                    awayName: "Ukraine U18",
                    createdAt: "2015-12-18T12:30:39.244Z",
                    group: "Under 18",
                    homeName: "Israel U18",
                    id: 1003022920,
                    name: "Israel U18 - Ukraine U18",
                    objectId: "fZZUhitsVt",
                    sport: "FOOTBALL",
                    country: "SWEDEN",
                    state: "STARTED"
                },
                voteHandler: jest.fn
            };
            wrapper = shallow(<SportsPoll {...props} />);
        });

        it('renders correctly', () => {
            expect(wrapper).toMatchSnapshot();
        });

        it('Should render a Draw Component', () => {
            const desc = wrapper.find(Draw);
            expect(desc.length).toBe(1);
        });

        it('Should render 2 TeamInfo Components', () => {
            const desc = wrapper.find(TeamInfo);
            expect(desc.length).toBe(2);
        });

    });


});