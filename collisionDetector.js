function detectcollision(lstone,lmango){
    mangoBodyPosition = lmango.body.position 
    stoneBodyPosition = lstone.body.position

    var distance = dist(mangoBodyPosition.x, mangoBodyPosition.y, stoneBodyPosition.x, stoneBodyPosition.y)
    if(distance<=lmango.r+lstone.r)
    {
        Matter.Body.setStatic(lmango,false);
        console.log("distance" + distance)
        console.log("lmango" + lmango.r)
        console.log("lstone" + lstone.r)
    }
}
