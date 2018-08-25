(() => {

    // declare variables
    const $btnTop = document.getElementById('back-to-top'),
          btnShowDistance = 200;

    // basic scroll animation
    let scrollInterval,
        scrollDiff = scrollVal = 0,
        btnTopShown = false;

    const docScrollTop = () => {
        return document.documentElement.scrollTop || document.body.scrollTop;
    }

    const scroller = (toPos) => {
        const docScroll = docScrollTop();
        // get difference between current position and destination
        scrollDiff = Math.abs(docScroll - toPos);
        // slow scroll at less than 200px to destination
        scrollVal = (scrollDiff < 200) ? -Math.ceil(scrollDiff / 2) : -100;
        window.scrollBy(0, scrollVal);
        if (scrollDiff <= 0) {
            // 0 difference, meaning we're at destination, so stop interval
            clearInterval(scrollInterval);
        }
    }

    $btnTop.onclick = (e) => {
        e.preventDefault();
        $btnTop.blur();
        scrollInterval = setInterval(() => { scroller(0); }, 20);
    }

    window.onscroll = (e) => {
        // Show or hide back to top button 
        if (btnTopShown && docScrollTop() <= btnShowDistance) {
            $btnTop.classList.remove('show');
            btnTopShown = false;
        } else if (!btnTopShown && docScrollTop() > btnShowDistance) {
            $btnTop.classList.add('show');
            btnTopShown = true;
        }
    }

})();
