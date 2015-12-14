var twitter = require('twitter');

//変更すべき設定
var client = new twitter({
    consumer_key: 'consumer_key',
    consumer_secret: 'consumer_secret',
    access_token_key: 'access_token_key',
    access_token_secret: 'access_token_secret'
});
var tag = '検索したいハッシュタグ・単語';
//変更すべき点はここまで

client.stream( 'statuses/filter', { track : tag }, function( stream ) {
    stream.on( 'data', function( data ) {
    	var tweetid = data.id_str;
		client.post('favorites/create',{id: tweetid},  function(error, tweet, response){
                      if(error) throw error;
                      console.log(response);
              });
    	});
});


