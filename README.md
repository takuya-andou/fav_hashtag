# fav_hashtag
特定のハッシュタグをお気に入りします

#使い方
1. twitterでアプリ作成・tokenなどの準備  
参考；https://syncer.jp/twitter-api-matome
2. node.jsをインストール
3. twitterモジュールをインストール
>npm install twitter  
https://www.npmjs.com/package/twitter

4. 下記の５箇所を修正
  - consumer_key
  - consumer_secret
  - access_token_key
  - access_token_secret
  - var tag = '検索したいハッシュタグ・単語'
  
5. node ファイル名.js　を実行
