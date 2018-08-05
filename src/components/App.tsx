import * as React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import store from '../store/store'
import Things from './Things'
import Welcome from './Welcome'

const App = () => (
    <Provider store={store}>
        <BrowserRouter>
            <Switch>
                <Route exact={true} path="/" component={Welcome} />
                <Route path="/things" component={Things} />
            </Switch>
        </BrowserRouter>
    </Provider>
)

export default App
