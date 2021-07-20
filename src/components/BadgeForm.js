import React from 'react'

class BadgeForm extends React.Component {
    // constructor(props) {
    // super(props)
    // this.state = {
    //     firstName: null,
    //     lastName: null,
    //     jobTitle: null,
    //     twitter: null
    // }
    // }

    // handleChange = (e) => {
    //     // console.log({
    //     //     name: e.target.name,
    //     //     value: e.target.value
    //     // })

    //     // Setear el estado
    //     this.setState({
    //         [e.target.name]: e.target.value
    //     })
    // }

    handleClick = (e) => {
        console.log('Btn was click')
    }

    // handleSubmit = (e) => {
    //     e.preventDefault()
    // }

    render() {
        return (
            <React.Fragment>
                <h1>New Attendant</h1>
                <form onSubmit={this.props.onSubmit}>
                    <div className="form-group">
                        <label>First Name</label>
                        <input
                            onChange={this.props.onChange}
                            className="form-control"
                            type="text"
                            name="firstName"
                            value={this.props.formValues.firstName}
                        />
                    </div>
                    <div className="form-group">
                        <label>Last Name</label>
                        <input
                            onChange={this.props.onChange}
                            className="form-control"
                            type="text"
                            name="lastName"
                            value={this.props.formValues.lastName}
                        />
                    </div>
                    <div className="form-group">
                        <label>Job Name</label>
                        <input
                            onChange={this.props.onChange}
                            className="form-control"
                            type="text"
                            name="jobTitle"
                            value={this.props.formValues.jobTitle}
                        />
                    </div>
                    <div className="form-group">
                        <label>Twitter</label>
                        <input
                            onChange={this.props.onChange}
                            className="form-control"
                            type="text"
                            name="twitter"
                            value={this.props.formValues.twitter}
                        />
                    </div>
                    <button
                        onClick={this.handleClick}
                        className="btn btn-primary">
                        SAVE
                    </button>
                </form>
            </React.Fragment>
        )
    }
}

export default BadgeForm
