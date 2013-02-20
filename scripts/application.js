$( document ).ready( function(){
    var video = document.getElementById('video');
    var canvas = document.getElementById('canvas');
    var context = canvas.getContext('2d');


    //var cw = Math.floor(canvas.clientWidth / 100);
    //var ch = Math.floor(canvas.clientHeight / 100);
    var cw = Math.floor(canvas.clientWidth);
    var ch = Math.floor(canvas.clientHeight);
    canvas.width = cw;
    canvas.height = ch;

    video.addEventListener('play', function(){
        draw(this,context,cw,ch);
    },false);


    $('body').keydown(function(e){
        switch (e.keyCode) {
            case 32:
                console.log('space');
                context.scale(0.95,0.95);
                if (clear) clearBG(context);
                break;
            case 13:
                console.log('enter');
                context.scale(1.05,1.05);
                if (clear) clearBG(context);
                break;
            case 40:
                console.log('down');
                context.translate(0,20);
                if (clear) clearBG(context);
                break;
            case 38:
                console.log('up');
                context.translate(0,-20);
                if (clear) clearBG(context);
                break;
            case 37:
                console.log('left');
                context.translate(-20,0);
                if (clear) clearBG(context);
                break;
            case 39:
                console.log('right');
                context.translate(20,0);
                if (clear) clearBG(context);
                break;
            case 84:
                console.log('t');
                clear = !clear;
                console.log("Clear: " + clear);
                break;
            default:
                console.log('???');
            }
    });
});


function draw(video,canvas,w,h) {
    if(video.paused || video.ended) return false;
    canvas.drawImage(video,0,0,w,h);
    setTimeout(draw,20,video,canvas,w,h);
}


function clearBG(ctx) {
    // Store the current transformation matrix
    ctx.save();
    // Use the identity matrix while clearing the canvas
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    // Restore the transform
    ctx.restore();
}

var clear = true;

