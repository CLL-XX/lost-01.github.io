
		   //获取元素
		   var imgs = document.querySelectorAll('.imgs>li');
		   //console.log(imgs);
		   var bullets = document.querySelectorAll('.bullets>a');
		   var bannerbox = document.querySelector('.bannerbox');
		   var num = 0;
		   var left = document.getElementsByClassName('left')[0];
		   var right = document.getElementsByClassName('right')[0];
		   //设置定时器
		   var time = setInterval(run,2000);
		   
		   //给box绑定事件
		   bannerbox.onmouseover = function(){
			   clearInterval(time);
		   }
		   bannerbox.onmouseout = function(){
			   time = setInterval(run,2000);
		   }
		   
		   function run(){
			   clear();
			   num++;
			   if(num>=imgs.length){
				   num = 0;
			   }
			   //设置指定图片显示
			   imgs[num].setAttribute('class','current');
			   bullets[num].setAttribute('class','square');
		   }
		   
		   //给小圆点绑定点击事件
		   for(var i=0;i<bullets.length;i++){
            bullets[i].index = i;
            bullets[i].onclick = function(){
				   clear();
				   num = this.index;
				   imgs[num].setAttribute('class','current');
				   cirs[num].setAttribute('class','square');
			   }
		   }
		   
		   function clear(){
			   for(var i=0;i<imgs.length;i++){
				   imgs[i].removeAttribute('class');
				   bullets[i].removeAttribute('class');
			   }
		   }
		   
		   //给左右按钮绑定点击事件
		   right.onclick = function(){
			   clear();
			   if(num == 4){
				   num = 0;
				   imgs[num].setAttribute('class','current');
				   bullets[num].setAttribute('class','square');
			   }else{
				   num++;
				   imgs[num].setAttribute('class','current');
				   bullets[num].setAttribute('class','square');
				   console.log(num);
			   }
		   }
		   left.onclick = function(){
			   clear();
			   if(num == 0){
				   num = 4;
				   imgs[num].setAttribute('class','current');
				   bullets[num].setAttribute('class','square');
			   }else{
				   num--;
				   imgs[num].setAttribute('class','current');
				   bullets[num].setAttribute('class','square');
				   console.log(num);
			   }
		   }
