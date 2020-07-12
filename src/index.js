// const sum = require('./sum');
import './index.css';
import { createPlatform } from './platform';

document.addEventListener("DOMContentLoaded", function(event) {
  const homeSection = document.createElement('section');
  homeSection.classList.add('flex_column');
  homeSection.classList.add('h100');
  document.body.appendChild(homeSection);

  const pageTitle = document.createElement('h1');
  pageTitle.innerHTML = `Go genetic algorythm`;
  pageTitle.classList.add('page_title');;
  homeSection.appendChild(pageTitle);

  createPlatform(homeSection);
});