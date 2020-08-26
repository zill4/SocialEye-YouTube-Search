import React from 'react';
import { GoogleLogin } from 'react-google-login';
import { refreshTokenSetup } from '../utils/refreshToken'

const clientId = '109450811667-drr89tljrke2grjhl4efn6q06ni82fau.apps.googleusercontent.com';

function GLogin() {
    const onSuccess = (res) => {
        console.log ('[Login Success] curretnUser:', res.profileObj);
        console.log(res.tokenObj)
        //init the setup
        refreshTokenSetup(res);
    };
    const onFailure = (res) => {
        console.log('[Login failed] res:', res);
    };

    return (
        <div>
            <GoogleLogin
            clientId={clientId}
            buttonText="Login"
            onSuccess={onSuccess}
            onFailure={onFailure}
            cookiePolicy={'single_host_origin'}
            style={{ marginTop: '100px' }}
            isSignedIn={true}
            />
        </div>
    );
}

export default GLogin;