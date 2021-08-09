class Food {
    constructor(){
        this.foodStock=17;
        this.image =loadImage("milkImage.png");
        this.lastFed;
    
    }
    updateFoodStock(foodStock){
    this.foodStock = foodStock
    }
    deductFood(){
    if (this.foodStock > 0){
        this.foodStock= this.foodStock-1;
    }
    }
    getFedTime(lastFed){
        this.lastFed= lastFed;
    }
    getFoodStock(){
    return this.foodStock;
    }
    display(){
        var x=550,y=220;
    
        imageMode(CENTER);
        image(this.image,750,220,70,70);

        if(this.foodStock!=0){
            for(var i=0;i<this.foodStock;i++){
                if(i%10==0){
                    x=250;
                    y=y+50;
                }
                image(this.image,x,y,50,50);
                x=x+30;
            }
        }
        
            }
        }
    

    