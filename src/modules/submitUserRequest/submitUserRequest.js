import {getVideoViewCount} from '../getVideoViewCount.js';
let key='AIzaSyCboXgl2NJBXI8A1Iiy-xVeNtXjzY69LlA';
const UserRequest = new XMLHttpRequest();
let resObj = {};
let allVideo = [];
let outputVideosId = [];
let videosIdString = '';

function submitUserRequest() {       
    let UserInput = document.querySelector('input[name="userRequest"]').value;
    let url='https://www.googleapis.com/youtube/v3/search?key='+key+'&type=video&part=snippet&maxResults=15&q='+UserInput;
    UserRequest.open('get', url);
    UserRequest.send();
};

UserRequest.onload = function() {
            resObj = JSON.parse(this.responseText);            
            console.log("Answer:"+resObj);
            allVideo=resObj.items;
            console.log(allVideo);
            getVideoiIdArray();
            
};

function getVideoiIdArray() {
    for (let i=0; i<allVideo.length; i++) {
        outputVideosId[i]=allVideo[i].id.videoId;
        videosIdString+=','+allVideo[i].id.videoId;       
    }
        videosIdString=videosIdString.substr(1);
        getVideoViewCount();
        console.log(videosIdString);
}

export {key,videosIdString, submitUserRequest, allVideo};