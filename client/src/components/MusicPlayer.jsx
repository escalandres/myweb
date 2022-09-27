import React,{Component} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBackward, faPlay, faForward, faPause } from '@fortawesome/fontawesome-free-solid'
import '../css/musicPlayer.css';
import Music from "../assets/music.jpg";
import witcher from "../assets/music/witcher.mp3";


export default class MusicPlayer extends Component{
    componentDidMount() {
        const musicContainer = document.getElementById("music-container");
        const playBtn = document.getElementById("play");
        const playIcon = document.getElementById("play-btn");
        const pauseIcon = document.getElementById("pause-btn");
        const prevBtn = document.getElementById("prev");
        const nextBtn = document.getElementById("next");
        const audio = document.getElementById("audio");
        const progress = document.getElementById("progress");
        const progressContainer = document.getElementById("progress-container");
        const title = document.getElementById("title");
        const cover = document.getElementById("cover");
        const aaudio = new Audio(witcher);
        // Songs Titles
        const songs = ["witcher", "jazzyfrenchy", "ukulele"];
        // KeepTrack of song
        let songIndex = 0;
        // Initially load song details into DOM
        loadSong(songs[songIndex]);
        // Update song details
        function loadSong(song) {
            title.innerText = song;
            // audio.src = `../assets/music/${song}.mp3`;
            
            // cover.src = '../assets/music.jpg';
        }
        // Play Song
        function playSong() {
            musicContainer.classList.add("play");
            // playBtn.querySelector(".play").
            pauseIcon.classList.remove("hidden");
            playIcon.classList.add("hidden");
            aaudio.play();
        }
        // Pause Song
        function pauseSong() {
            console.log('pause');
            musicContainer.classList.remove("play");
            pauseIcon.classList.add("hidden");
            playIcon.classList.remove("hidden");
            aaudio.pause();
        }
        // Previous Song
        function prevSong() {
            songIndex--;
            if (songIndex < 0) {
            songIndex = songs.length - 1;
            }
            loadSong(songs[songIndex]);
            playSong();
        }
        // Next Song
        function nextSong() {
        songIndex++;
        if (songIndex > songs.length - 1) {
        songIndex = 0;
        }
        loadSong(songs[songIndex]);
        playSong();
        }
        // Update Progress bar
        function updateProgress(e) {
            const { duration, currentTime } = e.srcElement;
            const progressPerCent = (currentTime / duration) * 100;
            progress.style.width = `${progressPerCent}%`;
        }
        // Set Progress
        function setProgress(e) {
            const width = this.clientWidth;
            const clickX = e.offsetX;
            const duration = audio.duration;
            audio.currentTime = (clickX / width) * duration;
        }
        // Event Listeners
        playBtn.addEventListener("click", () => {
            const isPlaying = musicContainer.classList.contains("play");
            if (isPlaying) {
            pauseSong();
            } else {
            playSong();
            }
        });
        // Change Song
        prevBtn.addEventListener("click", prevSong);
        nextBtn.addEventListener("click", nextSong);
        // Time/Song Update
        audio.addEventListener("timeupdate", updateProgress);
        // Click On progress Bar
        progressContainer.addEventListener("click", setProgress);
        // Song End
        audio.addEventListener("ended", nextSong);
    }
    
    render(){
        return (
            <div>
                <h1>Music Player</h1>
                <div className="music-container" id="music-container">
                    <div className="music-info">
                        <h4 className="title" id="title"></h4>
                        <div className="progress-container" id="progress-container">
                            <div className="progress" id="progress"></div>
                        </div>
                    </div>
                    <audio src='' id="audio"></audio>
                    <div className="img-container">
                        <img src={Music} alt="music-cover" id="cover" />
                    </div>
                    <div className="navigation">
                    <button id="prev" className="action-btn">
                        {/* <i className="fa fa-backward" aria-hidden="true"></i> */}
                        <FontAwesomeIcon className="fa-solid icon backward" icon={faBackward} aria-hidden="true"/>
                    </button>
                    <button id="play" className="action-btn action-btn-big">
                        {/* <i className="fa fa-play" aria-hidden="true"></i> */}
                        <FontAwesomeIcon id="play-btn" className="fa-solid icon" icon={faPlay} aria-hidden="true"/>
                        <FontAwesomeIcon id="pause-btn" className="fa-solid icon hidden" icon={faPause} aria-hidden="true"/>
                    </button>
                    <button id="next" className="action-btn">
                        {/* <i className="fa fa-forward" aria-hidden="true"></i> */}
                        <FontAwesomeIcon className="fa-solid icon forward" icon={faForward} aria-hidden="true"/>
                    </button>
                    </div>
                </div>
            </div>
        )
    }
}



