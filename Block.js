class Block{
    constructor(x, y, width, height) {
          var options = {
              'restitution':1,
            // 'friction':1,
              //'density':1
          }
          this.body = Bodies.rectangle(x, y, width, height, options);
          this.width = width;
          this.height = height;
          
          World.add(world, this.body);
          this.visibility=255
        }
        score(){
          if(this.visibility<0&&this.visibility>-1000){
            score++;
          }
        }
        display(){
         
        if(this.body.speed<7){
           var pos =this.body.position;
           var angle = this.body.angle;
           push();
            translate(pos.x, pos.y);
            rotate(angle);
           rectMode(CENTER);
           // fill("green");
            rect(0, 0, this.width, this.height);
            pop();
        }
        else{
        World.remove(world,this.body)
          push();
          this.visibility=this.visibility-10;
          tint(255,this.visibility)
        //  image(this.imgethis.body.position.x,this.body.position.y,20,20);
         pop();
            
       }
        }
      };