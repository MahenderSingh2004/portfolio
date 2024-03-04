/* name animation  */
var typed = new Typed(".text",{
    strings:['Frontend Developer' , 'Software Developer' , 'Web Developer'],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true
});

/* toggle icon navbar  */
function showSlidebar(){
    const sideBar = document.querySelector('.sideBar');
    const icon = document.querySelector('#menu-icon')
    sideBar.style.display = 'flex';
    icon.style.display = 'none';

}

function hidelidebar(){
    const sideBar = document.querySelector('.sideBar');
    sideBar.style.display = 'none';
    const icon = document.querySelector('#menu-icon');
    icon.style.display = 'flex';

}
/**reload */
function myReload(){
    location.reload();
}








