class rope{
	constructor(body1,body2, offsetX)
	{
		var options={
			bodyA:body1,
			bodyB:body2
		}

		this.rope=Constraint.create(options)
		World.add(world,this.rope)

		this.offsetX = offsetX
	}

	display()
	{
		var pointA=this.rope.bodyA.position;
		var pointB=this.rope.bodyB.position;

		strokeWeight(2);

		//WRITE THE CORRECT CODE TO RENDER A LINE BETWEEN THE TWO BODIES
		  stroke("red")
		  line(bob1.x,roofObject.y,bob1.x,bob1.y)
		  line(bob2.x,roofObject.y,bob2.x,bob2.y)
		  line(bob3.x,roofObject.y,bob3.x,bob3.y)
		  line(bob4.x,roofObject.y,bob4.x,bob4.y)
		  line(bob5.x,roofObject.y,bob5.x,bob5.y)
		
	}

}