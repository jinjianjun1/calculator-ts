{
    //创建按钮函数
    function createButton(text, container, className) {
        var button = document.createElement('button');
        button.textContent = text;
        if (className) {
            button.className = className;
        }
        container.appendChild(button);
        return button;
    }
    // 创建container
    var container_1 = document.createElement('div');
    container_1.className = 'calculator';
    //创建output
    var output = document.createElement('div');
    output.className = 'output';
    container_1.appendChild(output);
    //创建output span
    var span_1 = document.createElement('span');
    span_1.innerText = '0';
    output.appendChild(span_1);
    //声明 n1 n2 operator
    var n1_1;
    var n2_1;
    var operator_1;
    //监听container
    container_1.addEventListener('click', function (e) {
        if (e.target instanceof HTMLButtonElement) {
            var button = e.target;
            var text = button.textContent;
            //判断字符类型
            if ('0123456789'.indexOf(text) >= 0) {
                if (operator_1) {
                    if (n2_1) {
                        n2_1 = parseInt(n2_1.toString() + text);
                    }
                    else {
                        n2_1 = parseInt(text);
                    }
                    span_1.textContent = n2_1.toString();
                }
                else {
                    if (n1_1) {
                        n1_1 = parseInt(n1_1.toString() + text);
                    }
                    else {
                        n1_1 = parseInt(text);
                    }
                    span_1.textContent = n1_1.toString();
                }
            }
            else if ('+-x÷'.indexOf(text) >= 0) {
                operator_1 = text;
            }
            else if ('='.indexOf(text) >= 0) {
                var result = void 0;
                if (operator_1 === '+') {
                    result = n1_1 + n2_1;
                }
                else if (operator_1 === '-') {
                    result = n1_1 - n2_1;
                }
                else if (operator_1 === 'x') {
                    result = n1_1 * n2_1;
                }
                else if (operator_1 === '÷') {
                    result = n1_1 / n2_1;
                }
                span_1.textContent = result.toString();
            }
        }
    });
    //声明按钮
    var keys = [
        ["clear", "÷",],
        ["7", "8", "9", "x"],
        ["4", "5", "6", "-"],
        ["1", "2", "3", "+"],
        ["0", ".", "="]
    ];
    //将按钮放到body里
    keys.forEach(function (textList) {
        var div = document.createElement('div');
        textList.forEach(function (text) {
            createButton(text, div, "button text-" + text);
        });
        container_1.appendChild(div);
    });
    document.body.appendChild(container_1);
}
