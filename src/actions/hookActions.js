import axios from 'axios';

export const getPolls = async (handleDataAfterFetch) => {
    const response = await axios.get('/polls');
    const myData = {};
    response.data.forEach(pollEvent => {
        if (pollEvent.state !== "FINISHED") {
            myData[pollEvent.objectId] = pollEvent
        }
    });
    handleDataAfterFetch(response.data);
};

// default export for mocking convenience
export default {
    getPolls,
}
