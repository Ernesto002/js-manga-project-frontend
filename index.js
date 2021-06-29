const base_url = "http://localhost:3000"
const mangaService = new MangaService(base_url)

Manga.mangaForm.addEventListener("submit", handleMangaSubmit)

mangaService.getMangas()
Manga.renderMangaForm()

function handleMangaSubmit(){
    event.preventDefault()
    mangaService.createManga()
    event.target.reset
}