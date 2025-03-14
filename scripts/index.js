//--------------------//
//   fetch category   //
//--------------------//
const fetchCategoryData = async () => {
    const response = await fetch('https://openapi.programming-hero.com/api/phero-tube/categories');
    const data = await response.json();
    displayCategory(data.categories);
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
            <a class="category-btn category-inactive">${cat.category}</a>
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
    const response = await fetch('https://openapi.programming-hero.com/api/phero-tube/videos');
    const data = await response.json();
    displayVideos(data.videos);
}
fetchVideos();

//--------------------//
//   display videos   //
//--------------------//
const displayVideos = (videos) => {
    //video container
    const videoContainer = document.getElementById('video-container');

    videos.forEach(vid => {
        //create new video item
        const videoItem = document.createElement('div');
        videoItem.innerHTML = `
            <!--item blueprint-->
                <div class="card bg-base-100 shadow-lg p-2 h-[400px]">

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
                                <img src="./assets/icon.png" />
                            </div>
                        </div>

                        <!--right-->
                        <div>
                            <h2 class="font-bold text-xl w-[85%]">Website built by Swarup sikder</h2>

                            <div class="flex space-x-2 items-center mt-2">
                                <span class="text-slate-500 text-sm">Swarup Sikder</span>
                                <img class="w-[16px] h-[16px]" src="./assets/verified.png" alt="" srcset="">
                            </div>

                            <p class="text-slate-500 text-sm mt-1">100K views</p>
                        </div>

                    </div>

                </div>
        `;

        //append child
        videoContainer.appendChild(videoItem);
    });
}