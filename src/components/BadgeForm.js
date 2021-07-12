import React from 'react'

class BadgeForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            firstName: null,
            lastName: null,
            jobName: null,
            twitter: null
        }
    }

    handleChange = (e) => {
        // console.log({
        //     name: e.target.name,
        //     value: e.target.value
        // })

        // Setear el estado
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleClick = (e) => {
        console.log('Btn was click')
    }

    handleSubmit = (e) => {
        e.preventDefault()
    }

    render() {
        return (
            <div>
                <h1>New Attendant</h1>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label>First Name</label>
                        <input
                            onChange={this.handleChange}
                            className="form-control"
                            type="text"
                            name="firstName"
                            value={this.state.firstName}
                        />
                    </div>
                    <div className="form-group">
                        <label>Last Name</label>
                        <input
                            onChange={this.handleChange}
                            className="form-control"
                            type="text"
                            name="lastName"
                            value={this.state.lastName}
                        />
                    </div>
                    <div className="form-group">
                        <label>Job Name</label>
                        <input
                            onChange={this.handleChange}
                            className="form-control"
                            type="text"
                            name="jobName"
                            value={this.state.jobName}
                        />
                    </div>
                    <div className="form-group">
                        <label>Twitter</label>
                        <input
                            onChange={this.handleChange}
                            className="form-control"
                            type="text"
                            name="twitter"
                            value={this.state.twitter}
                        />
                    </div>
                    <button
                        onClick={this.handleClick}
                        className="btn btn-primary">
                        SAVE
                    </button>
                </form>
            </div>
        )
    }
}

export default BadgeForm