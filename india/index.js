let ele=document.createElement("div")

ele.innerHTML=10


let time=10;
setTimeout(()=>{
    time=time-1;
    ele.innerHTML=time
    setTimeout(()=>{
        time=time-1; 
        ele.innerHTML=time
        setTimeout(()=>{
            time=time-1;
            ele.innerHTML=time
            setTimeout(()=>{
                time=time-1;
                ele.innerHTML=time
                setTimeout(()=>{
                    time=time-1;
                    ele.innerHTML=time
                    setTimeout(()=>{
                        time=time-1;
                        ele.innerHTML=time
                        setTimeout(()=>{
                            time=time-1;
                            ele.innerHTML=time
                            setTimeout(()=>{
                                time=time-1;
                                ele.innerHTML=time
                                setTimeout(()=>{
                                    time=time-1;
                                    ele.innerHTML=time
                                    setTimeout(()=>{
                                        ele.innerHTML=  `HAPPY <br>
                                                         INDIPENDENCE<br>
                                                            DAY`


                                    },1000)
                                  

                                },1000)
                            },1000)
                        },1000)
                    },1000)
                },1000)
            },1000)
        },1000)
    },1000)
  
},1000)

document.body.append(ele)
