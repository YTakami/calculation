// KPR Script file
var stride = 16;
var state = [];
var Startbehavior = function(){
}
Startbehavior.prototype = Object.create(Object.prototype, {
	onTouchBegan: {
		value: function(start) {
			var tem1, tem10,ope;	
			tem1 = Math.floor(Math.random() * 10);
			tem10 = Math.floor(Math.random() * 10);
			ope = Math.floor(Math.random() * 10);
			var no1, no10,enz,ans;
			
			if(ope<3) {
				enz = Files.readText(mergeURI(application.url, "./operator/plus.txt"));
				ans = tem10+tem1;
			}
			else if(ope<6) {
				enz = Files.readText(mergeURI(application.url, "./operator/minus.txt"));
				ans = tem10-tem1;
			}
			else {
				enz = Files.readText(mergeURI(application.url, "./operator/multiply.txt"));
				ans = tem10*tem1;
			}
			
			switch(tem1){
				case 1:
					no1 = Files.readText(mergeURI(application.url, "./number/one.txt"));
					break;
				case 2:
					no1 = Files.readText(mergeURI(application.url, "./number/two.txt"));
					break;
				case 3:
					no1 = Files.readText(mergeURI(application.url, "./number/three.txt"));
					break;
				case 4:
					no1 = Files.readText(mergeURI(application.url, "./number/four.txt"));
					break;
				case 5:
					no1 = Files.readText(mergeURI(application.url, "./number/five.txt"));
					break;
				case 6:
					no1 = Files.readText(mergeURI(application.url, "./number/six.txt"));
					break;
				case 7:
					no1 = Files.readText(mergeURI(application.url, "./number/seven.txt"));
					break;
				case 8:
					no1 = Files.readText(mergeURI(application.url, "./number/eight.txt"));
					break;
				case 9:
					no1 = Files.readText(mergeURI(application.url, "./number/nine.txt"));
					break;
				case 0:
					no1 = Files.readText(mergeURI(application.url, "./number/zero.txt"));
					break;
			}
			switch(tem10){
				case 1:
					no10 = Files.readText(mergeURI(application.url, "./number/one.txt"));
					break;
				case 2:
					no10 = Files.readText(mergeURI(application.url, "./number/two.txt"));
					break;
				case 3:
					no10 = Files.readText(mergeURI(application.url, "./number/three.txt"));
					break;
				case 4:
					no10 = Files.readText(mergeURI(application.url, "./number/four.txt"));
					break;
				case 5:
					no10 = Files.readText(mergeURI(application.url, "./number/five.txt"));
					break;
				case 6:
					no10 = Files.readText(mergeURI(application.url, "./number/six.txt"));
					break;
				case 7:
					no10 = Files.readText(mergeURI(application.url, "./number/seven.txt"));
					break;
				case 8:
					no10 = Files.readText(mergeURI(application.url, "./number/eight.txt"));
					break;
				case 9:
					no10 = Files.readText(mergeURI(application.url, "./number/nine.txt"));
					break;
				case 0:
					no10 = Files.readText(mergeURI(application.url, "./number/zero.txt"));
					break;
			}
				
			for(var y=0;y<5;y++){
				for(var x=0;x<3;x++){
					var line = no10.slice(x+y*3,x+y*3+1);
					if(line>0) state[x+(y+1)*stride] = true;
					else state[x+(y+1)*stride] = false;
					
					var line1 = no1.slice(x+y*3,x+y*3+1);
					if(line1>0) state[(x+8)+(y+1)*stride] = true;
					else state[(x+8)+(y+1)*stride] = false;
				}
			}
			for(var y=0;y<3;y++){
				for(var x=0;x<3;x++){
					var line1 = enz.slice(x+y*3,x+y*3+1);
					if(line1>0) state[(x+4)+(y+2)*stride] = true;
					else state[(x+4)+(y+2)*stride] = false;
					
					var equal = Files.readText(mergeURI(application.url, "./operator/equal.txt"));
					line1 = equal.slice(x+y*3,x+y*3+1);
					if(line1>0) state[(x+12)+(y+2)*stride] = true;
					else state[(x+12)+(y+2)*stride] = false;
				}
			}
			
			//answer
			var a1,a10;
			if(ans<0) {
				a10 = enz;
				var a1 = -ans;
				switch(a1){
					case 1:
						no1 = Files.readText(mergeURI(application.url, "./number/one.txt"));
						break;
					case 2:
						no1 = Files.readText(mergeURI(application.url, "./number/two.txt"));
						break;
					case 3:
						no1 = Files.readText(mergeURI(application.url, "./number/three.txt"));
						break;
					case 4:
						no1 = Files.readText(mergeURI(application.url, "./number/four.txt"));
						break;
					case 5:
						no1 = Files.readText(mergeURI(application.url, "./number/five.txt"));
						break;
					case 6:
						no1 = Files.readText(mergeURI(application.url, "./number/six.txt"));
						break;
					case 7:
						no1 = Files.readText(mergeURI(application.url, "./number/seven.txt"));
						break;
					case 8:
						no1 = Files.readText(mergeURI(application.url, "./number/eight.txt"));
						break;
					case 9:
						no1 = Files.readText(mergeURI(application.url, "./number/nine.txt"));
						break;
					case 0:
						no1 = Files.readText(mergeURI(application.url, "./number/zero.txt"));
						break;
				}
				for(var y=0;y<5;y++){
					for(var x=0;x<3;x++){
						state[(x+8)+9*stride] = false;
						state[(x+8)+13*stride] = false;
						if(y<3){
							var line = a10.slice(x+y*3,x+y*3+1);
							if(line>0) state[(x+8)+(y+10)*stride] = true;
							else state[(x+8)+(y+10)*stride] = false;
						}
						
						var line1 = no1.slice(x+y*3,x+y*3+1);
						if(line1>0) state[(x+12)+(y+9)*stride] = true;
						else state[(x+12)+(y+9)*stride] = false;
					}
				}
			}
			else{
				a1 = ans%10;
				a10 = Math.floor(ans/10);
				//trace(ans);
				//trace(a10);
				//trace(a1);
				switch(a1){
					case 1:
						no1 = Files.readText(mergeURI(application.url, "./number/one.txt"));
						break;
					case 2:
						no1 = Files.readText(mergeURI(application.url, "./number/two.txt"));
						break;
					case 3:	
						no1 = Files.readText(mergeURI(application.url, "./number/three.txt"));
						break;
					case 4:
						no1 = Files.readText(mergeURI(application.url, "./number/four.txt"));
						break;
					case 5:
						no1 = Files.readText(mergeURI(application.url, "./number/five.txt"));
						break;
					case 6:
						no1 = Files.readText(mergeURI(application.url, "./number/six.txt"));
						break;
					case 7:
						no1 = Files.readText(mergeURI(application.url, "./number/seven.txt"));
						break;
					case 8:
						no1 = Files.readText(mergeURI(application.url, "./number/eight.txt"));
						break;
					case 9:
						no1 = Files.readText(mergeURI(application.url, "./number/nine.txt"));
						break;
					case 0:
						no1 = Files.readText(mergeURI(application.url, "./number/zero.txt"));
						break;
				}
				switch(a10){
					case 1:
						no10 = Files.readText(mergeURI(application.url, "./number/one.txt"));
						break;
					case 2:
						no10 = Files.readText(mergeURI(application.url, "./number/two.txt"));
						break;
					case 3:
						no10= Files.readText(mergeURI(application.url, "./number/three.txt"));
						break;
					case 4:
						no10 = Files.readText(mergeURI(application.url, "./number/four.txt"));
						break;
					case 5:
						no10 = Files.readText(mergeURI(application.url, "./number/five.txt"));
						break;
					case 6:
						no10 = Files.readText(mergeURI(application.url, "./number/six.txt"));
						break;
					case 7:
						no10 = Files.readText(mergeURI(application.url, "./number/seven.txt"));
						break;
					case 8:
						no10 = Files.readText(mergeURI(application.url, "./number/eight.txt"));
						break;
					case 9:
						no10 = Files.readText(mergeURI(application.url, "./number/nine.txt"));
						break;
					case 0:	
						//no10 = Files.readText(mergeURI(application.url, "./number/zero.txt"));
						no10 = -1;
						break;
				}
				for(var y=0;y<5;y++){
					for(var x=0;x<3;x++){
						if(no10>0){
							var line = no10.slice(x+y*3,x+y*3+1);
							if(line>0) state[(x+8)+(y+9)*stride] = true;
							else state[(x+8)+(y+9)*stride] = false;
						}else{
							state[(x+8)+(y+9)*stride] = false;
						}
						var line1 = no1.slice(x+y*3,x+y*3+1);
						if(line1>0) state[(x+12)+(y+9)*stride] = true;
						else state[(x+12)+(y+9)*stride] = false;
					}
				}
			}
			
			for(var y=0;y<5;y++){
				for(var x=0;x<5;x++){
					var answer = Files.readText(mergeURI(application.url, "./operator/answer.txt"));
					var line1 = answer.slice(x+y*5,x+y*5+1);
					if(line1>0) state[(x+2)+(y+9)*stride] = true;
					else state[(x+2)+(y+9)*stride] = false;
				}
			}
		}
	},
});

