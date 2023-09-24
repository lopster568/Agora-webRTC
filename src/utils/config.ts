import { ClientConfig, createMicrophoneAndCameraTracks, createClient } from "agora-rtc-react";

const config: ClientConfig = {
    mode: "rtc", codec: "vp8",
};

console.log(config)

const appId: string = "bab4231274ee4b3ab2158d1969a6dcfd"; //ENTER APP ID HERE
const token: string | null = null;

const useClient = createClient(config);
const useMicrophoneAndCameraTracks = createMicrophoneAndCameraTracks();

export {
    useClient,
    useMicrophoneAndCameraTracks,
    appId,
    token,
    config
}