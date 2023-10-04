import cloudinary from "cloudinary-video-player";
import "cloudinary-video-player/dist/cld-video-player.min.css";

import { useEffect, useRef } from 'react';

const VideoPlayer = () => {
    const cloudinaryRef = useRef();
    const videoRef = useRef();

    useEffect(() => {
        if (cloudinaryRef.current) return;

        cloudinaryRef.current = window.cloudinary;
        cloudinaryRef.current.videoPlayer(videoRef.current, {
            cloud_name: 'colbycloud-examples'
        })
    }, []);

    return (
        <video
            ref={videoRef}
        />
    );
}

export default VideoPlayer