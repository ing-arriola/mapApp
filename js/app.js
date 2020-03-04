const ui = new UI()

document.addEventListener('DOMContentLoaded',()=>{
    ui.showLocals()
})

const searcher=document.querySelector('#buscar input')

searcher.addEventListener('input',()=>{
    if (searcher.value.length>3) {
        ui.searchSuggestions(searcher.value)    
    }else{
        ui.showLocals()
    }
    
})