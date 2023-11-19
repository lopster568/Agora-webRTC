import Chat from './chat.component';
import VideoCall from './components/video-call.component';
import ChannelForm from './components/channel-form.component';
import { useState } from 'react';

const App = () => {
    const [inCall, setInCall] = useState(false);
    const [channelName, setChannelName] = useState("");
    return (
        <div>
            <h1 className="heading">Agora RTC NG SDK React Wrapper</h1>
            {inCall ? (
                <VideoCall setInCall={setInCall} channelName={channelName} />
            ) : (
                <ChannelForm setInCall={setInCall} setChannelName={setChannelName} />
            )}
            <Chat />
        </div>
    );
};
export default App;