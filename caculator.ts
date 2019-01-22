{

    class Calculator{
        constructor(){
            this.createContainer()
            this.createOutput()
            this.createButtons()
            this.bindEvents()
        }
        public n1:number
        public n2:number
        public operator:string
        public container:HTMLDivElement;
        public keys:Array<Array<string>>=[
            [  "clear", "÷", ],
            ["7", "8", "9", "x"],
            [ "4", "5", "6", "-"],
            [ "1", "2", "3", "+"],
            ["0", ".", "="]]
    
        private output:HTMLDivElement;
        private span:HTMLSpanElement;
        createButtons(){
            this.keys.forEach((textList:Array<string>)=>{
                let div:HTMLDivElement=document.createElement('div')
                textList.forEach((text:string)=>{
                    this.createButton(text,div,`button text-${text}`)
                    
                })
                this.container.appendChild(div)
            })
        
        }
        createButton(text:string,container:HTMLDivElement,className:string){
            let button:HTMLButtonElement=document.createElement('button')
            button.textContent=text   
            if(className){
                button.className=className
            } 
            container.appendChild(button)    
            return button
        }
        createContainer(){
            let container:HTMLDivElement=document.createElement('div')
            container.className='calculator'
            document.body.appendChild(container)
            this.container=container
        }
        createOutput(){
            let output:HTMLDivElement=document.createElement('div')
            output.className='output'
            this.container.appendChild(output)
            this.output=output
            let span:HTMLSpanElement=document.createElement('span')
            span.innerText='0'
            output.appendChild(span)
            this.span=span
        }
        bindEvents(){
            this.container.addEventListener('click',(e)=>{
                if(e.target instanceof HTMLButtonElement){
                    let button =e.target
                    let text =button.textContent
                    //判断字符类型
                    if ('0123456789'.indexOf(text)>=0) {
                        if(this.operator){
                            if(this.n2){
                                this.n2=parseInt(this.n2.toString()+ text)                  
                            }else{
                                this.n2=parseInt(text)
                            }
                            this.span.textContent=this.n2.toString()
                        }else{
                            if(this.n1){
                                this.n1=parseInt(this.n1.toString()+ text)                  
                            }else{
                                this.n1=parseInt(text)
                            }
                            this.span.textContent=this.n1.toString()
                        
                        }
                        
                    }else if ('+-x÷'.indexOf(text)>=0) {
                        this.operator=text                
                    }else if ('='.indexOf(text)>=0) {
                        let result
                        if (this.operator==='+') {
                            result=this.n1+this.n2;
                        }else if(this.operator==='-'){
                            result=this.n1-this.n2;
                        }else if (this.operator==='x') {
                            result=this.n1*this.n2;
                        }else if (this.operator==='÷') {
                            result=this.n1/this.n2;
                        }
                        this.span.textContent=result.toString()
        
                    }else if('clear'.indexOf(text)>=0){
                        this.span.textContent='0'
                    }
                }         
            })
        }
    }
    new Calculator()

    
    
    
}