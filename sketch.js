var ball;
var database
function setup(){
    createCanvas(500,500);
    database=firebase.database()
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";
    var dbref=database.ref("ballposition")
    dbref.on("value",readinfomation)
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        changePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        changePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        changePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        changePosition(0,+1);
    }
    drawSprites();
}

function changePosition(x,y){
    database.ref("ballposition").update({
        x:ball.x+x,
        y:ball.y+y
    })

}
function readinfomation(data){
    var pos=data.val()
    ball.x=pos.x
    ball.y=pos.y
}
