class Slingshot {
    constructor(body1, pointB) {
        var options = {
            bodyA: body1.body,
            pointB: pointB,
            length: 50,
            stiffness: 0.04
        }
        this.pointB = pointB
        this.body = Constraint.create(options)
        World.add(world, this.body)
        this.sling1 = loadImage("sprites/sling1.png");
        this.sling2 = loadImage("sprites/sling2.png");
        this.sling3 = loadImage("sprites/sling3.png");

    }
    display() {
        image(this.sling1, 200, 20)
        image(this.sling2, 170, 20)

        if (this.body.bodyA != null) {
            var posA = this.body.bodyA.position
            var posB = this.pointB
            stroke(127, 65, 32)
            if (posA.x < 220) {
                strokeWeight(4)
                line(posA.x - 15, posA.y, posB.x - 10, posB.y)
                line(posA.x - 15, posA.y, posB.x + 25, posB.y)
                image(this.sling3, posA.x - 30, posA.y - 10, 15, 30)
            }else{
                strokeWeight(7)
                line(posA.x-15,posA.y,posB.x-10,posB.y)
                line (posA.x+15,posA.y,posB.x+25,posB.y)
                image (this.sling3,posA.x+25,posA.y-10,15,30)  
            }

            


        }

    }
    fly() {
        this.body.bodyA = null
    }
    attach(body){
        this.body.bodyA = body
        this.body.bodyA.position.x = 200
        this.body.bodyA.position.y = 100
    }
}