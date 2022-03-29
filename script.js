// 猜数定游戏完整版-----------------------
let random_num = Math.floor(Math.random()*100)+1;//如果把random_num设为const，在重新开始后就会出错。!
// alert(random_num)
const unumber = document.querySelector('#unumber');
const pls = document.querySelector('#pls');
const lastnumber = document.querySelector('#lastnumber');
const yesorno = document.querySelector('.yesorno');
const hiorlow = document.querySelector('.hiorlow');
const btn1 = document.querySelector('#commit');
// const mydivbox = document.getElementById("mydivbox")
const mydivbox = document.getElementById("mylist")
// const mydivbox = document.querySelector("#mylist")
let gc = 0;
let resetbtn;
btn1.addEventListener('click',run_program);
function run_program(){
	if(unumber.value < 1||unumber.value > 100||unumber.value =="")
	{
			alert("请输入100以内的整数");
			return
	}
	gc++;
	if (gc===7)
	{
		lastnumber.append(" "+unumber.value);
		setgameover()
        return
	}
	if(unumber.value==random_num){
				yesorno.textContent='恭喜你!!!';
				yesorno.style.color='green'
				hiorlow.textContent = '';
                unumber.disabled = true;
                btn1.disabled = true;
				lastnumber.append(" "+unumber.value);
				resetbtn=document.createElement('Button');
                resetbtn.style.marginTop = '10px';
                resetbtn.textContent = '再来一次';
                mydivbox.appendChild(resetbtn);
                resetbtn.addEventListener('click',resetgame);
			}
	else if(unumber.value>random_num)
            {
				pls.textContent = '你刚才猜的是：';
                yesorno.textContent = "猜错了 !!!";
                yesorno.style.color = "red";
				// yesorno.style.backgroundColor='red'
				hiorlow.textContent = '猜高了';
				lastnumber.append(" "+unumber.value);
			}
	else{
				pls.textContent = '你刚才猜的是：';
                yesorno.textContent = "猜错了 !!!";
                yesorno.style.color = "red";
				// yesorno.style.backgroundColor='red'
				hiorlow.textContent = '猜低了';
				lastnumber.append(" "+unumber.value);
			}
}
function setgameover()
{
	unumber.disabled = true;
	btn1.disabled = true;
    // yesorno.style.backgroundColor='red'
    yesorno.textContent = "唉，全猜错了 ！";
    yesorno.style.color = 'red'
	resetbtn=document.createElement('Button');
    resetbtn.style.marginTop = '10px';
	resetbtn.textContent = '开始新游戏';
	mydivbox.appendChild(resetbtn);
	resetbtn.addEventListener('click',resetgame);
}
function resetgame()
{
	gc = 0;
	unumber.value ="";
	yesorno.textContent = "";
	yesorno.style.backgroundColor=''
    pls.textContent = '';
	hiorlow.textContent = '';
	lastnumber.textContent ='';
	unumber.disabled = false;
	btn1.disabled = false;
	mydivbox.removeChild(resetbtn);
	random_num = Math.floor(Math.random()*100)+1;
    // alert(random_num)
    unumber.focus();
}
// 猜数定游戏完整版-----------------------