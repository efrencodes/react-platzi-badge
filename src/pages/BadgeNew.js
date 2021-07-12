import React from 'react'
import '../styles/BadgeNew.css'
import Header from '../images/badge-header.svg'
import NavBar from '../components/NavBar'
import Badge from '../components/Badge'
import BadgeForm from '../components/BadgeForm'

class BadgeNew extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            form: {
                firstName: '',
                lastName: '',
                jobName: '',
                twitter: ''
            }
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
    render() {
        return (
            <div>
                <NavBar />
                <div className="BadgeNew__hero">
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
                                firstName={this.state.form.firstName}
                                lastName={this.state.form.lastName}
                                jobName={this.state.form.jobName}
                                twitter={this.state.form.twitter}
                            />
                        </div>
                        <div className="col-6">
                            <BadgeForm
                                onChange={this.handleChange}
                                formValues={this.state.form}
                            />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default BadgeNew
