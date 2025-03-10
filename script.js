const header = document.querySelector('header');
const fullScreenBanner = document.getElementById('fullScreenBanner');
const fullScreenBannerImg = document.getElementById('fullScreenBannerImg');
const closeFullscreen = document.getElementById('closeFullscreen');
const postInput = document.getElementById('postInput');
const publishButton = document.getElementById('publishButton');
const feed = document.querySelector('.feed');

header.addEventListener('click', () => {
    fullScreenBanner.style.display = 'block';
});

closeFullscreen.addEventListener('click', () => {
    fullScreenBanner.style.display = 'none';
});

publishButton.addEventListener('click', () => {
    const postContent = postInput.value;
    if (postContent.trim() !== '') {
        addPostToFeed(postContent);
        postInput.value = ''; 
    }
});

function addPostToFeed(postContent) {
    const newPost = document.createElement('article');
    newPost.classList.add('post');

    const now = new Date();
    const formattedDate = formatDate(now);

    newPost.innerHTML = `
        <div class="post-header">
            <img src="images/foto de perfil3.jpg" alt="Foto de perfil" class="post-profile-pic">
            <div class="post-profile-info">
                <div class="post-profile-name-container">
                    <h2 class="post-profile-name">♔ Pedrinho</h2>
                    <img src="images/verificado.png" alt="Verificado" class="post-verified-icon">
                    <img src="images/verificado2.png" alt="Verificado 2" class="post-verified-icon">
                </div>
                <p class="post-profile-at">@iampedrowilson</p>
            </div>
        </div>
        <h3>${postContent}</h3>
        <p class="post-date">${formattedDate}</p>
    `;
    feed.insertBefore(newPost, feed.firstChild); 
}

function formatDate(date) {
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    return `${day}/${month}/${year} ${hours}:${minutes}`;
}
