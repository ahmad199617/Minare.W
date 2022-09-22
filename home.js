document.addEventListener("DOMContentLoaded", function(){
        
        {myVar = setTimeout(showPagex, 1500);}
        {myVar = setTimeout(showPage, 1000);}
        
        
        function showPage() {
        document.getElementById("LoadingID").style.opacity = "0%";}
        
        function showPagex() {
        document.getElementById("LoadingID").style.display = "none";}  
        
        
        
        let vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
        

                        
        




       
        {
        $('[lang="tr"]').show();
        $('[lang="en"]').hide();
        $('[lang="ar"]').hide();}    
       
        var lang=localStorage.getItem('lang');
        localStorage.getItem('lang');   
        if(lang==("en")){
        $('[lang="en"]').show();
        $('[lang="tr"]').hide();
        $('[lang="ar"]').hide();}
        
        
        if(lang==("tr")){
        $('[lang="tr"]').show();
        $('[lang="en"]').hide();
        $('[lang="ar"]').hide();}
        
        if(lang==("ar")){
        $('[lang="ar"]').show();
        $('[lang="en"]').hide();
        $('[lang="tr"]').hide();}});


        


        
        $(document).ready(function () {
            $('#switch-lang-en').click(function() {
                $('[lang="tr"]').hide();
                $('[lang="en"]').show();
                $('[lang="ar"]').hide();
                localStorage.setItem('lang', 'en');
            });
        });
        

        $(document).ready(function () {
            $('#switch-lang-tr').click(function() {
                $('[lang="tr"]').show();
                $('[lang="en"]').hide();
                $('[lang="ar"]').hide();
                localStorage.setItem('lang', 'tr');
            });
        });


        $(document).ready(function () {
            $('#switch-lang-ar').click(function() {
                $('[lang="ar"]').show();
                $('[lang="en"]').hide();
                $('[lang="tr"]').hide();
                localStorage.setItem('lang', 'ar');
            });
        });

        
        
        function setlangEN(){                   
            
        $('[lang="tr"]').hide();
        $('[lang="en"]').show();
        $('[lang="ar"]').hide();
        localStorage.setItem('lang', 'en');

        }
        function setlangTR(){
            $('[lang="tr"]').show();
            $('[lang="en"]').hide();
            $('[lang="ar"]').hide();
            localStorage.setItem('lang', 'tr');

        }

        function setlangAR(){
            $('[lang="ar"]').show();
            $('[lang="en"]').hide();
            $('[lang="tr"]').hide();
            localStorage.setItem('lang', 'ar');

        }



        function setIMG(IMGURL) {
            
            
            var imglink=IMGURL
                       
            
            $('.imgXX').css({'content' : 'url(' + imglink + ')'});
            $('.backgrund').css({'opacity': '100%'});
            $('.backgrund').css({'z-index': '1000'});
            
           
    
            
        }
    
           document.querySelector(".closex").addEventListener("click", close, false);
           
           document.querySelector(".backgrund-black").addEventListener("click", close, false);
        
        
            function close() {
            
            
            {myVar  = setTimeout(zindex, 300);}
            
            
            $('.backgrund').css({'opacity': '0%'});
            }

            
            function zindex() {
                $('.backgrund').css({'z-index': '-1000'});
    
    
    
            }


            function buttonMI1() {
            
                document.querySelector(".buttonMI_DIV_1").style.opacity="100%";
                document.querySelector(".buttonMI_DIV_1").style.zIndex = "10";
                document.querySelector(".B_MI_1").style.backgroundColor="#333";
                document.querySelector(".B_MI_1").style.borderStyle="none";
                                    
                document.querySelector(".buttonMI_DIV_2").style.opacity="0%";
                document.querySelector(".buttonMI_DIV_2").style.zIndex = "-1";
                document.querySelector(".B_MI_2").style.backgroundColor="#ffffff";
                document.querySelector(".B_MI_2").style.borderStyle="solid";
                                    
                document.querySelector(".buttonMI_DIV_3").style.opacity="0%";
                document.querySelector(".buttonMI_DIV_3").style.zIndex = "-1";
                document.querySelector(".B_MI_3").style.backgroundColor="#ffffff";
                document.querySelector(".B_MI_3").style.borderStyle="solid";

                document.querySelector(".buttonMI_DIV_4").style.opacity="0%";
                document.querySelector(".buttonMI_DIV_4").style.zIndex = "-1";
                document.querySelector(".B_MI_4").style.backgroundColor="#ffffff";
                document.querySelector(".B_MI_4").style.borderStyle="solid";

            }
            function buttonMI2() {
            
                document.querySelector(".buttonMI_DIV_2").style.opacity="100%";
                document.querySelector(".buttonMI_DIV_2").style.zIndex = "10";
                document.querySelector(".B_MI_1").style.backgroundColor="#ffffff";
                document.querySelector(".B_MI_1").style.borderStyle="solid";
                
                document.querySelector(".buttonMI_DIV_1").style.opacity="0%";
                document.querySelector(".buttonMI_DIV_1").style.zIndex = "-1";
                document.querySelector(".B_MI_2").style.backgroundColor="#333";
                document.querySelector(".B_MI_2").style.borderStyle="none";
                
                document.querySelector(".buttonMI_DIV_3").style.opacity="0%";
                document.querySelector(".buttonMI_DIV_3").style.zIndex = "-1";
                document.querySelector(".B_MI_3").style.backgroundColor="#ffffff";
                document.querySelector(".B_MI_3").style.borderStyle="solid";

                document.querySelector(".buttonMI_DIV_4").style.opacity="0%";
                document.querySelector(".buttonMI_DIV_4").style.zIndex = "-1";
                document.querySelector(".B_MI_4").style.backgroundColor="#ffffff";
                document.querySelector(".B_MI_4").style.borderStyle="solid";

                }
                function buttonMI3() {
            
                document.querySelector(".buttonMI_DIV_3").style.opacity="100%";
                document.querySelector(".buttonMI_DIV_3").style.zIndex = "10";
                document.querySelector(".B_MI_1").style.backgroundColor="#ffffff";
                document.querySelector(".B_MI_1").style.borderStyle="solid";
                    
                document.querySelector(".buttonMI_DIV_2").style.opacity="0%";
                document.querySelector(".buttonMI_DIV_2").style.zIndex = "-1";
                document.querySelector(".B_MI_2").style.backgroundColor="#ffffff";
                document.querySelector(".B_MI_2").style.borderStyle="solid";
                    
                document.querySelector(".buttonMI_DIV_1").style.opacity="0%";
                document.querySelector(".buttonMI_DIV_1").style.zIndex = "-1";
                document.querySelector(".B_MI_3").style.backgroundColor="#333";
                document.querySelector(".B_MI_3").style.borderStyle="none";
    
                document.querySelector(".buttonMI_DIV_4").style.opacity="0%";
                document.querySelector(".buttonMI_DIV_4").style.zIndex = "-1";
                document.querySelector(".B_MI_4").style.backgroundColor="#ffffff";
                document.querySelector(".B_MI_4").style.borderStyle="solid";
    
                    }
            function buttonMI4() {
            
                document.querySelector(".buttonMI_DIV_4").style.opacity="100%";
                document.querySelector(".buttonMI_DIV_4").style.zIndex = "10";
                document.querySelector(".B_MI_1").style.backgroundColor="#ffffff";
                document.querySelector(".B_MI_1").style.borderStyle="solid";
                        
                document.querySelector(".buttonMI_DIV_2").style.opacity="0%";
                document.querySelector(".buttonMI_DIV_2").style.zIndex = "-1";
                document.querySelector(".B_MI_2").style.backgroundColor="#ffffff";
                document.querySelector(".B_MI_2").style.borderStyle="solid";
                        
                document.querySelector(".buttonMI_DIV_1").style.opacity="0%";
                document.querySelector(".buttonMI_DIV_1").style.zIndex = "-1";
                document.querySelector(".B_MI_3").style.backgroundColor="#ffffff";
                document.querySelector(".B_MI_3").style.borderStyle="solid";
        
                document.querySelector(".buttonMI_DIV_3").style.opacity="0%";
                document.querySelector(".buttonMI_DIV_3").style.zIndex = "-1";
                document.querySelector(".B_MI_4").style.backgroundColor="#333";
                document.querySelector(".B_MI_4").style.borderStyle="none";
        
                }                    
                


                // *************************************************
                var M_SectionP = 5

                function buttonMI5() {
                    M_SectionP = 5
            
                    document.querySelector(".buttonMI_DIV_5").style.opacity="100%";
                    document.querySelector(".buttonMI_DIV_5").style.zIndex = "10";
                    document.querySelector(".B_MI_5").style.backgroundColor="#333";
                    document.querySelector(".B_MI_5").style.borderStyle="none";
                                        
                    document.querySelector(".buttonMI_DIV_6").style.opacity="0%";
                    document.querySelector(".buttonMI_DIV_6").style.zIndex = "-1";
                    document.querySelector(".B_MI_6").style.backgroundColor="#ffffff";
                    document.querySelector(".B_MI_6").style.borderStyle="solid";
                                        
                    document.querySelector(".buttonMI_DIV_7").style.opacity="0%";
                    document.querySelector(".buttonMI_DIV_7").style.zIndex = "-1";
                    document.querySelector(".B_MI_7").style.backgroundColor="#ffffff";
                    document.querySelector(".B_MI_7").style.borderStyle="solid";
    
                    document.querySelector(".buttonMI_DIV_8").style.opacity="0%";
                    document.querySelector(".buttonMI_DIV_8").style.zIndex = "-1";
                    document.querySelector(".B_MI_8").style.backgroundColor="#ffffff";
                    document.querySelector(".B_MI_8").style.borderStyle="solid";

                    document.querySelector(".buttonMI_DIV_9").style.opacity="0%";
                    document.querySelector(".buttonMI_DIV_9").style.zIndex = "-1";
                    document.querySelector(".B_MI_9").style.backgroundColor="#ffffff";
                    document.querySelector(".B_MI_9").style.borderStyle="solid";
    
                }
                function buttonMI6() {
                    M_SectionP = 6
                
                    document.querySelector(".buttonMI_DIV_6").style.opacity="100%";
                    document.querySelector(".buttonMI_DIV_6").style.zIndex = "10";
                    document.querySelector(".B_MI_5").style.backgroundColor="#ffffff";
                    document.querySelector(".B_MI_5").style.borderStyle="solid";
                    
                    document.querySelector(".buttonMI_DIV_5").style.opacity="0%";
                    document.querySelector(".buttonMI_DIV_5").style.zIndex = "-1";
                    document.querySelector(".B_MI_6").style.backgroundColor="#333";
                    document.querySelector(".B_MI_6").style.borderStyle="none";
                    
                    document.querySelector(".buttonMI_DIV_7").style.opacity="0%";
                    document.querySelector(".buttonMI_DIV_7").style.zIndex = "-1";
                    document.querySelector(".B_MI_7").style.backgroundColor="#ffffff";
                    document.querySelector(".B_MI_7").style.borderStyle="solid";
    
                    document.querySelector(".buttonMI_DIV_8").style.opacity="0%";
                    document.querySelector(".buttonMI_DIV_8").style.zIndex = "-1";
                    document.querySelector(".B_MI_8").style.backgroundColor="#ffffff";
                    document.querySelector(".B_MI_8").style.borderStyle="solid";

                    document.querySelector(".buttonMI_DIV_9").style.opacity="0%";
                    document.querySelector(".buttonMI_DIV_9").style.zIndex = "-1";
                    document.querySelector(".B_MI_9").style.backgroundColor="#ffffff";
                    document.querySelector(".B_MI_9").style.borderStyle="solid";
    
                    }
                    function buttonMI7() {
                    M_SectionP = 7
                
                    document.querySelector(".buttonMI_DIV_7").style.opacity="100%";
                    document.querySelector(".buttonMI_DIV_7").style.zIndex = "10";
                    document.querySelector(".B_MI_5").style.backgroundColor="#ffffff";
                    document.querySelector(".B_MI_5").style.borderStyle="solid";
                        
                    document.querySelector(".buttonMI_DIV_6").style.opacity="0%";
                    document.querySelector(".buttonMI_DIV_6").style.zIndex = "-1";
                    document.querySelector(".B_MI_6").style.backgroundColor="#ffffff";
                    document.querySelector(".B_MI_6").style.borderStyle="solid";
                        
                    document.querySelector(".buttonMI_DIV_5").style.opacity="0%";
                    document.querySelector(".buttonMI_DIV_5").style.zIndex = "-1";
                    document.querySelector(".B_MI_7").style.backgroundColor="#333";
                    document.querySelector(".B_MI_7").style.borderStyle="none";
        
                    document.querySelector(".buttonMI_DIV_8").style.opacity="0%";
                    document.querySelector(".buttonMI_DIV_8").style.zIndex = "-1";
                    document.querySelector(".B_MI_8").style.backgroundColor="#ffffff";
                    document.querySelector(".B_MI_8").style.borderStyle="solid";
                    
                    document.querySelector(".buttonMI_DIV_9").style.opacity="0%";
                    document.querySelector(".buttonMI_DIV_9").style.zIndex = "-1";
                    document.querySelector(".B_MI_9").style.backgroundColor="#ffffff";
                    document.querySelector(".B_MI_9").style.borderStyle="solid";
        
                        }
                function buttonMI8() {
                    M_SectionP = 8
                
                    document.querySelector(".buttonMI_DIV_8").style.opacity="100%";
                    document.querySelector(".buttonMI_DIV_8").style.zIndex = "10";
                    document.querySelector(".B_MI_5").style.backgroundColor="#ffffff";
                    document.querySelector(".B_MI_5").style.borderStyle="solid";
                            
                    document.querySelector(".buttonMI_DIV_6").style.opacity="0%";
                    document.querySelector(".buttonMI_DIV_6").style.zIndex = "-1";
                    document.querySelector(".B_MI_6").style.backgroundColor="#ffffff";
                    document.querySelector(".B_MI_6").style.borderStyle="solid";
                            
                    document.querySelector(".buttonMI_DIV_5").style.opacity="0%";
                    document.querySelector(".buttonMI_DIV_5").style.zIndex = "-1";
                    document.querySelector(".B_MI_7").style.backgroundColor="#ffffff";
                    document.querySelector(".B_MI_7").style.borderStyle="solid";
            
                    document.querySelector(".buttonMI_DIV_7").style.opacity="0%";
                    document.querySelector(".buttonMI_DIV_7").style.zIndex = "-1";
                    document.querySelector(".B_MI_8").style.backgroundColor="#333";
                    document.querySelector(".B_MI_8").style.borderStyle="none";

                    document.querySelector(".buttonMI_DIV_9").style.opacity="0%";
                    document.querySelector(".buttonMI_DIV_9").style.zIndex = "-1";
                    document.querySelector(".B_MI_9").style.backgroundColor="#ffffff";
                    document.querySelector(".B_MI_9").style.borderStyle="solid";
            
                    }   

                    function buttonMI9() {
                        M_SectionP = 9
                
                        document.querySelector(".buttonMI_DIV_9").style.opacity="100%";
                        document.querySelector(".buttonMI_DIV_9").style.zIndex = "10";
                        document.querySelector(".B_MI_5").style.backgroundColor="#ffffff";
                        document.querySelector(".B_MI_5").style.borderStyle="solid";
                                
                        document.querySelector(".buttonMI_DIV_6").style.opacity="0%";
                        document.querySelector(".buttonMI_DIV_6").style.zIndex = "-1";
                        document.querySelector(".B_MI_6").style.backgroundColor="#ffffff";
                        document.querySelector(".B_MI_6").style.borderStyle="solid";
                                
                        document.querySelector(".buttonMI_DIV_5").style.opacity="0%";
                        document.querySelector(".buttonMI_DIV_5").style.zIndex = "-1";
                        document.querySelector(".B_MI_7").style.backgroundColor="#ffffff";
                        document.querySelector(".B_MI_7").style.borderStyle="solid";
                
                        document.querySelector(".buttonMI_DIV_7").style.opacity="0%";
                        document.querySelector(".buttonMI_DIV_7").style.zIndex = "-1";
                        document.querySelector(".B_MI_9").style.backgroundColor="#333";
                        document.querySelector(".B_MI_9").style.borderStyle="none";
    
                        document.querySelector(".buttonMI_DIV_8").style.opacity="0%";
                        document.querySelector(".buttonMI_DIV_8").style.zIndex = "-1";
                        document.querySelector(".B_MI_8").style.backgroundColor="#ffffff";
                        document.querySelector(".B_MI_8").style.borderStyle="solid";
                
                        }  


                        

                        let touchstartX = 0
                        let touchendX = 0
                            
                        function checkDirection() {
                        if (touchendX < touchstartX){
                            
                            if(M_SectionP==5){
                                buttonMI6 ()
                            }else{
                                
                            if (M_SectionP==6) {
                                buttonMI7 ()
                            }else{
                            if (M_SectionP==7) { 
                                buttonMI8 ()
                                
                            }else{
                                if (M_SectionP==8) {
                                    buttonMI9 ()

                                    
                                }
                            else{
                                if(M_SectionP==9){
                                    buttonMI5 ()
                                }}}}}}
                        
                        
                        
                
                        if (touchendX > touchstartX){
                            
                            if(M_SectionP==5){
                                buttonMI9 ()
                            }else{
                                
                            if (M_SectionP==6) {
                                buttonMI5 ()
                            }else{
                            if (M_SectionP==7) { 
                                buttonMI6 ()
                                
                            }else{
                                if (M_SectionP==8) {
                                    buttonMI7 ()

                                    
                                }
                            else{
                                if(M_SectionP==9){
                                    buttonMI8 ()
                                }}}}}}
                        }
                
                        document.addEventListener('touchstart', e => {
                        touchstartX = e.changedTouches[0].screenX
                        })
                
                        document.addEventListener('touchend', e => {
                        touchendX = e.changedTouches[0].screenX
                        checkDirection()
                        })
                




















            
        

                    




