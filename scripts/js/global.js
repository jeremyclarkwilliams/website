(function() {

    // declare variables
    var windowScroll = window.scrollY;

    // basic scroll animation
    var scrollInterval,
            scrollDiff = scrollVal = 0,
            scroller = function(toPos) {
                windowScroll = window.scrollY;
                // get difference between current position and destination
                scrollDiff = Math.abs(windowScroll - toPos);
                // slow scroll at less than 200px to destination
                scrollVal = (scrollDiff < 200) ? -Math.ceil(scrollDiff / 2) : -100;
                window.scrollBy(0, scrollVal);
                if (!scrollDiff) {
                    // 0 difference, meaning we're at destination, so stop interval
                    clearInterval(scrollInterval);
                }
            };

    document.getElementById('back-to-top').onclick = function(e) {
        e.preventDefault();
        this.blur();
        scrollInterval = setInterval(function() { scroller(0); }, 20);
    }

})();
