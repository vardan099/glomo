import React from 'react';
import PropTypes from "prop-types";
import TeamInfo from "../TeamInfo/TeamInfo";
import Draw from "../Draw/Draw";

import homeTeamLogo from '../../images/home-logo.png'
import awayTeamLogo from '../../images/away-logo.png'


const SportsPoll = ({game, voteHandler}) => {
    const {sport, homeName, objectId, country, state, awayName, group} = game;
    return (
        <div className="sports-poll w-100">
            <h1 className="sports-poll_title">Which Team Would Win?</h1>
            <div className="sports-poll_content w-100">
                <TeamInfo
                    voteHandler={voteHandler}
                    objectId={objectId}
                    type="home"
                    teamName={homeName}
                    teamLogo={homeTeamLogo}
                />
                <Draw
                    country={country}
                    state={state}
                    voteHandler={voteHandler}
                    objectId={objectId}
                    sport={sport}
                    group={group}
                    type="draw"
                />
                <TeamInfo
                    voteHandler={voteHandler}
                    objectId={objectId}
                    type="away"
                    teamName={awayName}
                    teamLogo={awayTeamLogo}
                />
            </div>
        </div>
    )
};

SportsPoll.propTypes = {
    game: PropTypes.object,
    voteHandler: PropTypes.func
};

export default SportsPoll;