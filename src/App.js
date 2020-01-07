import React, {useEffect, useState} from 'react';
import './App.scss';
import hookActions from './actions/hookActions';
import SportsPoll from './components/SportsPoll/SportsPoll';
import VoteHistoryList from "./components/VoteHistoryList/VoteHistoryList";

function App() {
    const [polls, setPolls] = useState({});
    const [randomPoll, setRandomPoll] = useState({});
    const [history, setHistory] = useState([]);

    useEffect(() => {
        const handleDataAfterFetch = (data) =>{
            const myData = {};
            data.forEach(pollEvent => {
                if (pollEvent.state !== "FINISHED") {
                    myData[pollEvent.objectId] = pollEvent
                }
            });
            setPolls(myData);
            updateRandomPollState(myData);
        };

        hookActions.getPolls(handleDataAfterFetch);
        const history = JSON.parse(localStorage.getItem('history'));
        if(history){
            setHistory(history)
        }
    }, []);



    const voteHandler = (pollId, voteType) => {
        const newState = [...history,{
            pollId,
            voteType,
            createdAt: Date.now()
        }];

        setHistory(newState);
        updateRandomPollState(polls);
        localStorage.setItem('history', JSON.stringify(newState));
    };

    const updateRandomPollState = (polls) => {
        if (polls) {
            const randomPoll = polls[[Object.keys(polls)[Math.floor(Math.random() * Object.keys(polls).length)]]];
            setRandomPoll(randomPoll)
        }
    };

    return (

        <div className="App w-100">
            <SportsPoll game={randomPoll} voteHandler={voteHandler}/>
            <hr className="h-line"/>
            <VoteHistoryList polls={polls} history={history}/>
        </div>
    );
}

export default App;
