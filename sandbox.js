const myElement = document.getElementById("myElement"); // Corrected method name
const Getdate = new Date().getHours();

if (Getdate < 12) {
  myElement.src = "giphy (10).gif";
} else {
  myElement.src = "giphy (11).gif";
}







//     const Greeting = document.getElementById("myElement");
//     const Getdate = new Date().getHours();

//     if (Getdate < 12){
        
//         Greeting.textContent = "Good Morning";
// } else{
//         Greeting.src = "Good Afternoon";
// };