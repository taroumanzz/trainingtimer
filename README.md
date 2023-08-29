# TrainingTimer
- トレーニング中に使用するタイマーアプリです。
- 集中が途切れダラダラしたものになりがちなトレーニングを、どうにかアプリ側からサポートできないかと考えて制作しました。
- 各トレーニング時間・休憩時間は1〜5分の間で選択し、タイマーをそれぞれ交互に動作させつつ、総トレーニング時間・総セット数と併せて表示しています。
- より集中を促せるよう、時間の切り替わりを背景色やサウンドでもアナウンスしています。
- 最初は総トレーニング時間が60分以上になると正しく表示されなくなることに気づき、悩みました。初めはif文で条件分岐させて対応しましたが、より拡張性を持たせるために現在は計算式を変更して対応してあります。
- また最初はタイマーの切り替えもうまく動作しませんでしたが、変数をカウンターとして用いて切り替わるよう対応してあります。

#### 各トレーニング時間・休憩時間を選択 
![7F62DA6F-F96C-4281-A77B-90825FD72E20](https://github.com/taroumanzz/trainingtimer/assets/132829933/f22582a9-99e7-487f-b815-33731cc4ebab)

#### 動作開始前はやる気の出るオレンジ系の背景色にしてあります。  
![DA3BA965-0752-4AE9-BE3D-189A86901B13](https://github.com/taroumanzz/trainingtimer/assets/132829933/6ad9d8fa-9276-4141-9535-c5a4fbe12111)

#### トレーニング中は集中やモチベーションアップを狙い、背景色を赤にしてあります。  
![F6E21ED6-5DC5-41E0-AB52-6F5EEC3F6477](https://github.com/taroumanzz/trainingtimer/assets/132829933/7d4b6727-7043-4df0-bb3d-6581de571de8)

#### 休憩中は鎮静効果のある青系の色で、リラックスできるように配慮しました。  
![ED03EEDE-959A-4AC4-92D6-62635D5CAADA](https://github.com/taroumanzz/trainingtimer/assets/132829933/22a22233-68a9-4703-84d9-6a3cdb6d4e0b)

# URL
https://taroumanzz.github.io/trainingtimer/

# 使用言語
1. HTML
2. CSS
3. JavaScript
