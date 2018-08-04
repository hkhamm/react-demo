import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import ReactRouterPropTypes from 'react-router-prop-types';
import { setThings } from '../store/actions';

class Thing extends React.Component {
    static propTypes = {
        history: ReactRouterPropTypes.history.isRequired,
        things: PropTypes.number.isRequired,
        dispatchSetThings: PropTypes.func.isRequired
    };

    constructor(props) {
        super(props);
        this.state = {
            things: props.things
        };
    }

    componentWillReceiveProps(newProps) {
        this.setState({ things: newProps.things });
    }

    addThings = () => {
        const { things } = this.state;
        const { dispatchSetThings } = this.props;

        const newThings = things + 1;

        this.setState({ things: newThings });
        dispatchSetThings(newThings);
    };

    render() {
        const { things } = this.state;
        const { history } = this.props;

        return (
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <div style={{ textAlign: 'center' }}>
                    <p>
                        {`${things} things`}
                    </p>
                    <div>
                        <button type="button" onClick={this.addThings}>
                            {'More things'}
                        </button>
                    </div>
                    <div>
                        <button type="button" onClick={() => history.push('/')}>
                            {'Back'}
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    things: state.things
});

const mapDispatchToProps = dispatch => ({
    dispatchSetThings: things => dispatch(setThings(things))
});

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(Thing));
