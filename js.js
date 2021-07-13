
//Start Color ____________________________________________________

let my_list=document.querySelectorAll("ul  .color");
let my_Name=document.getElementById("name");
let my_dive=document.getElementById("di");
let my_Work=document.getElementById("my_Work");
let my_Education=document.getElementById("my_Education");
let my_Hobby=document.getElementById("my_Hobby");
let gear1=document.getElementById("gear1");
let array=[];
let i;
for ( i=0; i<my_list.length; i++){
    array.push(my_list[i].getAttribute("data-color"));

    my_list[i].addEventListener("click",function () {

        let color=this.getAttribute("data-color");

        let set_color= localStorage.setItem("chose_name",color);

        let get_color= localStorage.getItem('chose_name');
        my_dive.style.color= get_color;
        my_Work.style.color= get_color;
        my_Education.style.color= get_color;
        my_Hobby.style.color= get_color;
        my_Name.style.color= get_color;
        gear1.style.color= get_color;
        // document.body.style.backgroundColor= get_color;
        console.log("localStorage : " + get_color);

    });
}
//localStorage
onload =()=>{
    for ( i=0; i<my_list.length; i++){
        my_dive.style.color= localStorage.getItem('chose_name');
        my_Work.style.color= localStorage.getItem('chose_name');
        my_Education.style.color= localStorage.getItem('chose_name');
        my_Hobby.style.color= localStorage.getItem('chose_name');
        my_Name.style.color= localStorage.getItem('chose_name');
        gear1.style.color= localStorage.getItem('chose_name');
        // document.body.style.backgroundColor = localStorage.getItem('chose_name');

    }
};




//Time
let my_time=document.getElementById("my_time");
var date1 = new Date("10/17/2015");
var date2 = new Date();

// To calculate the time difference of two dates
var Difference_In_Time = date2.getTime() - date1.getTime();

// To calculate the no. of days between two dates
var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
my_time.innerText=" In Nederland : " +Math.round(Difference_In_Days)+" dagen";



//jQuery Line
$(document).ready(() => {
    $( "hr" ).css('background', '#0bb5f4').animate({width : '+=680'}, 2000).fadeOut().fadeIn('slow');

    $( ".resume_hobby " ).css('color', '#0bb5f4').fadeOut().fadeIn('slow');

});


// Change font-size
$(document).ready(function(){
    $("#slider").on("input",function () {
     let change=   $('#name,#my_Education,#di,#my_Work,#my_Hobby,#gear1').css("font-size", $(this).val() + "px");
        console.log($(this));
        let size=this.getAttribute("data-size");
        let set_size= localStorage.setItem("chose_size",change);
        let get_sizer= localStorage.getItem('chose_size');
        my_Hobby.style.fontSize= localStorage.getItem('chose_size');
    });
});



//Make image larger onclick
let my_img=document.getElementById("my_img");
my_img.addEventListener('click',()=>{
    my_img.classList.add("resize_img");
    my_img.style.transition=' all 1s';
});
my_img.addEventListener('mouseout',()=>{
    my_img.classList.remove("resize_img");
    my_img.style.transition=' all 0.3s';
});

