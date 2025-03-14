//--------------------//
//   fetch category   //
//--------------------//
const fetchCategoryData = async () => {
    try {
        const response = await fetch('https://openapi.programming-hero.com/api/phero-tube/categories');
        const data = await response.json();
        displayCategory(data.categories);
    }
    catch {
        console.log("error");
    }
}
fetchCategoryData();

//----------------------//
//   display category   //
//----------------------//
const displayCategory = (categories) => {
    //category gular baap
    const div = document.getElementById('cat-container');

    categories.forEach(cat => {
        //create new element
        const categoryItem = document.createElement('a');
        categoryItem.innerHTML = `
            <a id="btn-${cat.category_id}" onclick="displayCategorizedVideos(${cat.category_id})" class="category-btn category-inactive">${cat.category}</a>
        `;

        //append child
        div.appendChild(categoryItem);
    });

    //console.log(categories);
}











//------------------//
//   fetch videos   //
//------------------//
const fetchVideos = async () => {
    try {
        const response = await fetch('https://openapi.programming-hero.com/api/phero-tube/videos');
        const data = await response.json();
        displayVideos(data.videos, "");
    }
    catch {
        console.log("error");
    }
}
fetchVideos();

//--------------------//
//   display videos   //
//--------------------//
const displayVideos = (videos, selectedCategoryId = "") => {
    //video container
    const videoContainer = document.getElementById('video-container');
    //clear dataset initially, then categorize
    videoContainer.innerHTML = ``;





    //empty category case:
    if (!videos.length) {
        videoContainer.innerHTML = "<p class='text-center text-gray-500'>No videos found.</p>";
        return;
    }








    videos.forEach(vid => {
        //create new video item
        const videoItem = document.createElement('div');
        videoItem.innerHTML = `
        <!--item blueprint-->
            <div class="card bg-base-100 shadow-lg p-2 h-[370px]">

                <!--thumbnail part-->
                <div class="relative">
                    <img class="w-full h-[230px] object-cover rounded-lg" src="${vid.thumbnail}" alt="" srcset="">
                    <span
                        class="absolute bg-gray-500 px-2 py-1 text-gray-300 rounded-sm text-sm bottom-2 right-2">3hrs
                        56min ago</span>
                </div>

                <!--detail part-->
                <div class="my-4 flex space-x-5">

                    <!--left-->
                    <div class="avatar">
                        <div class="w-[40px] h-[40px] object-cover rounded-full">
                            <img src="${vid.authors[0].profile_picture}" />
                        </div>
                    </div>

                    <!--right-->
                    <div class="w-full">
                        <h2 class="font-bold text-xl">${vid.title}</h2>

                        <div class="flex space-x-2 items-center mt-2">
                            <span class="text-slate-500 text-sm">${vid.authors[0]?.profile_name || "Unknown Author"}</span>
                            ${vid.authors[0]?.verified ? '<img class="w-[16px] h-[16px]" src="./assets/verified.png" alt="Verified Badge">' : ''}
                        </div>

                        <p class="text-slate-500 text-sm mt-1">${vid.others.views}</p>
                    </div>

                </div>

            </div>
    `;

        //append child
        videoContainer.appendChild(videoItem);

    });
}

//prototype
// < !--item blueprint-- >
//     <div class="card bg-base-100 shadow-lg p-2 h-[370px]">

//         <!--thumbnail part-->
//         <div class="relative">
//             <img class="w-full h-[230px] object-cover rounded-lg" src="https://i.ibb.co/L1b6xSq/shape.jpg" alt="" srcset="">
//                 <span
//                     class="absolute bg-gray-500 px-2 py-1 text-gray-300 rounded-sm text-sm bottom-2 right-2">3hrs
//                     56min ago</span>
//         </div>

//         <!--detail part-->
//         <div class="my-4 flex space-x-5">

//             <!--left-->
//             <div class="avatar">
//                 <div class="w-[40px] h-[40px] object-cover rounded-full">
//                     <img src="./assets/icon.png" />
//                 </div>
//             </div>

//             <!--right-->
//             <div>
//                 <h2 class="font-bold text-xl">Website built</h2>

//                 <div class="flex space-x-2 items-center mt-2">
//                     <span class="text-slate-500 text-sm">Swarup Sikder</span>
//                     <img class="w-[16px] h-[16px]" src="./assets/verified.png" alt="" srcset="">
//                 </div>

//                 <p class="text-slate-500 text-sm mt-1">100K views</p>
//             </div>

//         </div>

//     </div>





















//--------------------------------//
//   Display Videos by Category   //
//--------------------------------//
const displayCategorizedVideos = async (id) => {
    try {
        const response = await fetch(`https://openapi.programming-hero.com/api/phero-tube/category/${id}`);
        const data = await response.json();
        displayVideos(data.category, id);

        const clickedCategory = document.getElementById(`btn-${id}`);
        removeActiveClass();
        addActiveClass(clickedCategory);


    }
    catch (error) {
        console.error("Error fetching categorized videos:", error);
    }
};

















//------------------//
//   Category all   //
//------------------//
document.getElementById('category-all').addEventListener('click', () => {
    fetchVideos();
    removeActiveClass();
    addActiveClass(document.getElementById('category-all'));
});




//------------------------------//
//   Category Active/Inactive   //
//------------------------------//
function removeActiveClass() {
    const activeCategories = document.getElementsByClassName('category-active');
    console.log(activeCategories);
    
    for(let ac of activeCategories){
        ac.classList.remove('category-active');
        ac.classList.add('category-inactive');
    }
}

function addActiveClass(category) {
    category.classList.remove('category-inactive');
    category.classList.add('category-active');
}