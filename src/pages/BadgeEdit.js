import React from 'react'
import '../styles/BadgeEdit.css'
import Header from '../images/badge-header.svg'
import Badge from '../components/Badge'
import BadgeForm from '../components/BadgeForm'
import api from '../api'

class BadgeEdit extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            loading: true,
            error: null,
            form: {
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
            this.setState({ loading: false, error: null, form: data })
        } catch (error) {
            this.setState({ loading: false, error: error })
        }
    }

    handleChange = e => {
        this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        })
    }

    onSubmit = async e => {
        e.preventDefault()
        this.setState({ loading: true, error: null })

        try {
            await api.badges.update(this.props.match.params.badgeId, this.state.form)
            this.setState({ loading: false, error: null })
            this.props.history.push('/')
        } catch (error) {
            this.setState({ loading: false, error: error })
        }
    }

    render() {
        if (this.state.loading) {
            return <h3>Loading...</h3>
        }
        return (
            <React.Fragment>
                <div className="BadgeEdit__hero">
                    <img
                        className="img-fluid"
                        src={Header}
                        alt="Logo Start"
                    />
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <Badge
                                firstName={this.state.form.firstName || 'FIRST NAME'}
                                lastName={this.state.form.lastName || 'LAST NAME'}
                                jobTitle={this.state.form.jobTitle || 'JOB NAME'}
                                twitter={this.state.form.twitter || 'twitter'}
                            />
                        </div>
                        <div className="col-6">
                            <BadgeForm
                                onChange={this.handleChange}
                                onSubmit={this.onSubmit}
                                formValues={this.state.form}
                            />
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default BadgeEdit
