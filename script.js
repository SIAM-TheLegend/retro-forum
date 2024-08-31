const latestPostCardsContainer = document.getElementById('latest-posts');

async function createLatestPosts() {
  const latestPosts = await (await fetch('https://openapi.programming-hero.com/api/retro-forum/latest-posts')).json();
  
  latestPosts.map(latestPost => {
    console.log(latestPost);
    const card = `
      <div class='p-5 bg-gray-50 w-full border border-gray-300 rounded-2xl shadow-sm'>
        <img class="rounded-2xl" src="${latestPost.cover_image}" />
        <div>
          <p class='p-1'>${latestPost.author?.posted_date || 'No publish date'}</p>
          <h2 class="text-lg text-black font-semibold">${latestPost.title}</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
        </div>
      </div>`;
      latestPostCardsContainer.insertAdjacentHTML("beforeend", card);
    })
}

createLatestPosts();