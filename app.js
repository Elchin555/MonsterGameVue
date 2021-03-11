new Vue({
	el:"#app",
	data:{
		show:true,
		player:100,
		monster:100,

		logs:[]
	},
	methods:{
		startGame:function(){
        this.show=!this.show
		},
		playerAttack:function(){
			this.monsterAttack();
			p=Math.ceil(Math.random()*10)
			this.monster-=p
			this.add_to_log({turn:"p",text:"Player shoot"+" "+p+" point"})



		},
		specialAttack:function(){
			this.monsterAttack();
			p=Math.ceil(Math.random()*25)
			this.monster-=p
			this.add_to_log({turn:"p",text:"Player special shoot"+" "+p+" point"})


		},
		healthy:function(){

			this.playerAttack();
			this.player+=10
			// this.add_to_log({turn:"p",text:"Player shoot"+" "+p+" point"})

		},
		giveUp:function(){
             this.player=0
			this.add_to_log({turn:"p",text:"Player game over "})

		},
		monsterAttack:function(){
			p=Math.ceil(Math.random()*15)
			this.player-=p
			this.add_to_log({turn:"m",text:"Monster shoot"+" "+p+" point"})
			
		},
		add_to_log:function(log){
			this.logs.push(log)
		}
	},
	watch:{
		player:function(value){
			if(value>=100){
				this.player=100
			}
             
			
			else if(value<=0){
				this.player=0;
				this.logs=[];
				if(confirm("You lost the game. Do you want to play again?")){
					this.player=100;
					this.monster=100;
				}
		}
			},
			monster:function(value){
				if(value<=0){
					this.monster=0;
				   this.logs=[];
					if(confirm("You win the game. Do you want to play again?")){
					this.player=100;
					this.monster=100;
				}
				}
			}
	}
})