function setTime(input) {
            var time = input;

            window.addEventListener('click', resetFunction);
            window.addEventListener('mousemove', resetFunction);
            window.addEventListener('scroll', resetFunction);

            timer = setTimeout(endFunction, time);
            return;

            function endFunction() {
                "use strict";
                window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ");
                return;
            }

            function resetFunction() {
                "use strict";
                clearTimeout(timer);
                timer = setTimeout(endFunction, time);
                return;
            }
        }



