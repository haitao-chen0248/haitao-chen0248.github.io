---
layout: archive
title: "Talks and Presentations"
permalink: /talks/
author_profile: true
---

<style>
  .talk-item {
    display: flex;
    gap: 30px;
    margin-bottom: 50px;
    padding: 20px;
    background: #ffffff;
    border-radius: 12px;
    border: 1px solid #f0f0f0;
    transition: all 0.3s ease;
  }
  
  .talk-item:hover {
    box-shadow: 0 10px 30px rgba(0,0,0,0.05);
  }

  .talk-video {
    flex: 0 0 350px;
    max-width: 350px;
  }

  .video-container {
    position: relative;
    padding-bottom: 56.25%;
    height: 0;
    overflow: hidden;
    border-radius: 8px;
    background: #000;
  }

  .video-container iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .talk-info {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .talk-date-badge {
    display: inline-block;
    background: #E8F0F8;
    color: #00539B;
    padding: 2px 12px;
    border-radius: 20px;
    font-size: 0.85em;
    font-weight: 600;
    margin-bottom: 10px;
  }

  .talk-title-text {
    font-size: 1.25em;
    font-weight: 700;
    margin: 0 0 12px 0 !important;
    line-height: 1.4;
    color: #222;
  }

  .talk-venue {
    font-size: 0.95em;
    color: #666;
    margin-bottom: 10px;
  }

  
  @media (max-width: 900px) {
    .talk-item { flex-direction: column; gap: 20px; }
    .talk-video { flex: 0 0 auto; width: 100%; max-width: 100%; }
  }
</style>

<div class="talk-item">
  <div class="talk-video">
    <div class="video-container">
      <iframe src="https://www.youtube.com/embed/IXfsqg_8Y6I" frameborder="0" allowfullscreen></iframe>
    </div>
  </div>
  
  <div class="talk-info">
    <span class="talk-date-badge">January 2026</span>
    <h3 class="talk-title-text">Automated 3D behavioral profiling of zebrafish larvae at high throughput</h3>
    
    <div class="talk-venue">
      <strong style="display: block; margin-bottom: 6px; color: #333;">SPIE Photonics West 2026</strong>
      <span style="color: #888; font-size: 0.92em;">
        <i class="fas fa-map-marker-alt"></i> San Francisco, CA
      </span>
    </div>
  </div>
</div>