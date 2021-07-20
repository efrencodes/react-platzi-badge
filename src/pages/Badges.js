import React from 'react'
import BadgeList from '../components/BadgeList'
import '../styles/Badges.css'
import Header from '../images/badge-header.svg'
import { Link } from 'react-router-dom'
import api from '../api'

class Badges extends React.Component {
    constructor(props) {
        super(props)
        console.log('1. constructor()');
        this.state = {
            data: undefined,
            loading: true,
            error: null
        }
    }

    async componentDidMount() {
        console.log('3. componentDidMount()');
        this.fetchData()
    }

    fetchData = async () => {
        this.setState({ loading: true, error: null })
        try {
            const data = await api.badges.list()
            this.setState({ loading: false, data: data })
        } catch (error) {
            this.setState({ loading: false, error: error })
        }
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('5. componentDidUpdate()')
    }

    componentWillUnmount() {
        console.log('6. componentWillUnmount()');
    }

    render() {
        console.log('2. render()');
        if (this.state.loading) {
            return <h2>Loading...</h2>
        }

        if (this.state.error) {
            return `Error: ${this.state.error.message}`
        }

        return (
            <React.Fragment>
                <div className="Badges">
                    <div className="Badges__hero">
                        <div className="Badges__container">
                            <img
                                className="Badges_conf-logo"
                                src={Header}
                                alt="Logo"
                            />
                        </div>
                    </div>
                </div>
                <div className="Badge__container">
                    <div className="Badge__buttons">
                        <Link className="btn btn-primary" to="/new">New Badge</Link>
                    </div>
                </div>

                <div className="Badges__list">
                    <div className="Badges__container">
                        <BadgeList badges={this.state.data} />
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Badges;
