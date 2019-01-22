{
    var Calculator = /** @class */ (function () {
        function Calculator() {
            this.keys = [
                ["clear", "÷",],
                ["7", "8", "9", "x"],
                ["4", "5", "6", "-"],
                ["1", "2", "3", "+"],
                ["0", ".", "="]
            ];
            this.createContainer();
            this.createOutput();
            this.createButtons();
            this.bindEvents();
        }
        Calculator.prototype.createButtons = function () {
            var _this = this;
            this.keys.forEach(function (textList) {
                var div = document.createElement('div');
                textList.forEach(function (text) {
                    _this.createButton(text, div, "button text-" + text);
                });
                _this.container.appendChild(div);
            });
        };
        Calculator.prototype.createButton = function (text, container, className) {
            var button = document.createElement('button');
            button.textContent = text;
            if (className) {
                button.className = className;
            }
            container.appendChild(button);
            return button;
        };
        Calculator.prototype.createContainer = function () {
            var container = document.createElement('div');
            container.className = 'calculator';
            document.body.appendChild(container);
            this.container = container;
        };
        Calculator.prototype.createOutput = function () {
            var output = document.createElement('div');
            output.className = 'output';
            this.container.appendChild(output);
            this.output = output;
            var span = document.createElement('span');
            span.innerText = '0';
            output.appendChild(span);
            this.span = span;
        };
        Calculator.prototype.bindEvents = function () {
            var _this = this;
            this.container.addEventListener('click', function (e) {
                if (e.target instanceof HTMLButtonElement) {
                    var button = e.target;
                    var text = button.textContent;
                    //判断字符类型
                    if ('0123456789'.indexOf(text) >= 0) {
                        if (_this.operator) {
                            if (_this.n2) {
                                _this.n2 = parseInt(_this.n2.toString() + text);
                            }
                            else {
                                _this.n2 = parseInt(text);
                            }
                            _this.span.textContent = _this.n2.toString();
                        }
                        else {
                            if (_this.n1) {
                                _this.n1 = parseInt(_this.n1.toString() + text);
                            }
                            else {
                                _this.n1 = parseInt(text);
                            }
                            _this.span.textContent = _this.n1.toString();
                        }
                    }
                    else if ('+-x÷'.indexOf(text) >= 0) {
                        _this.operator = text;
                    }
                    else if ('='.indexOf(text) >= 0) {
                        var result = void 0;
                        if (_this.operator === '+') {
                            result = _this.n1 + _this.n2;
                        }
                        else if (_this.operator === '-') {
                            result = _this.n1 - _this.n2;
                        }
                        else if (_this.operator === 'x') {
                            result = _this.n1 * _this.n2;
                        }
                        else if (_this.operator === '÷') {
                            result = _this.n1 / _this.n2;
                        }
                        _this.span.textContent = result.toString();
                    }
                    else if ('clear'.indexOf(text) >= 0) {
                        _this.span.textContent = '0';
                    }
                }
            });
        };
        return Calculator;
    }());
    new Calculator();
}
