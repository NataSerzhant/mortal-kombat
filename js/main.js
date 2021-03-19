//когда все элементы страницы уже будут загружены начать..
$(document).ready(function() {
    //подключить к нашему блоку app
    $('#app').vide({
    mp4: 'video/video.mp4',
    webm: 'video/video.webm',
    ogv: 'video/video.ogv',
    poster: 'img/cover-image.svg'
    });
});