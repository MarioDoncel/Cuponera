const search = document.querySelector('#searchButton')
const form = document.querySelector('#searchForm')

search.addEventListener('click', () => {
    form.submit()
})

