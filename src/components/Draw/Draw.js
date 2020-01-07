import React from 'react';
import PropTypes from "prop-types";
import VoteButton from "../VoteButton/VoteButton";
import vs from '../../images/VS.png'

const Draw = (props) => {
    const {country, state, voteHandler, objectId,sport, type, group} = props;
    return (
        <div className="sports-poll_draw">
            <h3>{group} - {sport}</h3>
            <img src={vs} alt="vs"/>
            <h4><span className="info-label">Country:</span>{country}</h4>
            <h4><span className="info-label">Status:</span>{state}</h4>
            <VoteButton
                buttonText="Draw"
                clickHandler={voteHandler}
                voteType={2}
                gameId={objectId}
                type={type}
            />
        </div>
    )
};

Draw.propTypes = {
    country: PropTypes.string,
    state: PropTypes.string,
    sport: PropTypes.string,
    group: PropTypes.string,
    voteHandler: PropTypes.func,
    type: PropTypes.string,
    objectId: PropTypes.string
};


export default Draw;