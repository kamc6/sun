const resources = [
    {
        type: "image",
        title: "Membre de Sunrun",
        src: "https://i.imgur.com/Zb9HnUZ.jpg",
    },
    {
        type: "image",
        title: "Membre de Sunrun",
        src: "https://i.imgur.com/HZPrsAf.jpg",
    },
    {
        type: "image",
        title: "Membre de Sunrun",
        src: "https://i.imgur.com/ZsjRPp3.jpg",
    },
    {
        type: "image",
        title: "Membre de Sunrun",
        src: "https://i.imgur.com/kodS6Wv.jpg",
    },
    {
        type: "image",
        title: "Membre de Sunrun",
        src: "https://i.imgur.com/1qbXSMA.jpg",
    },
    {
        type: "image",
        title: "Membre de Sunrun",
        src: "https://i.imgur.com/xkErMH9.jpg",
    },
    {
        type: "image",
        title: "Membre de Sunrun",
        src: "https://i.imgur.com/0AnrPR1.jpg",
    },






    {
        type: "image",
        title: "Membre de Sunrun",
        src: "https://i.imgur.com/xZxQReV.jpg",
    },
    {
        type: "image",
        title: "Membre de Sunrun",
        src: "https://i.imgur.com/2hwew3L.jpg",
    },
    {
        type: "image",
        title: "Membre de Sunrun",
        src: "https://i.imgur.com/7CSUMJg.jpg",
    },
    {
        type: "image",
        title: "Membre de Sunrun",
        src: "https://i.imgur.com/7y4yxqY.jpg",
    },
    {
        type: "image",
        title: "Membre de Sunrun",
        src: "https://i.imgur.com/l707bjv.jpg",
    },
    {
        type: "image",
        title: "Membre de Sunrun",
        src: "https://i.imgur.com/Ne3deP9.jpg",
    },
    {
        type: "image",
        title: "Introduction réussie en bourse sur le NASDAQ en 2015",
        src: "https://i.imgur.com/naqLIan.jpg",
    },
    {
        type: "image",
        title: "Sunrun",
        src: "https://i.imgur.com/wVN6rtD.jpg",
    },
    {
        type: "image",
        title: "Membre de Sunrun",
        src: "https://i.imgur.com/2h1rWUJ.jpg",
    },
    {
        type: "image",
        title: "Membre de Sunrun",
        src: "https://i.imgur.com/49GTjpZ.jpg",
    },
    {
        type: "image",
        title: "Membre de Sunrun",
        src: "https://i.imgur.com/jrs4Tov.jpg",
    },
    {
        type: "video",
        title: "Vidéo promotionnelle",
        src: "https://www.youtube.com/embed/-vPZO1AyDcM",
    },
    {
        type: "video",
        title: "Vidéo promotionnelle",
        src: "https://www.youtube.com/embed/QZxYxsEV4_0?si=eJyTgjCDRIYxqYka",
    },
];

function generateResources(category = 'all') {
    const resourceGrid = document.querySelector('.resource-grid');
    resourceGrid.innerHTML = ''; // x

    resources.forEach(resource => {
        if (category === 'all' || resource.type === category) {
            const resourceItem = document.createElement('div');
            resourceItem.className = 'resource-item';

            if (resource.type === "image") {
                resourceItem.innerHTML = `
                    <img src="${resource.src}" alt="${resource.title}" onclick="previewImage('${resource.src}', '${resource.title}')">
                `;
            } else if (resource.type === "video") {
                resourceItem.innerHTML = `
                    <div class="video-container">
                        <iframe src="${resource.src}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                `;
            }

            resourceGrid.appendChild(resourceItem);
        }
    });
}

function filterResources(category) {
    // x
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelector(`.filter-btn[onclick="filterResources('${category}')"]`).classList.add('active');

    generateResources(category);
}

function previewImage(src, title) {
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImage');
    const captionText = document.getElementById('caption');

    modal.style.display = "block";
    modalImg.src = src;
    captionText.innerHTML = title;

    // x
    modal.onclick = function() {
        modal.style.display = "none";
    }
}

document.addEventListener('DOMContentLoaded', () => generateResources());
