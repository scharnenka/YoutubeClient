import {allVideo} from './submitUserRequest/submitUserRequest.js';
import {createDiv} from './createDiv.js';
import $ from 'jquery';
import 'slick-carousel';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
function createVideoBlock () {
    
    
    
    let videoBlock = document.createElement('div');
    videoBlock.className = 'videoBlock';
    document.body.appendChild(videoBlock);

    for (let i=0; i<allVideo.length; i++) {
        let item = document.createElement('div');
        item.className = 'item';
        item.setAttribute('id','i'+i);
        item.innerHTML='<div class="thumbnail"><div class="blockTitle"><h1>Video\'s Title</h1></div></div><div class="infoBlock"><div class="authorInfo"><p><span><i class="fas fa-male"></i></span><span></span></p></div><div class="uploadDate"><p><span><i class="far fa-calendar-alt"></i></span><span></span></p></div><div class="viewCount"><p><span><i class="far fa-eye"></i></span><span></span></p></div><div class="descrition"><p></p></div></div>';
        
        videoBlock.appendChild(item);
        createDiv(i);
    }
    $('.videoBlock').slick(
        {
            
            
            dots: true,
            infinite: true,
            speed: 300,
            slidesToShow: 4,
            slidesToScroll: 4,
            responsive: [
              {
                breakpoint: 1360,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 3,
                  infinite: true,
                  dots: true
                }
              },
              {
                breakpoint: 1040,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2
                }
              },
              {
                breakpoint: 720,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
                }
              }
              // You can unslick at a given breakpoint now by adding:
              // settings: "unslick"
              // instead of a settings object
            ]
          }
    );
}

export {createVideoBlock};