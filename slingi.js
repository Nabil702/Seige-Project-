class slingi{
	constructor(bodyA,pointB)
	{
		var options={ bodyA:bodyA,			 
			pointB:pointB, 
			stiffness:0.04,
			length:1
			
		}
		
		this.bodyA=bodyA
		this.pointB=pointB
		this.seige=Constraint.create(options)
		World.add(world,this.seige)
	}

	attach(body){
		this.seige.bodyA=body ;
	}

	fly()
	{
		this.seige.bodyA=null;
	}

	display()
	{
		if(this.seige.bodyA)
		{
			var pointA=this.bodyA.position;
			var pointB=this.pointB
			strokeWeight(6);		
			line(pointA.x,pointA.y,pointB.x,pointB.y);
		}
	}
}