var Panel = function () {
}
Panel.prototype = Object.create(Object.prototype, {
	onTouchBegan: {
		value: function(p) {		
			if(state[p.variant]){
				state[p.variant] = false;
			}else{
				state[p.variant] = true;
			}
		}
	},
	onTimeChanged: {
		value: function(p){
			if(state[p.variant]){
				p.skin = new Skin("red");
			}else{
				p.skin = new Skin("white");
			}
		}
	},
});

// KPR Script file
var build = function(container) {
	container.skin = new Skin("blue");
    for(var i=0;i<stride*stride;i++) state[i] = false; 

	var l=10;	
	for(var i=0;i<stride;i++){
		for(var j=0;j<stride;j++){
			var p = new Content({left:i*l + 80,top:j*l + 20, width:l,height:l },new Skin("white"));
			p.behavior = new Panel();
			p.active = true;
			p.variant = i + j*16;
			container.add(p);
			p.start();
		}
	}
	
	var start = new Container({left:160,top:180, width:80,height:30 },new Skin("gray"));
	start.behavior = new Startbehavior();
	start.active = true;
	var te = new Style("bold 20px", "white");
	var label = new Label(null, null, te, "start");
	start.add(label);
	container.add(start);
}
application.behavior = {
	onAdapt: function(application) {
		application.empty();
		build(application);
	},
	onLaunch: function(application) {
		build(application);
	},
}
