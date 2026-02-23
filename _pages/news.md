---
layout: archive
title: "News"
permalink: /news/
author_profile: true
---

<style>
  .news-card {
    background: #ffffff;
    border: 1px solid #f0f0f0;
    border-radius: 12px;
    padding: 24px;
    margin-bottom: 20px;
    transition: all 0.3s ease;
    position: relative;
  }
  .news-card:hover { box-shadow: 0 10px 30px rgba(0,0,0,0.05); }

  .news-row {
    display: flex;
    gap: 25px;
    align-items: flex-start;
  }

  .news-media-side {
    flex: 0 0 280px;
    max-width: 280px;
  }

  .slider-container {
    position: relative;
    width: 280px;
    height: 190px;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 4px 10px rgba(0,0,0,0.08);
  }

  .slider-container input { display: none; }

  .slider-wrapper {
    display: flex;
    width: 200%;
    height: 100%;
    transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
    animation: autoPlaySlider 8s infinite ease-in-out;
  }

  .slider-wrapper img {
    width: 50%;
    height: 100%;
    object-fit: cover;
  }

  @keyframes autoPlaySlider {
    0%, 40% { transform: translateX(0); }
    50%, 85% { transform: translateX(-50%); }
    100% { transform: translateX(0); } 
  }

  #slide1:checked ~ .slider-wrapper { animation: none; transform: translateX(0); }
  #slide2:checked ~ .slider-wrapper { animation: none; transform: translateX(-50%); }

  .slider-nav {
    position: absolute;
    top: 50%;
    width: 100%;
    transform: translateY(-50%);
    display: flex;
    justify-content: space-between;
    padding: 0 10px;
    z-index: 2;
    opacity: 0;
    transition: opacity 0.3s;
    pointer-events: none;
  }
  .slider-container:hover .slider-nav { opacity: 1; }

  .slider-nav label {
    width: 24px;
    height: 24px;
    background: rgba(255,255,255,0.8);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    font-size: 14px;
    color: #333;
    pointer-events: auto;
    box-shadow: 0 2px 5px rgba(0,0,0,0.1);
  }

  .slider-dots {
    position: absolute;
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    gap: 6px;
    z-index: 3;
  }
  .dot {
    width: 8px;
    height: 8px;
    background: rgba(255,255,255,0.4);
    border-radius: 50%;
    cursor: pointer;
    transition: all 0.3s;
  }

  .dot-auto { animation: dotPulse 8s infinite; }
  .dot-auto:nth-child(2) { animation-delay: 4s; }

  @keyframes dotPulse {
    0%, 40% { background: white; width: 16px; border-radius: 4px; }
    50%, 100% { background: rgba(255,255,255,0.4); width: 8px; border-radius: 50%; }
  }

  #slide1:checked ~ .slider-dots .dot:nth-child(1) { animation: none; background: white; width: 16px; border-radius: 4px; }
  #slide2:checked ~ .slider-dots .dot:nth-child(2) { animation: none; background: white; width: 16px; border-radius: 4px; }
  #slide1:checked ~ .slider-dots .dot:nth-child(2),
  #slide2:checked ~ .slider-dots .dot:nth-child(1) { animation: none; }

  .news-body-side { flex: 1; display: flex; flex-direction: column; }
  .news-date {
    display: inline-block;
    background: #E8F0F8;
    color: #00539B;
    padding: 2px 12px;
    border-radius: 20px;
    font-size: 0.82em;
    font-weight: 700;
    margin-bottom: 12px;
    align-self: flex-start;
  }
  .news-content { font-size: 0.98em; line-height: 1.6; color: #333; }
  .news-content a { color: #00539B; text-decoration: none; font-weight: 600; }
  .news-img-single { width: 100%; border-radius: 8px; box-shadow: 0 4px 10px rgba(0,0,0,0.08); object-fit: cover; }

  @media (max-width: 768px) {
    .news-row { flex-direction: column; gap: 15px; }
    .news-media-side { flex: 0 0 auto; width: 100%; max-width: 100%; }
    .slider-container { width: 100%; height: 200px; }
  }
</style>

<div class="news-card">
  <div class="news-row">
    <div class="news-media-side">
      <div class="slider-container">
        <input type="radio" name="slider-2026" id="slide1">
        <input type="radio" name="slider-2026" id="slide2">
        
        <div class="slider-wrapper">
          <img src='/images/PW26.jpg' alt="Talk at PW26">
          <img src='/images/PW26_goodman.jpg' alt="Meeting Prof. Goodman">
        </div>

        <div class="slider-nav">
          <label for="slide1">❮</label>
          <label for="slide2">❯</label>
        </div>

        <div class="slider-dots">
          <label for="slide1" class="dot dot-auto"></label>
          <label for="slide2" class="dot dot-auto"></label>
        </div>
      </div>
    </div>
    <div class="news-body-side">
      <span class="news-date">January 2026</span>
      <div class="news-content">
        Back in SF for <strong>SPIE Photonics West</strong>! It was a busy but rewarding week giving two talks on our curvature-adaptive gigapixel microscopy and high-throughput 3D zebrafish profiling systems (watch the video <a href="https://www.youtube.com/watch?v=IXfsqg_8Y6I&t">here</a>). The "cherry on top" was unexpectedly meeting <strong>Prof. Joseph Goodman</strong>—an unforgettable moment for any optics researcher!
      </div>
    </div>
  </div>
</div>

<div class="news-card">
  <div class="news-row">
    <div class="news-media-side">
      <img src='/images/PW25.jpg' class="news-img-single" alt="Moscone Center">
    </div>
    <div class="news-body-side">
      <span class="news-date">January 2025</span>
      <div class="news-content">
        My first visit to <strong>SPIE Photonics West</strong>! Although I didn't present this year, it was a fantastic opportunity to learn from the best in the industry and build new connections. Grateful for the inspiration that sparked new research ideas.
      </div>
    </div>
  </div>
</div>

<div class="news-card">
  <div class="news-row">
    <div class="news-media-side">
      <div class="slider-container">
        <input type="radio" name="slider-2024" id="slide1">
        <input type="radio" name="slider-2024" id="slide2">
        
        <div class="slider-wrapper">
          <img src='/images/HUST1.jpg' alt="Graduation Ceremony">
          <img src='/images/HUST2.jpg' alt="Meeting Prof. Deng">
        </div>

        <div class="slider-nav">
          <label for="slide1">❮</label>
          <label for="slide2">❯</label>
        </div>

        <div class="slider-dots">
          <label for="slide1" class="dot dot-auto"></label>
          <label for="slide2" class="dot dot-auto"></label>
        </div>
      </div>
    </div>
    <div class="news-body-side">
      <span class="news-date">June 2024</span>
      <div class="news-content">
         Closing a wonderful chapter at <strong>HUST</strong>🎓! Looking back on years of dedication and growth, I owe a huge debt of gratitude to my advisor, <strong>Prof. Yong Deng</strong>, for her invaluable mentorship. This journey has laid the foundation for my passion in optics and imaging. Excited to see where these next steps lead!
      </div>
    </div>
  </div>
</div>

<div class="news-card">
  <div class="news-row">
    <div class="news-media-side">
      <img src='/images/BME2023.jpg' class="news-img-single" alt="BME 2023 Suzhou">
    </div>
    <div class="news-body-side">
      <span class="news-date">May 2023</span>
      <div class="news-content">
        Presented my first conference talk at <strong>BME 2023 (Suzhou, China)</strong> on our work regarding the full estimation of optical properties for thin <em>ex vivo</em> tissues using deep learning. It was a privilege to be the sole undergraduate speaker in my session.
      </div>
    </div>
  </div>
</div>