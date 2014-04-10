var count=0;
var check=0;
var savepoint= [0, 0];
var savepoint2=[0,0];
var checkpoint=0;

$(document).read(function(){
 var Y = function(){
    if(count == 2){
      count=0;
      	if(savepoint[0] == savepoint[1]){
      		checkpoint++;
      	}
      	eles{
      		$('.card'+savepoint2[0].toggleClass('back'+savepoint[0]));
      		$('.card'+savepoint2[1].toggleClass('back'+savepoint[1]));
      	}
    }
 }
 	$('.A').click(function(){
 		$(this).toggleClass('backA');
 		savepoint[count] = 1;
 		savepoint2[count] =1;
 		count +=1;
 		Y();
 	});
	$('.B').click(function(){
 		$(this).toggleClass('backB');
 		savepoint[count] = 2;
 		savepoint2[count] =2;
 		count +=1;
 		Y();
 	});
	$('.C').click(function(){
 		$(this).toggleClass('backC');
 		savepoint[count] = 3;
 		savepoint2[count] =3;
 		count +=1;
 		Y();
 	});
 	$('.D').click(function(){
 		$(this).toggleClass('backC');
 		savepoint[count] = 3;
 		savepoint2[count] =4;
 		count +=1;
 		Y();
 	});
 	$('.E').click(function(){
 		$(this).toggleClass('backA');
 		savepoint[count] = 1;
 		savepoint2[count] =5;
 		count +=1;
 		Y();
 	});
 	$('.F').click(function(){
 		$(this).toggleClass('backB');
 		savepoint[count] = 2;
 		savepoint2[count] =6;
 		count +=1;
 		Y();
 	});
 	$('.G').click(function(){
 		$(this).toggleClass('backD');
 		savepoint[count] = 4;
 		savepoint2[count] =7;
 		count +=1;
 		Y();
 	});
 	$('.H').click(function(){
 		$(this).toggleClass('backD');
 		savepoint[count] = 4;
 		savepoint2[count] =8;
 		count +=1;
 		Y();
 	});
 	$('.I').click(function(){
 		$(this).toggleClass('backE');
 		savepoint[count] = 5;
 		savepoint2[count] =9;
 		count +=1;
 		Y();
 	});
