$( document ).ready(()=>{
    $('.collapse').slideUp()
})

let toggleCollapse = function(event){
    let button = event.target.id
    let container = $(`#${button}-body`)

    if(  $(event.target).hasClass('collapse-open')  ){
        $(event.target).removeClass("collapse-open");
        container.slideUp()
    }else{
        $(event.target).addClass("collapse-open");
        container.slideDown()
        
    }

    
}
