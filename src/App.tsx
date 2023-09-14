import { useState } from 'react';
import AgoraUIKit from 'agora-react-uikit';
const AgoraUI = () => {
    const [videoCall, setVideoCall] = useState(true);
const rtcProps = {
        appId: '15a52d431faa47b6a2c686684c45d0b4',
        channel: 'test',
        token: null
    };
const callbacks = {
        EndCall: () => setVideoCall(false),
    };
const rtmProps = {};
const styleProps = {};
return videoCall ? (
        <div style={{ display: 'flex', width: '100vw', height: '100vh' }}>
            <h1>WebRTC Agora</h1>
            <AgoraUIKit rtcProps={rtcProps} callbacks={callbacks} rtmProps={rtmProps} styleProps={styleProps} />
        </div>
    ) : (
        <h3 onClick={() => setVideoCall(true)}>Start Call</h3>
    );
};
export default AgoraUI;