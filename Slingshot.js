class Slingshot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 1,
            length: 10
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
        

    }

    attach(body){
        this.sling.bodyA = body;
    }
    
   
    fly(){
        this.sling.bodyA = null;
    }
    display(){
       
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(10);
            line(pointA.x-10, pointA.y, pointB.x-10, pointB.y);
            line(pointA.x-10,pointA.y,pointB.x+20,pointB.y);
        }
    }
    
}