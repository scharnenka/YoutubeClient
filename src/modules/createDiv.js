import {allVideo} from './submitUserRequest/submitUserRequest.js';
import {ObjOfVideoDetails} from './getVideoViewCount.js';

function createDiv (i) {
    console.log('createDiv');
    console.log(ObjOfVideoDetails);

    let title = document.querySelector('#i'+i+' .blockTitle h1');
    title.innerHTML = allVideo[i].snippet.title;
    
    let item = document.querySelector('#i'+i+' div.thumbnail');
    let preview = document.createElement('img');
    preview.setAttribute('src', allVideo[i].snippet.thumbnails.high.url);
    item.appendChild(preview);

    let authorOfVideo = document.querySelector('#i'+i+' .authorInfo span:nth-child(2n)');
    authorOfVideo.innerHTML=allVideo[i].snippet.channelTitle;

    let uploadDate = document.querySelector('#i'+i+' .uploadDate span:nth-child(2n)');
    uploadDate.innerHTML=allVideo[i].snippet.publishedAt.match(/\d+-\d+-\d+/);

    let viewCount = document.querySelector('#i'+i+' .viewCount span:nth-child(2n)');
    viewCount.innerHTML = ObjOfVideoDetails.items[i].statistics.viewCount;

    let description = document.querySelector('#i'+i+' .descrition p');
    description.innerHTML = allVideo[i].snippet.description;
    
}

export {createDiv};