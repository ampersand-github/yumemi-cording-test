# README

ゆめみコーディングテスト(フロントエンド)

## このリポジトリについて

- ゆめみコーディングテスト(フロントエンド)の課題を解いたリポジトリです。
- このリポジトリは、[ampersand-github/next-template](https://github.com/ampersand-github/next-template) から作成しています。

## 質問

### 課題の取り組み開始から完了までに要した合計時間

27H  
うち、実装部分が 14H、環境構築などが 13H です。  
詳細は[miro](https://miro.com/app/board/uXjVM2ncf_A=/?share_link_id=189412861876/)のタスクシートに記載してあります。

### これまでの総合的なプログラミング歴

- 2016 - 2019 : OracleSQL
- 2019 - 2022 : Flutter, React, Firebase
- 2022 - 2023 : Next.js, NestJS, AWS

計：7 年  
詳細は[職務経歴 - ampersand の開発記](https://blog.ampersand.today/career/resume)に記述してあります。

### これまでの WEB フロントエンドプログラミング歴

- 2019 - 2022 : Flutter, React, Firebase
- 2022 - 2023 : Next.js, NestJS, AWS

計：3〜4 年  
詳細は[職務経歴 - ampersand の開発記](https://blog.ampersand.today/career/resume)に記述してあります。

### 着手にあたり参考にしたページや書籍、リポジトリ

- [ampersand-github/next-template](https://github.com/ampersand-github/next-template)
- [shadcn/ui](https://ui.shadcn.com/)

## なぜ

### なぜタスク管理を miro で行うのか

タスク管理なら、github の issue や backlog が一般的です。  
しかし、今回は、miro を使うことにしました。  
理由として

- backlog は、markdown が使いづらい
- github の issue は、みんな使うので面白みがない

です。

最近なら notion のプロジェクトテンプレートが優秀と聞くので、notion+miro の組み合わせも良いと思います。

### なぜストーリーポイントでなく工数で見積もるのか

ストーリーポイントはチームで複数スプリントに渡って開発を行う場合に有効です。  
今回は、1 人で開発を行うので、工数で見積もることにしました。

### なぜ GCP を使うのか

実務を考えたときのインフラ選択肢として、AWS, GCP, Firebase, Vercel があります。  
Firebase は

- docker ベースのホスティングができないこと
- RDB がない

以上の理由から除外しました。  
Vercel は RDB がベータ版であること を理由を除外しました。

残りの AWS と GCP ですが、GCP の方が扱いやすいという理由で GCP を選択しました。

## やっていないこと

### recharts に由来する警告の対処

やってません

### style は自分で記述し、UI フレームワークなどは原則使用しないこと

tailwind で書いたあとに CSS に書き直そうかと思いましたが、やっていません。  
tailwind は素の CSS に近いので、tailwind でもスタイリング力を測れると思っています。

## E2E テスト

やってません。このぐらいの規模感からすると、E2E テストは必要ないと思っています。  
単体テストとストーリーブックのデザイン確認を充実させることで、E2E テストは手動でもいいと思っています。  
(フロントエンドのテストはかなり悩んでいます)

## リンク

- [miro](https://miro.com/app/board/uXjVM2ncf_A=/?share_link_id=189412861876/)
