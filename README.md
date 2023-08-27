# TrainingTimer
- トレーニング中に使用するタイマーアプリです。
- 集中が途切れだらだらしたものになりがちなトレーニングを、どうにかアプリ側からサポートできないかと考えて制作しました。
- 各セット時間・休憩時間は1〜5分の間で選択し、タイマーをそれぞれ交互に動作させつつ、総トレーニング時間・総セット数と併せて表示しています。
- より集中を促せるよう、時間の切り替わりを背景色やサウンドでもアナウンスしています。
- 最初は総トレーニング時間が60分以上になると正しく表示されなくなることに気づき、悩みました。初めはif文で条件分岐させて対応しましたが、より拡張性を持たせるために現在は計算式を変更して対応してあります。
- また最初はタイマーの切り替えもうまく動作しませんでしたが、変数をカウンターとして用いて切り替わるよう対応してあります。
<br>

![6F4E6421-9981-4596-8646-901ED1466D27_1_105_c](https://github.com/taroumanzz/myportfolio/assets/132829933/0505ba70-021a-46b8-b6c6-0fd54f117417)
各セット時間・休憩時間を選択

![6F0225E6-8364-4406-AE7E-0D84A46DFE37_1_105_c](https://github.com/taroumanzz/myportfolio/assets/132829933/20779aae-eeae-4089-81be-146c8153362d)
動作開始前はやる気の出るオレンジ系の背景色にしてあります。

![FBC6B399-17A6-44DA-94CB-976FEC220B15_1_105_c](https://github.com/taroumanzz/myportfolio/assets/132829933/755eaaaa-cb02-4ae2-955b-c84cff06eab4)
トレーニング中は集中やモチベーションアップを狙い、背景色を赤にしてあります。

![367F739F-3AC5-450D-8989-4056DE5C79B1](https://github.com/taroumanzz/myportfolio/assets/132829933/31d2614d-c338-4bf0-a9e7-d321cae8f9ba)
休憩中は鎮静効果のある青系の色で、リラックスできるように配慮しました。

# URL
https://taroumanzz.github.io/trainingtimer/

# 使用言語
1. HTML
2. CSS
3. JavaScript
