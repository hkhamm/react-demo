import PropTypes from 'prop-types'
import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import ReactRouterPropTypes from 'react-router-prop-types'
import { SET_THINGS, setThings } from '../store/actions'

class Things extends React.Component {
    static propTypes = {
        history: ReactRouterPropTypes.history.isRequired,
        things: PropTypes.number.isRequired,
        dispatchSetThings: PropTypes.func.isRequired
    }

    componentWillMount() {
        const { dispatchSetThings } = this.props
        const things = window.localStorage.getItem(SET_THINGS)
        if (things !== undefined && things !== null) {
            dispatchSetThings(parseInt(things, 10))
        }
    }

    addThings = () => {
        const { dispatchSetThings, things } = this.props
        const newThings = things + 1
        dispatchSetThings(newThings)
    }

    resetThings = () => {
        const { dispatchSetThings } = this.props
        dispatchSetThings(0)
    }

    render() {
        const { history, things } = this.props
        return (
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <div style={{ textAlign: 'center' }}>
                    <p>
                        {`${things} things`}
                    </p>
                    <div style={{ marginBottom: '10px' }}>
                        <button type="button" onClick={this.addThings}>
                            {'More things'}
                        </button>
                    </div>
                    <div style={{ marginBottom: '10px' }}>
                        <button type="button" onClick={this.resetThings}>
                            {'Reset things'}
                        </button>
                    </div>
                    <div>
                        <button type="button" onClick={() => history.push('/')}>
                            {'Back'}
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    things: state.things
})

const mapDispatchToProps = dispatch => ({
    dispatchSetThings: things => dispatch(setThings(things))
})

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(Things))
