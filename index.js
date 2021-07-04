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
    document.querySelector("#new-collection-form").reset()
}

function resetMangaForm(){
    document.querySelector("#new-manga-form").reset()
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