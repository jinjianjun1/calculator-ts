{
    var Calculator = /** @class */ (function () {
        function Calculator() {
            this.n1 = null;
            this.n2 = null;
            this.operator = null;
            this.result = null;
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
        Calculator.prototype.updateN = function (number, text) {
            if (this[number]) {
                this[number] = parseInt(this[number].toString() + text);
            }
            else {
                this[number] = parseInt(text);
            }
            this.span.textContent = this[number].toString();
        };
        Calculator.prototype.updateNumber = function (text) {
            if (this.operator) {
                this.updateN('n2', text);
            }
            else {
                this.updateN('n1', text);
            }
        };
        Calculator.prototype.updateResult = function () {
            var result;
            if (this.operator === '+') {
                result = this.n1 + this.n2;
            }
            else if (this.operator === '-') {
                result = this.n1 - this.n2;
            }
            else if (this.operator === 'x') {
                result = this.n1 * this.n2;
            }
            else if (this.operator === '÷') {
                result = this.n1 / this.n2;
            }
            this.span.textContent = result.toString();
            this.n1 = null;
            this.n2 = null;
            this.operator = null;
            this.result = result;
        };
        Calculator.prototype.typeJudge = function (text) {
            if ('0123456789'.indexOf(text) >= 0) {
                this.updateNumber(text);
            }
            else if ('+-x÷'.indexOf(text) >= 0) {
                if (this.n1 === null) {
                    this.n1 = this.result;
                }
                this.operator = text;
            }
            else if ('='.indexOf(text) >= 0) {
                this.updateResult();
            }
            else if ('clear'.indexOf(text) >= 0) {
                this.span.textContent = '0';
            }
        };
        Calculator.prototype.bindEvents = function () {
            var _this = this;
            this.container.addEventListener('click', function (e) {
                if (e.target instanceof HTMLButtonElement) {
                    var button = e.target;
                    var text = button.textContent;
                    _this.typeJudge(text);
                }
            });
        };
        return Calculator;
    }());
    new Calculator();
}
