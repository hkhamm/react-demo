import * as React from 'react'
import { connect } from 'react-redux'
import { RouteComponentProps, withRouter } from 'react-router'
import { Dispatch } from 'redux'
import { SET_THINGS, setThings } from '../store/actions'

class Things extends React.Component<TProps> {

    public componentWillMount() {
        const { dispatchSetThings } = this.props
        const things = window.localStorage.getItem(SET_THINGS)
        if (things !== undefined && things !== null) {
            dispatchSetThings(parseInt(things, 10))
        }
    }

    public addThings = () => {
        const { dispatchSetThings, things } = this.props
        const newThings = things + 1
        dispatchSetThings(newThings)
    }

    public resetThings = () => {
        const { dispatchSetThings } = this.props
        dispatchSetThings(0)
    }

    public render() {
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

interface IState {
    things: number
}

const mapStateToProps = (state: IState) => ({
    things: state.things,
})

interface IDispatch {
    dispatchSetThings: (things: number) => void
}

const mapDispatchToProps = (dispatch: Dispatch) => ({
    dispatchSetThings: things => dispatch(setThings(things)),
})

type TProps = IState & IDispatch & RouteComponentProps<{}>

export default withRouter(connect<IState, IDispatch>(
    mapStateToProps,
    mapDispatchToProps,
)(Things))
