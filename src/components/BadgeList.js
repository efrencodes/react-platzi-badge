import React from 'react'
import '../styles/BadgeList.css'
import BadgesListItem from './BadgeListItem'
import { Link } from 'react-router-dom'

function BadgeList(props) {
    const badges = props.badges

    const [query, setQuery] = React.useState('')

    const filtered = badges.filter(badge => {
        return `${badge.firstName} ${badge.lastName}`.toLowerCase().includes(query.toLowerCase())
    })

    if (badges.length === 0) {
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
            <div className="form-group" style={{ 'margin-bottom': '20px' }}>
                <label htmlFor="">Filter Badges</label>
                <input
                    type="text"
                    className="form-control"
                    value={query}
                    onChange={(e) => {
                        setQuery(e.target.value)
                    }}
                />
            </div>

            <ul className="list-unstyled">
                {
                    filtered.map((badge) => {
                        return (
                            <li key={badge.id}>
                                <Link
                                    className="text-reset text-decoration-none"
                                    to={`/${badge.id}`}
                                >
                                    <BadgesListItem badge={badge} />
                                </Link>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default BadgeList
