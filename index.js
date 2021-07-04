const base_url = "http://localhost:3000"
const mangaService = new MangaService(base_url)
const collectionService = new CollectionService(base_url)

Manga.mangaForm.addEventListener("submit", handleMangaSubmit)
Collection.collectionForm.addEventListener("submit", handleCollectionSubmit)

collectionService.getCollections()
Collection.renderCollectionForm()

function handleMangaSubmit(){
    event.preventDefault()
    mangaService.createManga()
    resetMangaForm()
}

function handleCollectionSubmit(){
    event.preventDefault()
    collectionService.createCollection()
    resetCollectionForm()
}

function resetCollectionForm(){
    document.querySelector("#collection-title").value = " "
    document.querySelector("#volume_count").value = " "
    document.querySelector("#collection-author").value = " "
    document.querySelector("#collection-description").value = " "
    document.querySelector("#collection-release").value = " "
}

function resetMangaForm(){
    document.querySelector("#title").value = " "
    document.querySelector("#volume_number").value = " "
    document.querySelector("#author").value = " "
    document.querySelector("#description").value = " "
    document.querySelector("#release_year").value = " "
    document.querySelector("#collection").value = " "
}

function goBack(){
    Manga.mangaContainer.innerHTML = " "
    Manga.mangaForm.innerHTML = " "
    Collection.collectionContainer.innerHTML = " "
    collectionService.getCollections()
    Collection.renderCollectionForm()
}

function showManga(){
    Collection.collectionContainer.innerHTML = " "
    Collection.collectionForm.innerHTML = " "
    Manga.mangaContainer.innerHTML = " "
    mangaService.getMangas()
    Manga.renderMangaForm()
}