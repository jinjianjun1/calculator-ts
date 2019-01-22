{
    //创建按钮函数
    function createButton(text:string,container:HTMLDivElement,className:string){
        let button:HTMLButtonElement=document.createElement('button')
        button.textContent=text   
        if(className){
            button.className=className
        } 
        container.appendChild(button)    
        return button
    }
    // 创建container
    let container:HTMLDivElement=document.createElement('div')
    container.className='calculator'
    
    //创建output
    let output:HTMLDivElement=document.createElement('div')
    output.className='output'
    container.appendChild(output)
    //创建output span
    let span:HTMLSpanElement=document.createElement('span')
    span.innerText='0'
    output.appendChild(span)
    //声明 n1 n2 operator
    let n1:number
    let n2:number
    let operator:string
    //监听container
    container.addEventListener('click',(e)=>{
        if(e.target instanceof HTMLButtonElement){
            let button =e.target
            let text =button.textContent
            //判断字符类型
            if ('0123456789'.indexOf(text)>=0) {
                if(operator){
                    if(n2){
                        n2=parseInt(n2.toString()+ text)                  
                    }else{
                        n2=parseInt(text)
                    }
                    span.textContent=n2.toString()
                }else{
                    if(n1){
                        n1=parseInt(n1.toString()+ text)                  
                    }else{
                        n1=parseInt(text)
                    }
                    span.textContent=n1.toString()
                
                }
                
            }else if ('+-x÷'.indexOf(text)>=0) {
                operator=text                
            }else if ('='.indexOf(text)>=0) {
                let result
                if (operator==='+') {
                    result=n1+n2;
                }else if(operator==='-'){
                    result=n1-n2;
                }else if (operator==='x') {
                    result=n1*n2;
                }else if (operator==='÷') {
                    result=n1/n2;
                }
                span.textContent=result.toString()

            }
        }         
    })
    //声明按钮
    let keys:Array<Array<string>>=[
        [  "clear", "÷", ],
        ["7", "8", "9", "x"],
        [ "4", "5", "6", "-"],
        [ "1", "2", "3", "+"],
        ["0", ".", "="]]

    //将按钮放到body里
    keys.forEach((textList:Array<string>)=>{
        let div:HTMLDivElement=document.createElement('div')
        textList.forEach((text:string)=>{
            createButton(text,div,`button text-${text}`)
            
        })
        container.appendChild(div)
    })
    document.body.appendChild(container)

}