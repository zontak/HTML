/**
 * Created by zonta_000 on 5.6.2014 г..
 */
var about=document.getElementById("aboutche");
about.onmouseover=function(){
    var list=document.getElementById("aboutTheUniversity");
    list.style.display="block";
}

about.onmouseout=function(){
    var list=document.getElementById("aboutTheUniversity");
    list.style.display="none";
}

var training=document.getElementById("trainingche");
training.onmouseover=function(){
    var list=document.getElementById("trainingCourses");
    list.style.display="block";
}

training.onmouseout=function(){
    var list=document.getElementById("trainingCourses");
    list.style.display="none";
}




