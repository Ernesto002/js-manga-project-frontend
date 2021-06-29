const base_url = "http://localhost:3000"
const mangaService = new MangaService(base_url)

Manga.mangaForm.addEventListener("submit", handleSubmit)

mangaService.getMangas()
Manga.renderForm()

function handleSubmit(){
    event.preventDefault()
    mangaService.createManga()
    event.target.reset
}