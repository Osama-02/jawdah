$( document ).ready(()=>{
    let tabs = $('.tabs__tab')
    let tabsbody = $('.tabs__body')
    
    tabs.on("click", function(event){
        let content = `${this.id}-body`;
        
        
        if( $(this).hasClass('tab-active') ){
            return;
        }
        else{
            tabs.removeClass("tab-active");
            $(this).addClass("tab-active");
            tabsbody.each(function(i,obj) {
                if(obj.id == content){
                    obj.classList.add("tabs__body-active")
                }else{
                    obj.classList.remove("tabs__body-active")
                }
            });
            

        }

        // const tabs = $('.tabs__tab')
        // const tabsbody = $('.tab__body')
        // let targetTab = event.target.id
        // let targetContent = $(`#${targetTab}-body`)
    
        // if( $(event.target).hasClass('tab-active') ){
        //     return;
        // }else{
        //     tabs.forEach(tab => {
        //         if(tab.hasClass('tab-active')){
        //             tab.removeClass("tab-active");
        //             console.log(tab)
        //         }
        //     });
        //     $(event.target).addClass("tab-active");
        // }
    
        
    })
    
})
