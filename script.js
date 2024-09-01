const latestPostCardsContainer = document.getElementById('latest-posts');

async function createLatestPosts() {
  const latestPosts = await (await fetch('https://openapi.programming-hero.com/api/retro-forum/latest-posts')).json();
  
  latestPosts.map(latestPost => {
    console.log(latestPost);
    const card = `
      <div class='p-5 bg-gray-50 w-full border border-gray-300 rounded-2xl shadow-sm'>
        <img class="rounded-2xl" src="${latestPost.cover_image}" />
        <div class='px-1'>
          <p class='p-1 flex items-center'><svg class='mr-1' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="gray"><path d="M7 11h2v2H7zm0 4h2v2H7zm4-4h2v2h-2zm0 4h2v2h-2zm4-4h2v2h-2zm0 4h2v2h-2z"></path><path d="M5 22h14c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2h-2V2h-2v2H9V2H7v2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2zM19 8l.001 12H5V8h14z"></path></svg>${latestPost.author?.posted_date || 'No publish date'}</p>
          <h2 class="text-lg text-black font-semibold">${latestPost.title}</h2>
          <p class='my-2'>${latestPost.description}</p>
        </div>
        <div class='flex items-center'>
          <img class='rounded-full size-10 mr-3' src='${latestPost.profile_image}' />
          <div>
           <h4 class='font-semibold text-black'>${latestPost.author.name}</h4>
           <p>${latestPost.author.designation}</p>
          </div>
        </div>
      </div>`;
      latestPostCardsContainer.insertAdjacentHTML("beforeend", card);
    })
}

createLatestPosts();