var backdrop=document.querySelector('.backdrop');
var modal =document.querySelector('.modal');
var selectPlanButtons =document.querySelectorAll('.sign');
var noButton=document.querySelector(".modal__action--negative");
var noButton=document.querySelector(".modal__action--negative");
var log=document.querySelectorAll(".login")
var loginBox=document.querySelector(".login-box")

for (var i = 0; i < selectPlanButtons.length; i++) {
	    selectPlanButtons[i].addEventListener('click', function() {
		modal.style.display ='block';
		backdrop.style.display ='block';
	});
}


for (var i = 0; i < log.length; i++) {
	    log[i].addEventListener('click', function() {
		loginBox.style.display ='block';
		backdrop.style.display ='block';
	});
}



noButton.addEventListener("click",closeModel);
backdrop.addEventListener("click",closeModel);

function closeModel(){
  modal.style.display ='none';
  backdrop.style.display ='none';
}

backdrop.addEventListener("click",closelog);

function closelog(){
  loginBox.style.display ='none';
  backdrop.style.display ='none';
}
