import React from 'react'
import '../styles/BadgeNew.css'
import Header from '../images/badge-header.svg'
import NavBar from '../components/NavBar'
import Badge from '../components/Badge'
import BadgeForm from '../components/BadgeForm'

class BadgeNew extends React.Component {
    render() {
        return (
            <div>
                <NavBar />
                <div className="BadgeNew__hero">
                    <img className="img-fluid" src={Header} alt="Logo Start" />
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <Badge />
                        </div>
                        <div className="col-6">
                            <BadgeForm />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default BadgeNew
