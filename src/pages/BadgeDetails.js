import React from 'react'
import confLogo from '../images/platziconf-logo.svg'
import '../styles/BadgeDetails.css'
import Badge from '../components/Badge'
import api from '../api.js'
import { Link } from 'react-router-dom'

class BadgeDetails extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            loading: false,
            error: null,
            data: {
                id: '',
                firstName: '',
                lastName: '',
                jobTitle: '',
                twitter: '',
                avatarUrl: "https://www.gravatar.com/avatar/580a552f26ac5e3a0817c3ecc5b9d690?d=identicon",
            }
        }
    }

    componentDidMount() {
        this.fetchData()
    }

    fetchData = async () => {
        this.setState({ loading: true, error: null })
        try {
            const data = await api.badges.read(
                this.props.match.params.badgeId
            )
            this.setState({ loading: false, error: null, data: data })
        } catch (error) {
            this.setState({ loading: false, error: error })
        }
    }

    onDelete = async (badgeId) => {
        this.setState({ loading: true, error: null })
        try {
            const data = await api.badges.remove(badgeId)
            this.setState({ loading: false, error: null, data: data })
            this.props.history.push('/')
        } catch (error) {
            this.setState({ loading: false, error: error })
        }
    }

    render() {
        if (this.state.loading) {
            return <h3>Loading...</h3>
        }

        if (this.state.error) {
            return `Error: ${this.state.error}`
        }

        return (
            <div>
                <div className="BadgeDetails__hero">
                    <div className="container">
                        <div className="row">
                            <div className="col-6">
                                <img src={confLogo} alt="Logo de la conferencia" />
                            </div>
                            <div className="col-6 BadgeDetails__hero-attendant-name">
                                <h1>
                                    efren martinez
                                </h1>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col">
                            <Badge
                                firstName={this.state.data.firstName || 'FIRST NAME'}
                                lastName={this.state.data.lastName || 'LAST NAME'}
                                jobTitle={this.state.data.jobTitle || 'JOB NAME'}
                                twitter={this.state.data.twitter || 'twitter'}
                            />
                        </div>
                        <div className="col">
                            <h2>Actions</h2>
                            <div>
                                <div>
                                    <Link className="btn btn-primary mb-4" to={`/${this.state.data.id}/edit`}>Edit</Link>
                                </div>
                                <div>
                                    <button className="btn btn-danger">
                                        Delete
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default BadgeDetails