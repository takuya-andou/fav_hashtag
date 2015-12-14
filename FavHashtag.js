// twitterモジュールを読み込み
var twitter = require('twitter');
// アプリ登録時に取得したkeyを入れてOAuth認証し、初期化
var client = new twitter({
    consumer_key: 'consumer_key',
    consumer_secret: 'consumer_secret',
    access_token_key: 'access_token_key',
    access_token_secret: 'access_token_secret'
});
var tag = '#いいねした人全員フォローする';

// Public APIのstatuses/filterで取得したタイムラインを、自分のアカウント名を含む文字列でフィルターする
client.stream( 'statuses/filter', { track : tag }, function( stream ) {
    // フィルターされたデータのストリームを受け取り、ツイートのテキストを表示する
    stream.on( 'data', function( data ) {
    	var tweetid = data.id_str; // ツイートのID
		client.post('favorites/create',{id: tweetid},  function(error, tweet, response){
                      if(error) throw error;
                      console.log(response);  // Raw response object.
              });
    	});
});


