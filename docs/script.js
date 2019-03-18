$(function () {

    $('body').hide().fadeIn(8000);

    $('#age').text('年齢 ' + getAge(1989, 5, 15) + '歳');

    // #で始まるアンカーをクリックした場合に処理
    $('.navi_menu a, .footer_navi_menu a, #scroll_back, #works a').click(function () {
        console.log('クリック!');
        // スクロールの速度
        var speed = 800; // ミリ秒
        // アンカーの値取得
        var href = $(this).attr("href");
        // 移動先を取得
        var target = $(href == "#" || href == "" ? 'html' : href);
        // 移動先を数値で取得
        var position = target.offset().top;
        // スムーススクロール
        $('html, body').animate({
            scrollTop: position
        }, {
                duration: speed,
                easing: 'easeInOutQuart'
            });

        return false;
    });

    function getAge(year, month, day) {
        var birthday = new Date(year, month - 1, day);
        var today = new Date();
        var thisYearBirthday = new Date(today.getFullYear(), birthday.getMonth(), birthday.getDate());
        var age = today.getFullYear() - birthday.getFullYear();
        return (today < thisYearBirthday) ? age - 1 : age;
    }

})