class SlingShot{
    constructor(bodyA,pointB){
        let options = {
            bodyA: bodyA,
            pointB: pointB,
            stifness: 0.04,
            length: 10
        }
        this.sling1 = loadImage("sprites/sling1.png");
        this.sling2 = loadImage("sprites/sling2.png");
        this.sling3 = loadImage("sprites/sling3.png");


        this.pointB = pointB;
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }
    atack(body){
    this.sling.bodyA = body;
    }
    fly(){
    this.sling.bodyA = null;

    }
    display(){
        image(this.sling1, 200,20);
        image(this.sling2, 170,20);
    if (this.sling.bodyA){
        let pointA = this.sling.bodyA.position;
        let pointB = this.pointB;
        push()
        if (pointA.x<220){
        strokeWeight(7);
        stroke("#301608");
        line(pointA.x-20,pointA.y,pointB.x-10,pointB.y);
        line(pointA.x-20,pointA.y,pointB.x+30,pointB.y-3);
        image(this.sling3,pointA.x-30,pointA.y-10,15,30);
        }else{
            strokeWeight(7);
            line(pointA.x+25,pointA.y,pointB.x-10,pointB.y);
            line(pointA.x+25,pointA.y,pointB.x+30,pointB.y-3);
            image(this.sling3,pointA.x+25,pointA.y-10,15,30);   
        }

        pop();
    }
    }

}