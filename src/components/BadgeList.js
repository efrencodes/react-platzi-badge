import React from 'react'
import '../styles/BadgeList.css'
import BadgesListItem from './BadgeListItem'
import { Link } from 'react-router-dom'

class BadgeList extends React.Component {
    render() {
        if (this.props.badges.length === 0) {
            return (
                <div className="BadgeList">
                    <ul className="list-unstyled">
                        <h4>NO FOUND DATA</h4>
                        <Link to="/new" className="btn btn-primary">new Badge</Link>
                    </ul>
                </div>
            )
        }
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
