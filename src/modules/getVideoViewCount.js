import {videosIdString, key} from './submitUserRequest/submitUserRequest.js';
import {createVideoBlock} from './createVideoBlock.js';
const requestViewCount = new XMLHttpRequest();
let ObjOfVideoDetails;

function getVideoViewCount () {
    console.log("request: "+videosIdString);
    let url="https://www.googleapis.com/youtube/v3/videos?key="+key+"&id="+videosIdString+"&part=statistics";
    requestViewCount.open('get', url);
    requestViewCount.send();    
}

requestViewCount.onload=function() {
    ObjOfVideoDetails = JSON.parse(this.responseText);  
    console.log('ObjOfVideoDetails: '+ObjOfVideoDetails);
    createVideoBlock();
    // createDiv();
};

export {getVideoViewCount, ObjOfVideoDetails};