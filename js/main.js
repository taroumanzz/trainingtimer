'use strict';

{
  const totalTime = document.getElementById('totalTime');
  const announceTime = document.getElementById('announceTime');
  const trainingTime = document.getElementById('trainingTime');
  const restTime = document.getElementById('restTime');
  const btn = document.getElementById('btn');

  // トレーニング時間・休憩時間の識別に使用
  let trainingIndex = 0;

  let startTime;
  let startTrainingTime;
  let startRestTime;
  
  // 総トレーニング時間を表示
  function checkTotalTime() {
    const elapsedTime = new Date().getTime() - startTime;
    const elapsedSeconds = Math.floor(elapsedTime / 1000);
    const seconds = String(elapsedSeconds % 60).padStart(2, '0');
    const minutes = Math.floor(elapsedSeconds / 60);
    // 60分以上でも正しく表示
    const calculatedMinutes = String(minutes - (Math.floor(minutes / 60) * 60)).padStart(2, '0');
    // let calculatedMinutes = Math.floor(elapsedSeconds / 60);
    // let minutes;
    // if (calculatedMinutes >= 120){
    //   minutes = String(calculatedMinutes -= 120).padStart(2, '0');
    // } else if (calculatedMinutes >= 60){
    //   minutes = String(calculatedMinutes -= 60).padStart(2, '0');
    // } else {
    //   minutes = String(calculatedMinutes).padStart(2, '0');
    // };
    const hours = Math.floor(elapsedSeconds / 3600);

    totalTime.textContent = `${hours} : ${calculatedMinutes} : ${seconds}`;
  }
  
  // 各トレーニング時間を表示
  function checkTrainingTime() {
    const elapsedTime = new Date().getTime() - startTrainingTime;
    const elapsedSeconds = Math.floor(elapsedTime / 1000);

    if (elapsedSeconds >= 180){
      trainingTime.textContent = "00 : 00";
      startRestTime = new Date().getTime();
      trainingIndex++;
    } else {
      const seconds = String(elapsedSeconds % 60).padStart(2, '0');
      const minutes = String(Math.floor(elapsedSeconds / 60)).padStart(2, '0');
  
      trainingTime.textContent = `${minutes} : ${seconds}`;
    };
  }

  // 各休憩時間を表示
  function checkRestTime() {
    const elapsedTime = new Date().getTime() - startRestTime;
    const elapsedSeconds = Math.floor(elapsedTime / 1000);

    if (elapsedSeconds >= 180){
      restTime.textContent = "00 : 00";
      startTrainingTime = new Date().getTime();
      trainingIndex--;
    } else {
      const seconds = String(elapsedSeconds % 60).padStart(2, '0');
      const minutes = String(Math.floor(elapsedSeconds / 60)).padStart(2, '0');
  
      restTime.textContent = `${minutes} : ${seconds}`;
    };
  }

  // トレーニング・休憩時間を交互に実行
  function choiceTime() {
    if (trainingIndex === 0) {
      checkTrainingTime();
    } else {
      checkRestTime();
    };
  }

  // タイマーを実行
  btn.addEventListener('click', () => {
    startTime = new Date().getTime();
    startTrainingTime = new Date().getTime();
    startRestTime = new Date().getTime();
    setInterval(checkTotalTime, 1000);
    setInterval(choiceTime, 1000);
    // setInterval(checkRestTime, 1000);
  });
}