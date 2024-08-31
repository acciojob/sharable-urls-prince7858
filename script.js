// your code here
document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault(); 
	
    const name = document.getElementById("name").value;
    const year = document.getElementById("year").value;
    
    const urlElement = document.getElementById("url");
    
    urlElement.textContent = `https://localhost:8080/${name}/${year}`;
});
