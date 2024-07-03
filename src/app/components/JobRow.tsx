import {AiFillSpotify} from "react-icons/ai";

export default function JobRow() {
    return (
        <div>
            <div className={'bg-white p-6 rounded-xl shadow-sm flex gap-4'}>
                <div className={'content-center'}>
                    <AiFillSpotify size={'48'} className={'text-green-500'} />
                </div>
                <div className={'grow'}>
                    <div className={'text-gray-500 text-sm'}>Spotify</div>
                    <div className={'font-bold mb-1'}>Product Manager</div>
                    <div className={'text-gray-500 text-xs'}>Remote &middot; New York, US &middot; Full Time</div>
                </div>
                <div className={'text-gray-500 text-sm content-end'}>2 Week ago</div>
            </div>

        </div>
    )
}