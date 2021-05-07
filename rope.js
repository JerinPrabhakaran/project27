class Rope{
    constructor(body1 ,body2 ,offsetX ,offsetY){
        this.offsetX = offsetX;
        this.offsetY = offsetY;
      var options={
         bodyA:body1,
         bodyB:body2,
         pointB:{x:this.offsetX ,y:this.offsetY}
      }
      this.rope = Constraint.create(options);
World.add(world,this.rope);
    }
display()
{
    var pointA = this.rope.bodyA.position;
    var pointB = this.rope.bodyB.position;

    var body1X = pointA.x;
    var body1Y = pointA.y;
    var body2X = pointB.x+this.offsetX;
    var body2Y = pointB.y+this.offsetY;
    strokeWeight(2);
    line( body1X ,body1Y ,body2X ,body2Y);
}
}