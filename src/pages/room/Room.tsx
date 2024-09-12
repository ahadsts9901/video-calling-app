import { useParams } from "react-router-dom"
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';

const Room = () => {
    const { roomId } = useParams()

    const myMeeting = async (element: any) => {
        const appID = 1823333989;
        const serverSecret = "c228dabd0db884dc8009904c1d7635fb";
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