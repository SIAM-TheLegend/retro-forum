const latestPostContainer = document.getElementById('latest-posts');
const allPostContainer = document.getElementById('all-posts');

const handleAllPosts = async () => {
  const allPosts = await (await fetch('https://openapi.programming-hero.com/api/retro-forum/posts')).json();
  allPosts.posts.map(post => {
    console.log(post);
    createAllPost(post);
  })
}

const createAllPost = (post) => {
  const card = `
  <div class='bg-gray-200 flex gap-3 p-8 my-4 border border-blue-500 rounded-3xl'>
    <div class='relative'>
      <img src='${post.image}' class='block w-16 rounded-2xl self-start' />
      <div class='badge ${post.isActive ? "bg-green-500" : "bg-red-500"} border-2 border-white badge-sm absolute -right-1 -top-1'></div>
    </div>

    <div class='ml-3 w-full'>
      <div class='flex text-gray-700 font-semibold text-[15px]'>
        <p>#${post.category}</p>
        <p class='ml-4'>Author: ${post.author.name}</p>
      </div>
      <h4 class='text-gray-900 text-xl mb-3 font-semibold'>${post.title}</h4>
      <p>${post.description}</p>
      <hr class='border-t w-full border-gray-700 my-6 border-dashed' />

      <div class="flex justify-between items-center w-full">
        <div id='iconic-details' class='flex space-x-5 w-fit text-gray-600'>
          <p class='text-lg flex items-center'><svg class='fill-none mr-2 inline size-6' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M8 13.5H16M8 8.5H12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" /><path d="M6.09881 19C4.7987 18.8721 3.82475 18.4816 3.17157 17.8284C2 16.6569 2 14.7712 2 11V10.5C2 6.72876 2 4.84315 3.17157 3.67157C4.34315 2.5 6.22876 2.5 10 2.5H14C17.7712 2.5 19.6569 2.5 20.8284 3.67157C22 4.84315 22 6.72876 22 10.5V11C22 14.7712 22 16.6569 20.8284 17.8284C19.6569 19 17.7712 19 14 19C13.4395 19.0125 12.9931 19.0551 12.5546 19.155C11.3562 19.4309 10.2465 20.0441 9.14987 20.5789C7.58729 21.3408 6.806 21.7218 6.31569 21.3651C5.37769 20.6665 6.29454 18.5019 6.5 17.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" /></svg>${post.comment_count}</p>
          <p class='text-lg flex items-center'><svg class='fill-none mr-2 inline size-6' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.544 11.045C21.848 11.4713 22 11.6845 22 12C22 12.3155 21.848 12.5287 21.544 12.955C20.1779 14.8706 16.6892 19 12 19C7.31078 19 3.8221 14.8706 2.45604 12.955C2.15201 12.5287 2 12.3155 2 12C2 11.6845 2.15201 11.4713 2.45604 11.045C3.8221 9.12944 7.31078 5 12 5C16.6892 5 20.1779 9.12944 21.544 11.045Z" stroke="currentColor" stroke-width="1.5" /><path d="M15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15C13.6569 15 15 13.6569 15 12Z" stroke="currentColor" stroke-width="1.5" /></svg>${post.view_count}</p>
          <p class='text-lg flex items-center'><svg class='fill-none mr-2 inline size-6 rotate-180' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M2 15C2.14277 15.4274 2.31023 15.8431 2.50062 16.2452M4.12547 18.7463C4.44158 19.1137 4.781 19.4596 5.14137 19.7814M9 22C8.55224 21.8557 8.11701 21.6824 7.69641 21.4822" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" /><path d="M12 13.5C12.8284 13.5 13.5 12.8284 13.5 12C13.5 11.1716 12.8284 10.5 12 10.5C11.1716 10.5 10.5 11.1716 10.5 12M12 13.5C11.1716 13.5 10.5 12.8284 10.5 12M12 13.5V16M10.5 12H6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" /><path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" /></svg>${post.posted_time}</p>
        </div>
        <button id='mark-as-read' class='block'>
          <img class='w-8' src="https://i.ibb.co.com/7nMRXtG/Mail-Read-Rounded-Black-512.webp" />
        </button>
      </div>

    </div>
  </div>
  `;
  allPostContainer.insertAdjacentHTML('beforeend', card);
}



async function createLatestPosts() {
  const latestPosts = await (await fetch('https://openapi.programming-hero.com/api/retro-forum/latest-posts')).json();
  
  latestPosts.map(latestPost => {
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
      latestPostContainer.insertAdjacentHTML("beforeend", card);
    })
}

handleAllPosts();
createLatestPosts();