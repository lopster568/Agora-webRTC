import React, { useState } from 'react';
import AgoraUIKit from 'agora-react-uikit';
import Chat from './chat.component';

const AgoraUI = () => {
    const [videoCall, setVideoCall] = useState(true);
    const rtcProps = {
        appId: 'bab4231274ee4b3ab2158d1969a6dcfd',
        channel: 'test',
        token: null
    };
    const callbacks = {
        EndCall: () => setVideoCall(false),
    };
    const rtmProps = {

    };
    const styleProps = {};
    return videoCall ? (
        <div style={{ display: 'flex', width: '100vw', height: '100vh' }}>
            <AgoraUIKit rtcProps={rtcProps} callbacks={callbacks} rtmProps={rtmProps} styleProps={styleProps} />
            <div style={{ width: "30%"}} >
                <Chat />
            </div>
        </div>
    ) : (
        <h3 onClick={() => setVideoCall(true)}>Start Call</h3>
    );
};
export default AgoraUI;