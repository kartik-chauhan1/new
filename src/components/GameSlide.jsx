import React from 'react';
import { SwiperSlide } from 'swiper/react';

function GameSlide({ game, active, ToggleVideo }) {
  return (
    <SwiperSlide>
      <sections className='gameSlider'>
        <img src={game.img} alt="GameImage" />
        <div className={`video ${active ? 'active' : ""}`}>
          <iframe
            width="1280"
            height="720"
            src={game.trailer}
            title={game.title}
            allow='accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture;'
            allowFullScreen
          ></iframe>
        </div>
        <div className='content'>
          <h2>{game.title}</h2>
          <p>{game.description}</p>
          <div className='buttons'>
            <a href='# ' className='orderBtn'>Order Now</a>
            <a href=' #' className={`playBtn ${active && 'active'}`} onClick={ToggleVideo}>
              <span className='pause'>
                <i className='bi bi-pause-fill'></i>
              </span>
              <span className='play'>
                <i className="bi bi-play-fill"></i>
              </span>
            </a>
          </div>
        </div>
      </sections>
    </SwiperSlide>
  );
}

export default GameSlide;
