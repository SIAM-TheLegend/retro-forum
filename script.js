const latestPostsContainer = document.getElementById('latest-posts');

async function handleLatestPosts() {
  const latestPosts = await (await fetch('https://openapi.programming-hero.com/api/retro-forum/latest-posts')).json();
  createLatestPosts(latestPosts);
}

const createLatestPosts = (latestPosts) => {
  const cardContainer = document.createElement('div');
  cardContainer.classList.add('grid', 'grid-cols-3');
  latestPosts.map(latestpost => {
    const card = document.createElement('div');
    card.classList.add('card', 'bg-gray-50', 'w-full', 'shadow-sm');
    card.innerHTML =  `
        <figure class="px-6 pt-6">
          <img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp" class="rounded-xl" />
        </figure>
        <div class="card-body items-center text-center">
          <h2 class="card-title">Shoes!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
        </div>
      `;
    cardContainer.appendChild(card);
  })
  
  latestPostsContainer.appendChild(cardContainer);
}

handleLatestPosts();