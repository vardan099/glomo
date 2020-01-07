import React from 'react';
import PropTypes from "prop-types";

const VoteButton = (props) => {
    const {buttonText, clickHandler, voteType, gameId, type} = props;
    return (
        <button data-test="voteButton" className={`vote-button bg-${type}`} onClick={() => clickHandler(gameId, voteType)}>{buttonText}</button>
    )
};

VoteButton.propTypes = {
    buttonText: PropTypes.string,
    clickHandler: PropTypes.func,
    voteType: PropTypes.number,
    type: PropTypes.string,
    gameId: PropTypes.string
};


export default VoteButton;