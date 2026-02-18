---
layout: archive
title: "Teaching"
permalink: /teaching/
author_profile: true
---

{% include base_path %}

<style>
.teaching-card {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    background: #fff;
    border: 1px solid #e0e0e0;
    border-radius: 8px;
    padding: 20px;
    margin-bottom: 25px;
    box-shadow: 0 2px 5px rgba(0,0,0,0.05);
}
.teaching-img {
    flex: 0 0 200px;
    max-width: 100%;
}
.teaching-img img {
    width: 100%;
    height: auto;
    border-radius: 4px;
    object-fit: cover;
    border: 1px solid #f0f0f0;
}
.teaching-content {
    flex: 1;
    min-width: 300px;
    display: flex;
    flex-direction: column;
    justify-content: center;
}
.course-title {
    font-size: 1.2em;
    font-weight: bold;
    color: #333;
    margin-bottom: 5px;
    line-height: 1.2;
}
.course-meta {
    font-size: 0.9em;
    color: #666;
    margin-bottom: 8px;
    display: flex;
    gap: 10px;
    align-items: center;
}
.meta-tag {
    background-color: #E8F0F8;
    color: #00539B;
    padding: 2px 8px;
    border-radius: 4px;
    font-size: 0.85em;
    font-weight: 600;
}
.btn-outline {
    display: inline-block;
    padding: 3px 10px;
    margin-right: 5px;
    border: 1px solid #ccc;
    border-radius: 4px;
    color: #333;
    text-decoration: none;
    font-size: 0.85em;
    transition: all 0.3s ease;
}
.btn-outline:hover {
    background-color: #f7f7f7;
    border-color: #999;
    text-decoration: none;
}
</style>

<div class="teaching-card">
  <div class="teaching-img">
    <img src="/images/BME548_logo.jpg" alt="BME 548 Course Image">
  </div>

  <div class="teaching-content">
    <div class="course-title" style="margin-bottom: 8px;">BME 548: Machine Learning and Imaging</div>
    
    <div class="course-meta" style="margin-bottom: 6px;">
      <span class="meta-tag">Spring 2026</span>
      <span class="meta-tag">Teaching Assistant</span>
    </div>

    <p style="font-size: 0.95em; margin-top: 5px; margin-bottom: 8px; line-height: 1.4; color: #333;">
      This graduate course explores deep learning for diagnostic imaging (MRI, CT, microscopy) with a specific focus on hardware-software co-design.
    </p>

    <div style="font-size: 0.9em; color: #444; margin-bottom: 12px; display: flex; align-items: center;">
      <i class="fas fa-user-tie" style="margin-right: 6px; color: #888;"></i>
      <span>
        <strong>Instructor:</strong> 
        <a href="https://bme.duke.edu/people/roarke-horstmeyer/" style="color: #333; text-decoration: underline; text-decoration-color: #ccc;">Prof. Roarke Horstmeyer</a>
      </span>
    </div>

    <div>
      <a href="https://deepimaging.github.io/" class="btn-outline"><i class="fas fa-globe"></i> Course Website</a>
    </div>
  </div>
</div>