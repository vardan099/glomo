import React, {useState, useEffect} from 'react';
import PropTypes from "prop-types";
import VoteHistoryItem from '../VoteHistoryItem/VoteHistoryItem'

const VoteHistoryList = (props) => {
    const {polls, history} =  props;
    const [voteList,setVoteList] = useState([]);
    const [showAll,setShowAll] = useState(false);

    useEffect(() => {
        let voteList;
        if(showAll){
            voteList = [...history].reverse();
        }else{
            voteList = history.slice(-5).reverse();
        }
        setVoteList(voteList);
    }, [history, showAll]);


    const handleSeeAllClick = () =>{
        setShowAll(!showAll)
    };
    return(
        <div className="history w-100">
            <div className="history_title">
                <h3>History</h3>
                <p className="history_title-info">Count of votes: <strong>{history.length}</strong><span className='history_title-switcher' onClick={handleSeeAllClick}>{showAll?'See less':'See all'}</span></p>
            </div>
            {history.length > 0 && Object.entries(polls).length > 0 ?
                <div className="history_list custom-scroll">
                    {voteList && voteList.map((item,key) => (
                        <VoteHistoryItem key={key} poll={polls[item.pollId]} voteType={item.voteType}/>
                    ))}
                </div> :
                <h3 className="history_no-votes">No votes to show</h3>
            }
        </div>
    )
};

VoteHistoryList.propTypes = {
    polls: PropTypes.object,
    history: PropTypes.array
};
export default VoteHistoryList