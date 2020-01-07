import React from 'react';
import PropTypes from "prop-types";
import VoteButton from "../VoteButton/VoteButton";

const voteTypes = {
    "home": {'voteType':1,'buttonText':'Home Team'},
    "draw": {'voteType':2,'buttonText':'Draw'},
    "away": {'voteType':3,'buttonText':'Away Team'},
};

const TeamInfo = (props) => {
    const {teamName, teamLogo, voteHandler, objectId, type} = props;
    return (
        <div className={`sports-poll_${type}-team`}>
            <img className='team-logo' src={teamLogo} alt={`${type} team logo`}/>
            <h4>{teamName}</h4>
            <VoteButton
                buttonText={voteTypes[type].buttonText}
                clickHandler={voteHandler}
                voteType={voteTypes[type].voteType}
                gameId={objectId}
                type={type}
            />
        </div>
    )
};

TeamInfo.propTypes = {
    teamName: PropTypes.string,
    teamLogo: PropTypes.string,
    voteHandler: PropTypes.func,
    type: PropTypes.string,
    objectId: PropTypes.string
};


export default TeamInfo;