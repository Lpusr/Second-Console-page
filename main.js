var reasons = [
"Sanjeev",
"Lakshit",
"Seema",
"Sonali",
"Shefali",
];
var images = [
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFWJW9f2df8ibmWPwTui-rpByNkBffoOJ80g&usqp=CAU",
"https://www.imagediamond.com/blog/wp-content/uploads/2020/06/cartoon-boy-images-7.jpg",
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6LcEVcyZ-Ien9ulvh-WBZrOTa6lm8gNnk6A&usqp=CAU",
"https://media.istockphoto.com/photos/character-cartoon-girl-on-a-white-background-illustration-for-picture-id1166400008?b=1&k=20&m=1166400008&s=170667a&w=0&h=8L9ZcCuCMypEXbV-lNW4Wh3yUwlKWaqxiDffiZCOFDw=",
"https://cdn2.vectorstock.com/i/1000x1000/69/26/cute-girl-cartoon-presenting-vector-2026926.jpg"
];

var i = 0;
function nextslide() {  document.getElementById("reasontext").innerHTML = reasons[i];
document.getElementById("album").src = images[i];
i++;
document.getElementById("audio").play();
 
}