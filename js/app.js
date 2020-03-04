const ui = new UI()

document.addEventListener('DOMContentLoaded',()=>{
    ui.showLocals()
})

const searcher=document.querySelector('#buscar input')

searcher.addEventListener('input',()=>{
    if (searcher.value.length>3) {
        console.log('hoy si')
        ui.searchSuggestions(searcher.value)    
    }
    
})