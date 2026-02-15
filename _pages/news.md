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
    padding: 15px;
    margin-bottom: 20px;
    transition: all 0.3s ease;
  }
  .news-card:hover { box-shadow: 0 10px 30px rgba(0,0,0,0.05); }


  .news-date {
    display: inline-block;
    background: #E8F0F8;
    color: #00539B;
    padding: 2px 12px;
    border-radius: 20px;
    font-size: 0.82em;
    font-weight: 700;
    margin-bottom: 12px;
  }

  .news-row {
    display: flex;
    gap: 25px;
    align-items: flex-start;
  }

  .news-media-side {
    flex: 0 0 280px;
    max-width: 280px;
  }

  .news-body-side {
    flex: 1;
    display: flex;
    flex-direction: column;
  }

  .news-content {
    font-size: 1.0em;
    line-height: 1.6;
    color: #333;
  }

  .news-content a { color: #00539B; text-decoration: none; font-weight: 600; }
  .news-content a:hover { text-decoration: underline; }

  .news-gallery { display: flex; gap: 15px; flex-wrap: wrap; margin-top: 15px; }

  .news-img {
    width: 100%;
    border-radius: 8px;
    box-shadow: 0 4px 10px rgba(0,0,0,0.08);
    object-fit: cover;
  }

  @media (max-width: 768px) {
    .news-row { flex-direction: column; gap: 15px; }
    .news-media-side { flex: 0 0 auto; width: 100%; max-width: 100%; }
  }
</style>

<div class="news-card">
  <span class="news-date">January 2026</span>
  <div class="news-content">
    Back in SF for <strong>SPIE Photonics West</strong>! It was a busy but rewarding week giving two talks on our curvature-adaptive gigapixel microscopy and high-throughput 3D zebrafish profiling systems (watch the video <a href="https://www.youtube.com/watch?v=IXfsqg_8Y6I&t">here</a>). The "cherry on top" was unexpectedly meeting <strong>Prof. Joseph Goodman</strong>—an unforgettable moment for any optics researcher!
  </div>
  <div class="news-gallery">
    <div style="flex: 1; min-width: 200px;"><img src='/images/PW26.jpg' class="news-img" alt="Talk at PW26"></div>
    <div style="flex: 1; min-width: 200px;"><img src='/images/PW26_goodman.jpg' class="news-img" alt="Meeting Prof. Goodman"></div>
  </div>
</div>

<div class="news-card">
  <div class="news-row">
    <div class="news-media-side">
      <img src='/images/PW25.jpg' class="news-img" alt="Moscone Center">
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
      <img src='/images/BME2023.jpg' class="news-img" alt="BME 2023 Suzhou">
    </div>
    <div class="news-body-side">
      <span class="news-date">May 2023</span>
      <div class="news-content">
        Presented my first conference talk at <strong>BME 2023 (Suzhou, China)</strong> on our work regarding the full estimation of optical properties for thin <em>ex vivo</em> tissues using deep learning. It was a privilege to be the sole undergraduate speaker in my session.
      </div>
    </div>
  </div>
</div>