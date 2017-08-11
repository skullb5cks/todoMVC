(function(window){
    window.qs = function(selector, scope) {
        return (scope || document).querySelector(selector);
    }

    window.qsAll = function(selector, scope) {
        return (scope || document).querySelectorAll(selector);
    }

    window.$on = function(target, type, callback, useCapture) {
        target.addEventListener(type, callback, useCapture);
    }

    window.$delegate = function(target, selector, type, handler) {
        function dispatchEvent(event) {
            var targetElement = event.target;
            var potentialElement = window.qsAll(selector, target);
            var hasMatch = Array.prototype.indexOf.call(potentialElement, targetElement) > -1;

            if (hasMatch) {
                handler.call(targetElement, event);
            }
        }

        var useCapture = type === 'blur' || type === 'focus';

        window.$on(target, type, dispatchEvent, userCapture);
    }
})(window)