
$(function(){
    var key, value;
  
    function getParams() {
   
   
    var url = decodeURIComponent(location.href);
   
    url = decodeURIComponent(url);  
 
    var params='';
    
    params = url.substring( url.indexOf('?')+1, url.length );   
    
    key = params.split("=")[0];  
    value = params.split("=")[1];  
    }   
    getParams();  


   $.ajax({
       url: './js/sub2_4.json',
       dataType: 'json',
       success: function(data){
           var useData = data.furniture; 
           function dataPrint(arr){
               
                   var txt = '<ul>';
                   
                   for(var i in arr){ 
                       
                       var $Name = arr[i].Name;
                       var $Address = arr[i].Address;
                       var $Tel = arr[i].Tel;
                       var $Image = arr[i].Image;

                       txt+='<li>';
                       txt+='<img src="../sub2/images/content4/'+ $Image +'" alt="">';
                       txt+='<dl>';
                       txt+='<dt>'+$Name+'</dt>'; 
                       if($Address){
                       txt+='<dd class="discount"> <b>Discount</b> '+$Address+'</dd>';}
                       txt+='<dd> <b>Price</b> '+$Tel+'</dd>';
                       txt+='</dl>';
                       txt +='</li>';
                   }

                   txt += '</ul>';

                   $('.furniture_list').html(txt);
              
           };
           

           var newArray = [];
           
            
           if(value){
                
                newArray = useData.filter(function(element){
                    return element.Name.includes(value);
                });
                
                if(newArray.length!=0){
                    dataPrint(newArray);
                }else{
                    $('.furniture_list').html('<span style="display:block;text-align:center; font-size:30px; color:#005793">검색된 가구가 없습니다</span>');
                }
           }else{ 
                dataPrint(useData); 
           }


           $('#btn2').click(function(){ 

            var newArray = useData.filter(function(element){
            
           
            return element.Name.includes($('#title2').val());
            });
            
            if(newArray.length!=0){
                dataPrint(newArray); 
            }else{
                $('.furniture_list').html('<span style="display:block;text-align:center; font-size:30px; color:#005793">검색된 가구가 없습니다</span>');
            }
   
           });

           $('.btn_all').click(function(){  
               dataPrint(useData);
           });
       } 
   });
   $('.furniture_search dl dd a').click(function(e){
    e.preventDefault();

    var search_index = $(this).index(); 
    var ch='';
    if(search_index==0){
        ch='옷장';
    }else if(search_index==1){
        ch='식탁';
    }else if(search_index==2){
        ch='침대';
    }
    location.href = 'http://mibbmkkh.cafe24.com/sub2/sub2_4.html?pname='+  ch;
});
    
});