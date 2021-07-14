const content = document.querySelector(".contentText");
const author = document.querySelector(".authorText");
const next = document.querySelector(".next");
const darkmode = document.querySelector(".darkmode");
const body = document.querySelector("body");

let isDark = true;

if(content.innerHTML.length <= 0) {
	content.innerHTML = "Loading...";
}

const fetchQuote = async() => {
await fetch("https://quotes15.p.rapidapi.com/quotes/random/", {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "ee587afe54msh470fc9d638a11f6p135352jsn2061919f6814",
		"x-rapidapi-host": "quotes15.p.rapidapi.com"
	}
})
.then(response => 
	response.json()
)
.then(data => {


	if(data.content.length > 400) {
		fetchQuote();
	} else {
		content.innerHTML = data.content;
		author.innerHTML = "-" + data.originator.name;
	}

})
.catch(err => {
	console.error(err);
});
};

fetchQuote()


//event listeners
next.addEventListener("click", () => {
	fetchQuote();
})

darkmode.addEventListener("click", () => {
	if(isDark) {
		body.style.backgroundColor= "white";
		body.style.color = "black";
		darkmode.innerHTML = "Switch to Dark Mode";
		isDark = !isDark;
	} else {
		body.style.backgroundColor= "black";
		body.style.color= "white";
		darkmode.style.border = "1px solid white";		
		darkmode.innerHTML = "Switch to Light Mode";
		isDark = !isDark;
	}
})
