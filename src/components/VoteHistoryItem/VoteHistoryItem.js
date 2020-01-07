import React from 'react';
import PropTypes from "prop-types";
const voteTypes = {
    1: {title:"Home Team",value:"home"},
    2: {title:"Draw",value:"draw"},
    3: {title:"Away Team",value:"away"},
};

const VoteHistoryItem = (props) => {
    const {poll, voteType} =  props;
    return(
        <div className="history-item w-100">
            <div>
                <p>{`${poll.homeName} - ${poll.awayName}`}</p>
            </div>
            <div>
                <p>{poll.group} - {poll.sport}</p>
            </div>
            <div>
                <div className={`bg-${voteTypes[voteType].value} history-item_vote-type`}>
                    <span>{voteTypes[voteType].title}</span>
                </div>
            </div>
        </div>
    )
};

VoteHistoryItem.propTypes = {
    poll: PropTypes.object,
    voteType: PropTypes.number
};
export default VoteHistoryItem