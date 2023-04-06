'use strict';

const job = document.querySelector('.job-descrip-1');
const job2 = document.querySelector('.job-descrip-2');
const job3 = document.querySelector('.job-descrip-3');
const job4 = document.querySelector('.job-descrip-4');
const joyrideBtn = document.querySelector('.joyride-btn');
const grabBtn = document.querySelector('.grab-btn');
const lalamoveBtn = document.querySelector('.lalamove-btn');
const angkasBtn = document.querySelector('.angkas-btn');
const addModal = function () {
  job.classList.add('hidden');
};
const grabremovehidden = function () {
  job.classList.add('hidden');
  job3.classList.add('hidden');
  job4.classList.add('hidden');
  job2.classList.remove('hidden');
  grabBtn.style.backgroundColor = '#76869573';
  lalamoveBtn.style.backgroundColor = '#0a192f';
  joyrideBtn.style.backgroundColor = '#0a192f';
  angkasBtn.style.backgroundColor = '#0a192f';
  joyrideBtn.style.color = '#728392';
  grabBtn.style.color = '#f5b400';
  lalamoveBtn.style.color = '#728392';
  angkasBtn.style.color = '#728392';
};
const joyrideremovehidden = function () {
  job2.classList.add('hidden');
  job3.classList.add('hidden');
  job4.classList.add('hidden');
  job.classList.remove('hidden');
  grabBtn.style.backgroundColor = '#0a192f';
  joyrideBtn.style.backgroundColor = '#76869573';
  lalamoveBtn.style.backgroundColor = '#0a192f';
  angkasBtn.style.backgroundColor = '#0a192f';
  joyrideBtn.style.color = '#f5b400';
  lalamoveBtn.style.color = '#728392';
  angkasBtn.style.color = '#728392';
  grabBtn.style.color = '#728392';
};
const lalamoveremovehidden = function () {
  job2.classList.add('hidden');
  job.classList.add('hidden');
  job4.classList.add('hidden');
  job3.classList.remove('hidden');
  grabBtn.style.color = '#728392';
  grabBtn.style.backgroundColor = '#0a192f';
  joyrideBtn.style.backgroundColor = '#0a192f';
  joyrideBtn.style.color = '#728392';
  lalamoveBtn.style.backgroundColor = '#76869573';
  angkasBtn.style.backgroundColor = '#0a192f';
  angkasBtn.style.color = '#728392';
  lalamoveBtn.style.color = '#f5b400';
};
const angkasremovehidden = function () {
  job.classList.add('hidden');
  job2.classList.add('hidden');
  job3.classList.add('hidden');
  job2.classList.add('hidden');
  job4.classList.remove('hidden');
  grabBtn.style.color = '#728392';
  grabBtn.style.backgroundColor = '#0a192f';
  joyrideBtn.style.backgroundColor = '#0a192f';
  joyrideBtn.style.color = '#728392';
  lalamoveBtn.style.backgroundColor = '#0a192f';
  angkasBtn.style.backgroundColor = '#76869573';
  angkasBtn.style.color = '#f5b400';
  lalamoveBtn.style.color = '#728392';
};

grabBtn.addEventListener('click', grabremovehidden);
joyrideBtn.addEventListener('click', joyrideremovehidden);
lalamoveBtn.addEventListener('click', lalamoveremovehidden);
angkasBtn.addEventListener('click', angkasremovehidden);
