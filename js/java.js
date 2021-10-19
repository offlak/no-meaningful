// サイトのパクリ url "https://coco-factory.jp/ugokuweb/move01/4-1-2/""
var bar = new ProgressBar.Line(splash_text, {//id名を指定
	easing: 'easeInOut',//アニメーション効果linear、easeIn、easeOut、easeInOutが指定可能
	duration: 1000,//時間指定(1000＝1秒)
	strokeWidth: 0.3,//進捗ゲージの太さ
	color: '#fff',//進捗ゲージのカラー
	trailWidth: 0.3,//ゲージベースの線の太さ
	trailColor: 'black',//ゲージベースの線のカラー
	text: {//テキストの形状を直接指定				
		style: {//天地中央に配置
			position: 'absolute',
			left: '50%',
			top: '50%',
			padding: '0',
			margin: '-30px 0 0 0',//バーより上に配置
			transform:'translate(-50%,-50%)',
			'font-size':'1.5rem',
			color: '#fff',
		},
		autoStyleContainer: false //自動付与のスタイルを切る
	},
	step: function(state, bar) {
		bar.setText(Math.round(bar.value() * 100) + ' %'); //テキストの数値
	}
});

//アニメーションスタート
bar.animate(1.0, function () {//バーを描画する割合を指定します 1.0 なら100%まで描画します
	$("#splash").delay(500).fadeOut(800);//アニメーションが終わったら#splashエリアをフェードアウト
});  
// ハンバーガーメニュー
$(".openbtn").click(function () {
		if ($('.anmon').length) {
			$(this).toggleClass('active');
			$("#g-nav").toggleClass('panelactive');//ナビゲーションにpanelactiveクラスを付与
			$("#anmseigyo").removeClass('anmon');
		}else{
			$(".openbtn").removeClass('active');//ボタンの activeクラスを除去し
			$("#g-nav").removeClass('panelactive');//ナビゲーションのpanelactiveクラスも除去
			setTimeout(function(){
				$("#anmseigyo").toggleClass('anmon');
			},1000);
		}
});
// ナビゲーション
$("#g-nav a").click(function () {//ナビゲーションのリンクがクリックされたら
	$(".openbtn").removeClass('active');//ボタンの activeクラスを除去し
	$("#g-nav").removeClass('panelactive');//ナビゲーションのpanelactiveクラスも除去
	$("#anmseigyo").toggleClass('anmon');
});
// スライドショー
$('.slider').slick({
	autoplay: false,//自動的に動き出すか。初期値はfalse。
	infinite: true,//スライドをループさせるかどうか。初期値はtrue。
	slidesToShow: 2,//スライドを画面に3枚見せる
	slidesToScroll: 1,//1回のスクロールで3枚の写真を移動して見せる
	prevArrow: '<div class="slick-prev"></div>',//矢印部分PreviewのHTMLを変更
	nextArrow: '<div class="slick-next"></div>',//矢印部分NextのHTMLを変更
	responsive: [
		{
		breakpoint: 769,//モニターの横幅が769px以下の見せ方
		settings: {
			slidesToShow: 1,//スライドを画面に2枚見せる
			slidesToScroll: 1,//1回のスクロールで2枚の写真を移動して見せる
		}
	}
]
});