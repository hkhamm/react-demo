import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import Thing from './Things'
import store from '../store/store'
import Welcome from './Welcome'

const App = () => (
    <Provider store={store}>
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Welcome} />
                <Route path="/things" component={Thing} />
            </Switch>
        </BrowserRouter>
    </Provider>
)

export default App
