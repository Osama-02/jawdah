$( document ).ready(()=>{
    $('.collapse').slideUp() 

})

let toggleCollapse = function(event){
    let button = event.target.id
    let container = $(`#${button}-body`)
    let dropdownIcon = event.target.children[2]
    

    if(  $(dropdownIcon).hasClass('collapse-open')  ){
        $(dropdownIcon).removeClass("collapse-open");
        container.slideUp()
    }else{
        $(dropdownIcon).addClass("collapse-open");
        container.slideDown()
        
    }

    
}
