import React from 'react'

class BadgeList extends React.Component {
    render() {
        return (
            <ul className="list-unstyled">
                {
                    this.props.badges.map((badge) => {
                        return (
                            <li key={badge.id}>
                                {badge.firstName} {badge.lastName}
                            </li>
                        )
                    })
                }
            </ul>
        )
    }
}

export default BadgeList
