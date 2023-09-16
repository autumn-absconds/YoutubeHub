import React, { useState } from "react";
import axios from "axios";

function VideoDownloader() {
    const [videoUrl, setVideoUrl] = useState("");
    const [downloadedVideoLink, setDownloadedVideoLink] = useState("");
    const [loading, setloading] = useState(false);
const [resTime,setResTime] = useState("");

    const handleDownload = async () => {
        setloading(true)
        setDownloadedVideoLink("");
        setResTime("")
        try {
            const response = await axios.post("http://127.0.0.1:5000/download", { videoUrl });
            setloading(false)
            setDownloadedVideoLink(response.data.videoUrl);
            setResTime(response.data.responseTime)

        } catch (error) {
            console.error("Error downloading video:", error);
        }
    };

    return (
        <div>
            <h1>YouTube Video Downloader</h1>
            <input
                type="text"
                placeholder="Enter YouTube Video URL"
                value={videoUrl}
                onChange={(e) => setVideoUrl(e.target.value)}
            />
            <button onClick={handleDownload}>Download Video</button>
            {
loading && <>
<p>Loading..................................</p>
</>

            }
            {downloadedVideoLink && (
                <div>
                    <p>Time Taken : {resTime} seconds</p>
                    <p>Download Link:</p>
                    <video controls width="400">
                        <source src={`http://127.0.0.1:5000${downloadedVideoLink}`} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
<br />
                    <a href={downloadedVideoLink} download>
                        Download Video
                    </a>
                </div>
            )}

        </div>
    );
}

export default VideoDownloader;
