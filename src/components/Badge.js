import React from 'react';
import '../styles/Badge.css'
import image from '../images/badge-header.svg'

class Badge extends React.Component {
    render() {
        return (
            <div className="badge">
                <div className="badge_header">
                    <img
                        src={image}
                        alt="Conf Platzi"
                    />
                </div>
                <div className="badge_section-name">
                    <img className="badge_avatar" src="https://www.gravatar.com/avatar?d=identicon" alt="Avatar" />
                    <h1>{this.props.firstName}<br />{this.props.lastName}</h1>
                </div>
                <div className="badge_section-info">
                    <h3>{this.props.jobName}</h3>
                    <div>@{this.props.twitter}</div>
                </div>
                <div className="badge_footer">
                    #platziconf
                </div>
            </div>
        )
    }
}

export default Badge;
