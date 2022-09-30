'use strict'; 
{
    const menuItems = document.querySelectorAll('.menu li a');
    const contents = document.querySelectorAll('.content');

    menuItems.forEach(clickedItem => {
        // clickedItem = クリックされたa要素
        clickedItem.addEventListener('click', e => {
            // a要素のリンク先にページ遷移するという規定の動作をキャンセル
            e.preventDefault();
            // item = a要素すべて
            // すべてのitemからactiveクラスを削除する
            menuItems.forEach(item => {
                item.classList.remove('active');
            });
            // クリックされたitemにだけactiveクラスをつける
            clickedItem.classList.add('active');

            contents.forEach(content => {
                content.classList.remove('active');
            });
            // クリックされたaタグに紐づいているdata-id（.content）を取得している
            document.getElementById(clickedItem.dataset.id).classList.add('active');l
        });
    });
}