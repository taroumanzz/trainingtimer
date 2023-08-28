'use strict';

{
  const body = document.querySelector('body');
  const totalTime = document.getElementById('totalTime');
  const setNum = document.getElementById('setNum');
  const trainingTime = document.getElementById('trainingTime');
  const restTime = document.getElementById('restTime');
  const setTimeStr = document.getElementById('setTimeStr');
  const restTimeStr = document.getElementById('restTimeStr');

  const s_btn = document.getElementById('s_btn');
  const e_btn = document.getElementById('e_btn');
  const t_btn = document.getElementById('t_btn');
  const n_btn = document.getElementById('n_btn');

  const startMusic = new Audio('sounds/startSound.mp3');
  const endMusic = new Audio('sounds/endSound.mp3');
  const finishMusic = new Audio('sounds/finishSound.mp3');

  const close = document.getElementById('close');

  //トレーニング時間・休憩時間の選択画面を表示
  selectTrainingTime();

  //設定したトレーニング時間・休憩時間の取得用変数
  let selectedTrainingTime;
  let selectedRestTime;

  const radioTrainingTime = document.getElementsByName('trainingTime');
  const radioRestTime = document.getElementsByName('restTime');
  
  close.addEventListener('click', () => {
    //選択したトレーニング時間を取得
    for (let i = 0; i < radioTrainingTime.length; i++) {
      if (radioTrainingTime[i].checked) {
        selectedTrainingTime = radioTrainingTime[i].value;
      }
    }
    //選択した休憩時間を取得
    for (let i = 0; i < radioRestTime.length; i++) {
      if (radioRestTime[i].checked) {
        selectedRestTime = radioRestTime[i].value;
      }
    }

    closeModalwindow();

    setTimeStr.textContent = `トレーニング時間 (${selectedTrainingTime}分)`;
    restTimeStr.textContent = `休憩時間 (${selectedRestTime}分)`;
  });

  // 最初は終了ボタン・休憩終了ボタンを非表示に
  e_btn.disabled = true;
  n_btn.disabled = true;

  // clearInterval用の識別子
  let totalIntervalId;
  let intervalId;

  // トレーニング時間・休憩時間の識別に使用
  let trainingIndex;

  // スタートの基準用変数
  let startTime;
  let startTrainingTime;
  let startRestTime;

  // セット数用変数
  let setIndex;
  
  // 総トレーニング時間を表示
  function checkTotalTime() {
    const elapsedTime = new Date().getTime() - startTime;
    const elapsedSeconds = Math.floor(elapsedTime / 1000);
    const seconds = String(elapsedSeconds % 60).padStart(2, '0');
    const minutes = Math.floor(elapsedSeconds / 60);

    // 60分以上でも正しく表示されるよう再計算
    const calculatedMinutes = String(minutes - (Math.floor(minutes / 60) * 60)).padStart(2, '0');

    const hours = Math.floor(elapsedSeconds / 3600);

    totalTime.textContent = `${hours} : ${calculatedMinutes} : ${seconds}`;
  }
  
  // 各トレーニング時間を表示
  function checkTrainingTime() {
    n_btn.disabled = true;
    const elapsedTime = new Date().getTime() - startTrainingTime;
    const elapsedSeconds = Math.floor(elapsedTime / 1000);

    // 設定時間を過ぎたら休憩時間へ移行
    if (elapsedSeconds >= selectedTrainingTime * 60){
      trainingTime.textContent = "00 : 00";
      body.classList.remove('trainingStyle');
      body.classList.add('restStyle');
      endMusic.play();
      startRestTime = new Date().getTime();
      trainingIndex++;
    } else {
      const seconds = String(elapsedSeconds % 60).padStart(2, '0');
      const minutes = String(Math.floor(elapsedSeconds / 60)).padStart(2, '0');
  
      trainingTime.textContent = `${minutes} : ${seconds}`;
    }
  }

  // 各休憩時間を表示
  function checkRestTime() {
    n_btn.disabled = false;
    const elapsedTime = new Date().getTime() - startRestTime;
    const elapsedSeconds = Math.floor(elapsedTime / 1000);

    // 設定時間を過ぎたらトレーニング時間へ移行
    if (elapsedSeconds >= selectedRestTime * 60){
      finishRest();
    } else {
      const seconds = String(elapsedSeconds % 60).padStart(2, '0');
      const minutes = String(Math.floor(elapsedSeconds / 60)).padStart(2, '0');
  
      restTime.textContent = `${minutes} : ${seconds}`;
    }
  }

  // 変数を使ってトレーニング時間・休憩時間を交互に実行
  function choiceTime() {
    if (trainingIndex === 0) {
      checkTrainingTime();
    } else {
      checkRestTime();
    }
  }

  // スタートボタンクリックでタイマーを実行
  s_btn.addEventListener('click', () => {
    startTime = new Date().getTime();
    startTrainingTime = new Date().getTime();
    startRestTime = new Date().getTime();
    trainingIndex = 0
    setIndex = 1;

    s_btn.disabled = true;
    t_btn.disabled = true;
    e_btn.disabled = false;
    body.classList.add('trainingStyle');
    startMusic.play();
    
    setNum.textContent = `${setIndex} セット`;
    totalIntervalId = setInterval(checkTotalTime, 1000);
    intervalId = setInterval(choiceTime, 1000);
  });
  
  // 終了ボタンでカウントを止め初期値に戻す
  e_btn.addEventListener('click', () => {
    clearInterval(totalIntervalId);
    clearInterval(intervalId);
    s_btn.disabled = false;
    t_btn.disabled = false;
    e_btn.disabled = true;
    n_btn.disabled = true;
    finishMusic.play();
    body.classList.remove('trainingStyle');
    body.classList.remove('restStyle');
    trainingTime.textContent = "00 : 00";
    restTime.textContent = "00 : 00";
  });

  // 再設定ボタンで時間を再選択
  t_btn.addEventListener('click', () => {
    selectTrainingTime();
  });

  // 休憩終了ボタンで強制的にトレーニング時間へ移行
  n_btn.addEventListener('click', () => {
    finishRest();
  });

  // 休憩時間を終了し、トレーニング時間へ移行する
  function finishRest() {
    restTime.textContent = "00 : 00";
    body.classList.remove('restStyle');
    body.classList.add('trainingStyle');
    setIndex++;
    setNum.textContent = `${setIndex} セット`;
    startMusic.play();
    startTrainingTime = new Date().getTime();
    trainingIndex--;
  }

  // 時間設定のモーダルウィンドウを表示
  function selectTrainingTime (){
    mask.classList.remove('hidden');
    modal.classList.remove('hidden');
  }

  // モーダルウィンドウを閉じる
  function closeModalwindow (){
    mask.classList.add('hidden');
    modal.classList.add('hidden');
  }
}