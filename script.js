//your JS code here. If required.
const btn=document.getElementById('enterBtn');
btn.addEventListener('click',function enterMetavese() {
	const element=document.getElementById("status");
	
	element.innerText="Entered Metaverse";
	element.outerHTML=element.outerHTML.replace(/p/g,"h1");
})