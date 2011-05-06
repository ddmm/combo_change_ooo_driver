var win = Titanium.UI.currentWindow;

// createImageView, createAnimation, createSound
var belt = Titanium.UI.createImageView({
	image:'../images/belt.png',
    width: 400,
});
var driver = Titanium.UI.createImageView({
	image:'../images/' + win.combo + '.png',
    width: 400,
});
var anime = Titanium.UI.createAnimation({
    transform: Ti.UI.create2DMatrix({rotate: 28}),
    duration: 200,
});
var sound = Titanium.Media.createSound({
    url:'../sounds/' + win.combo + '.mp3',
    file_exists_and_play: function() {
        f = Ti.Filesystem.getFile('sounds/' + win.combo + 'hoge.mp3');
        if (!f.exists()) {
            alert('歌（がないの）は気にするな！')
            return;
        }
        sound.play();
    }
});

// addEventListener
driver.addEventListener('click', function()
{
    driver.animate(anime);
    sound.file_exists_and_play();
});

// win.add
win.add(belt);
win.add(driver);
