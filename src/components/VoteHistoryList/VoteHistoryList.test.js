import React from 'react';
import { shallow } from 'enzyme';
import { checkProps } from '../../TestUtils/index';
import VoteHistoryList from './VoteHistoryList';
import VoteHistoryItem from "../VoteHistoryItem/VoteHistoryItem";
describe('VoteHistoryList Component', () => {

    describe('Checking PropTypes', () => {
        it('Should NOT throw a warning', () => {
            const expectedProps = {
                polls: jest.object,
                history: jest.array
            };
            const propsError = checkProps(VoteHistoryList, expectedProps);
            expect(propsError).toBeUndefined();
        });
    });

    describe('Component Renders', () => {
        let wrapper;
        beforeEach(() => {
            const polls = {
                JxrZyQKTrw: {
                    awayName: "Panthrakikos Komotini",
                    createdAt: "2015-12-18T12:30:39.228Z",
                    group: "Greek Cup",
                    homeName: "Chania FC",
                    id: 1002916450,
                    name: "Chania FC - Panthrakikos Komotini",
                    objectId: "1UaQjc7lIb",
                    sport: "FOOTBALL",
                    country: "ENGLAND",
                    state: "STARTED",
                },
                UPJ240T2Qj: {
                    awayName: "PAOK Thessaloniki",
                    createdAt: "2015-12-18T12:30:39.234Z",
                    group: "Greek Cup",
                    homeName: "Olympiakos Volos",
                    id: 1002916451,
                    name: "Olympiakos Volos - PAOK Thessaloniki",
                    objectId: "UPJ240T2Qj",
                    sport: "FOOTBALL",
                    country: "FRANCE",
                    state: "STARTED",
                }
            };

            const props ={
                polls,
                history: [
                    {"pollId":"UPJ240T2Qj","voteType":3,"createdAt":1578228998690},
                    {"pollId":"JxrZyQKTrw","voteType":1,"createdAt":1578229000433}
                    ]
            };
            wrapper = shallow(<VoteHistoryList {...props} />);
        });

        it('renders correctly', () => {
            expect(wrapper).toMatchSnapshot();
        });

    });






});