import moxios from 'moxios';

import {getPolls} from './hookActions';

describe('moxios tests', () => {
    beforeEach(() => {
        moxios.install();
    });
    afterEach(() => {
        moxios.uninstall();
    });

    it('calls the getSecretWord callback on axios response', async () => {
        const polls = [
            {
                "awayName": "Panthrakikos Komotini",
                "createdAt": "2015-12-18T12:30:39.228Z",
                "group": "Greek Cup",
                "homeName": "Chania FC",
                "id": 1002916450,
                "name": "Chania FC - Panthrakikos Komotini",
                "objectId": "1UaQjc7lIb",
                "sport": "FOOTBALL",
                "country": "ENGLAND",
                "state": "STARTED"
            },
            {
                "awayName": "PAOK Thessaloniki",
                "createdAt": "2015-12-18T12:30:39.234Z",
                "group": "Greek Cup",
                "homeName": "Olympiakos Volos",
                "id": 1002916451,
                "name": "Olympiakos Volos - PAOK Thessaloniki",
                "objectId": "UPJ240T2Qj",
                "sport": "FOOTBALL",
                "country": "FRANCE",
                "state": "STARTED"
            }
        ];

        moxios.wait(() => {
            const request = moxios.requests.mostRecent();
            request.respondWith({
                status: 200,
                response: polls,
            });
        });

        // create mock for callback arg
        const mockPolls = jest.fn();

        await getPolls(mockPolls);

        // see whether mock was run with the correct argument
        expect(mockPolls).toHaveBeenCalledWith(polls);

    });
});
