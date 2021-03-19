window.onload = function() {
function like_click() {
    document.querySelector('#bt_like_').style.display = "block";
    document.querySelector('#bt_like').style.display = "none";
}
function like_unclick() {
    document.querySelector('#bt_like').style.display = "block";
    document.querySelector('#bt_like_').style.display = "none";
}

document.querySelector('#bt_like').addEventListener('click', like_click);
document.querySelector('#bt_like_').addEventListener('click', like_unclick);


function dislike_click() {
    document.querySelector('#bt_dislike_').style.display = "block";
    document.querySelector('#bt_dislike').style.display = "none";
}
function dislike_unclick() {
    document.querySelector('#bt_dislike').style.display = "block";
    document.querySelector('#bt_dislike_').style.display = "none";
}

document.querySelector('#bt_dislike').addEventListener('click', dislike_click);
document.querySelector('#bt_dislike_').addEventListener('click', dislike_unclick);

function subscribe_click() {
    document.querySelector('#subscribe_').style.display = "block";
    document.querySelector('#subscribe').style.display = "none";
}
function subscribe_unclick() {
    document.querySelector('#subscribe').style.display = "block";
    document.querySelector('#subscribe_').style.display = "none";
}

document.querySelector('#subscribe').addEventListener('click', subscribe_click);
document.querySelector('#subscribe_').addEventListener('click', subscribe_unclick);

// function share_click() {
//     document.querySelector('#share-pop').style.display = 'block';
// }

// document.getElementById('bt_share').addEventListener('click', share_click);

};