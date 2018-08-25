(() => {

    // declare variables
    const $body = document.body;
    const $btnTop = document.getElementById('back-to-top');
    let bodyScroll = $body.scrollTop;

    // basic scroll animation
    let scrollInterval,
        scrollDiff = scrollVal = 0;

    const scroller = (toPos) => {
        bodyScroll = $body.scrollTop;
        // get difference between current position and destination
        scrollDiff = Math.abs(bodyScroll - toPos);
        // slow scroll at less than 200px to destination
        scrollVal = (scrollDiff < 200) ? -Math.ceil(scrollDiff / 2) : -100;
        $body.scrollBy(0, scrollVal);
        if (scrollDiff === 0) {
            // 0 difference, meaning we're at destination, so stop interval
            clearInterval(scrollInterval);
        }
    }

    $btnTop.onclick = (e) => {
        e.preventDefault();
        $btnTop.blur();
        scrollInterval = setInterval(() => { scroller(0); }, 20);
    }

})();
