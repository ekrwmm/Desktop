document.addEventListener("DOMContentLoaded", () => {
    const apiKey = "eabcfb2c7e09cbac7848d5a34d94372c"; // TMDb API anahtarınızı buraya ekleyin
    const imageBaseUrl = "https://image.tmdb.org/t/p/w500"; // TMDb'nin görüntü tabanı URL'si

    // İstediğiniz dizilerin TMDb ID'lerini buraya ekleyin
    const tvShowIds = [76331, 60059, 890]; // Örneğin: Game of Thrones, Fear the Walking Dead, Stranger Things

    const tvShowsElement = document.getElementById("tv-shows");

    tvShowIds.forEach((id) => {
        fetch(
            `https://api.themoviedb.org/3/tv/${id}?api_key=${apiKey}&language=tr-TR`
        )
            .then((response) => response.json())
            .then((show) => {
                const listItem = document.createElement("li");
                listItem.className = "media-item";
                listItem.innerHTML = `
                    <img class="media-poster" src="${imageBaseUrl}${show.poster_path}" alt="${show.name} Poster">
                    <h3 class="text-center">${show.name}</h3>
  
                `;
                tvShowsElement.appendChild(listItem);
            })
            .catch((error) => console.error("Error fetching TV show:", error));
    });
});
