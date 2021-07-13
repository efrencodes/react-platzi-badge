import React from 'react'
import { BrowserRouter, Route, Switch } from "react-router-dom"
import Layout from './Layout'
import BadgeNew from '../pages/BadgeNew'
import Badges from '../pages/Badges'

function App() {
    return (
        <BrowserRouter>
            <Layout>
                <Switch>
                    <Route exact path="/" component={Badges} />
                    <Route exact path="/new" component={BadgeNew} />
                </Switch>
            </Layout>
        </BrowserRouter>
    )
}

export default App;
