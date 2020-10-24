class Chain{

constructor(body1A,body2B){

var options = {

bodyA:body1A,

bodyB:body2B,

stiffness:0.05,

length : 15

}

this.chain = Constraint.create(options);

World.add (world,this.chain);



}

display(){

var point1A=this.chain.bodyA.position;

var point2B=this.chain.bodyB.position;

strokeWeight(4);

line(point1A.x,point1A.y,point2B.x,point2B.y);

}






}