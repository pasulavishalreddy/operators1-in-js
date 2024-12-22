var a=10
    b=20
    console.log(a&&b) //20
    console.log(b&&a) //10
    console.log(a>b&&b>a) //false
    console.log(true&&true) //true

    a=0
    b=20
    console.log(a&&b) //0
    
    a=10
    b=20
    c=30
    console.log(a>b || a<b) //true
    console.log(a>b || a>b) //false
    console.log(b>a||a>c||c>a) //true

    a=10
    console.log(!!a) //true

    z=!true
    console.log(!z) //true

    a="vishal"
    if(!!a){
        alert("true")

    }else{
        alert("false")
    }

    // true

    a=10
    if(!a&&a){
        alert("true")

    }else{
        alert("false")
    }

    //false

    a=10
    b=10
    if(!!a&&b){
        alert("true")
    
    }else{
        alert("false")
    }

    //true

    if([ ]){
        alert("true")
    
    }else{
        alert("false") 
    }

    //true

    if(" "&&" "){
        alert("true")
    
    }else{
        alert("false") 
    }

    //true

    if([1,2,3]===["true"]){
        alert("true")
    
    }else{
        alert("false") 
    }

    //false

    if([1,2,3]&&[]){
        alert("true")
    
    }else{
        alert("false") 
    }

    //true

    if([1,2,3]&&""){
        alert("true")
    
    }else{
        alert("false") 
    }

    //false

    if([1,2,3]&& undefined){
        alert("true")
    
    }else{
        alert("false") 
    }

    //false

    if(undefined){
        alert("true")
    
    }else{
        alert("false") 
    }
    //false

    if(null && undefined){
        alert("true")
    
    }else{
        alert("false") 
    }
    //false

    if(null){
        alert("true")
    
    }else{
        alert("false") 
    }
    //false

    
    if(null || undefined){
        alert("true")
    
    }else{
        alert("false") 
    }
    //false

     
    if(null || []){
        alert("true")
    
    }else{
        alert("false") 
    }

    //true

    
     
    if(null || ""){
        alert("true")
    
    }else{
        alert("false") 
    }
    //false

      
    if(null || " "){
        alert("true")
    
    }else{
        alert("false") 
    }
    //true