// Function to Show Sidebar
function showSidebar() {
    document.querySelector(".sidebar").classList.add("active");
}

// Function to Hide Sidebar
function hideSidebar() {
    document.querySelector(".sidebar").classList.remove("active");
}

document.addEventListener("DOMContentLoaded", function () {
    loadHeroSection();
    loadStorySection();
    loadMenu();
});
fetch("https://foodish-api.com/api/")
    .then(response => response.json())
    //.then(data => console.log("Image URL:", data.image))
    .catch(error => console.error("Error fetching image:", error));

// Function to load Hero Section
function loadHeroSection() {
    const heroSection = document.querySelector(".hero-section");

    if (heroSection) {
        heroSection.style.backgroundImage = "url('https://foodish-api.com/images/pasta/pasta26.jpg')";
    }
    console.log(heroSection);  
}
function showSidebar(){
    const sidebar = document.querySelector('sidebar')
    sidebar.style.display = 'flex'

}
function hideSidebar(){
     const sidebar = document.querySelector('sidebar')
     sidebar.style.display = 'none'

}
loadHeroSection();
// Function to load to Story Section

function loadStorySection() {
    const storyImage = document.querySelector(".storyimge");

    // Set the source directly
    if (storyImage) {
        storyImage.src = "https://foodish-api.com/images/dessert/dessert3.jpg";
        storyImage.onerror = () => {
            storyImage.src = "path-to-your-default-image.jpg";
        };
    }  else {
        console.log("Image element not found");
    }
    console.log("image here",storyImage);
}
loadStorySection();

 //Function to load the Menu Section

 function loadMenu(){
     const theMenu = document.querySelector(".allTheMenu");
     if(!theMenu) return;

    fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
         .then(response => response.json())
        .then(data => {
             console.log("Menu data:", data);

             const menuItems = data.categories;

             const prices = {
                 "Beef": 15.99,
                "Chicken": 13.99,
                 "Dessert": 9.99,
                 "Lamb": 16.99,
                "Miscellaneous": 10.99,
                "Pasta": 12.99,
                 "Seafood": 18.99,
                 "Side": 8.99,
                 "Starter": 6.99,
                "Vegan": 11.99,
                 "Vegetarian": 12.99,
            };
            
            theMenu.innerHTML = menuItems.map(item => `
                <div class="menu-item">
                   
                    <img src="${item.strCategoryThumb}" alt="${item.strCategory}">
                     <h3>${item.strCategory} <span>$${prices[item.strCategory] || 12.99}</span></h3>
                    <p>${item.strCategoryDescription.substring(0, 100)}...</p>
                </div>
            `).join("");
        })
         .catch(error => console.error("Error loading menu:", error));
 }




