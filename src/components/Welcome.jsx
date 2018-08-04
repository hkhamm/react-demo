import React from 'react';
import { withRouter } from 'react-router';
import ReactRouterPropTypes from 'react-router-prop-types';

const Welcome = (props) => {
    const { history } = props;

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div style={{ textAlign: 'center' }}>
                <p>
                    {'Welcome'}
                </p>
                <button type="button" onClick={() => history.push('/things')}>
                    {'Go to things'}
                </button>
            </div>
        </div>
    );
};

Welcome.propTypes = {
    history: ReactRouterPropTypes.history.isRequired
};

export default withRouter(Welcome);
