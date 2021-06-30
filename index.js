const base_url = "http://localhost:3000"
const mangaService = new MangaService(base_url)
const collectionService = new CollectionService(base_url)

Manga.mangaForm.addEventListener("submit", handleMangaSubmit)
Collection.collectionForm.addEventListener("submit", handleCollectionSubmit)

collectionService.getCollections()
Collection.renderCollectionForm()

// mangaService.getMangas()
// Manga.renderMangaForm()

function handleMangaSubmit(){
    event.preventDefault()
    mangaService.createManga()
    event.target.reset
}

function handleCollectionSubmit(){
    event.preventDefault()
    collectionService.createCollection()
    event.target.reset
}