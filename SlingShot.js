class SlingShot{
    constructor(bodyA,bodyB){
        let options = {
            bodyA: bodyA.body,
            bodyB: bodyB.body,
            stifness: 0.04,
            length: 10
        }
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }
    display(){
    let pointA = this.sling.bodyA.position;
    let pointB = this.sling.bodyB.position;
    strokeWeight(3);
    line(pointA.x,pointA.y,pointB.x,pointB.y);
    }
}