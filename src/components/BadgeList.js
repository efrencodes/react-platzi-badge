import React from 'react'
import '../styles/BadgeList.css'
import BadgesListItem from './BadgeListItem'

class BadgeList extends React.Component {
    render() {
        return (
            <div className="BadgeList">
                <ul className="list-unstyled">
                    {
                        this.props.badges.map((badge) => {
                            return (
                                <li key={badge.id}>
                                    <BadgesListItem badge={badge} />
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}

export default BadgeList
