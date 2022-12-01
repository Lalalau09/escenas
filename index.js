function handleRoute(route){
    const contenedorEl = document.querySelector(".contenedor")
    console.log(route)

    const routes = [{
        path: "/\/sit1/",
        handler: ()=>(contenedorEl.textContent = "sit 1")
    },
    {
        path: "/\/sit2/",
        handler: ()=>(contenedorEl.textContent = "sit 2")
    },
    {
      path: "/\/search\/./",
      handler: ()=>(contenedorEl.textContent = "buscador")
  }
]
for(const r of routes){
  if(r.path.test(route)){ 
   r.handler()}  
}}


function goTo(path){

history.pushState({},"",path )
handleRoute(path)
}

(function(){
const sit1ButtonEl= document.querySelector(".sit-1")
const sit2ButtonEl=document.querySelector(".sit-2")
const sit3ButtonEl=document.querySelector(".sit-3")

sit1ButtonEl.addEventListener("click", ()=>goTo("/sit1"))
sit2ButtonEl.addEventListener("click", ()=>goTo("/sit2"))
sit3ButtonEl.addEventListener("click", ()=>goTo("/search/termo"))


window.addEventListener("load",()=> { handleRoute(location.pathname)} )

})()