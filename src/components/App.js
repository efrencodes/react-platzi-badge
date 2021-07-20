import React from 'react'
import { BrowserRouter, Route, Switch } from "react-router-dom"
import Layout from './Layout'
import BadgeNew from '../pages/BadgeNew'
import BadgeEdit from '../pages/BadgeEdit'
import BadgeDetails from '../pages/BadgeDetails'
import Badges from '../pages/Badges'

function App() {
    return (
        <BrowserRouter>
            <Layout>
                <Switch>
                    <Route exact path="/" component={Badges} />
                    <Route exact path="/new" component={BadgeNew} />
                    <Route exact path="/:badgeId/edit" component={BadgeEdit} />
                    <Route exact path="/:badgeId" component={BadgeDetails} />
                </Switch>
            </Layout>
        </BrowserRouter>
    )
}

export default App;
