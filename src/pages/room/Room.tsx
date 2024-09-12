import { useParams } from "react-router-dom"
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';

const Room = () => {
    const { roomId } = useParams()

    const myMeeting = async (element: any) => {
        const appID = 0;
        const serverSecret = "";
        const kitToken = ZegoUIKitPrebuilt?.generateKitTokenForTest(
            appID,
            serverSecret,
            `${roomId}`,
            Date.now().toString(),
            "new user"
        )
        const zc = ZegoUIKitPrebuilt.create(kitToken)
        zc.joinRoom({
            container: element,
            sharedLinks: [{ name: "Copy Link", url: window?.location?.href }],
            scenario: { mode: ZegoUIKitPrebuilt.OneONoneCall },
            showScreenSharingButton: false,

        })
    }

    return (
        <>
            <div>
                <div ref={myMeeting} />
            </div>
        </>
    )
}

export default Room