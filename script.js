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
      		$('.card'+savepoint2[0].toggleClass('back'+savepoint[0]));
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
 		$(this).toggleClass('backA');
 		savepoint[count] = 1;
 		savepoint2[count] =3;
 		count +=1;
 		Y();
 	});
