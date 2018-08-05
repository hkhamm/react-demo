import * as React from 'react'
import { RouteComponentProps, withRouter } from 'react-router'

const Welcome = (props: TProps) => {
    const { history } = props

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
    )
}

type TProps = RouteComponentProps<{}>

export default withRouter(Welcome)
