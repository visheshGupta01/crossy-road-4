class Player{

constructor(x,y){

this.x = x
this.y = y
this.spt = createSprite(x, y, 50, 50)
this.spt.shapeColor = "orange"
this.spt.addAnimation("player",playerAnimation)
this.spt.scale = 0.06

}

move(xdir, ydir){

this.spt.x += xdir*grid
this.spt.y += ydir*grid

}


}