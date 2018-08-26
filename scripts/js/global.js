(() => {

    /* Back to Top Button and Scroll Animation */

    const $btnTop = document.getElementById('back-to-top'),
          btnShowDistance = 200;

    let scrollInterval,
        scrollDiff = scrollVal = 0,
        btnTopShown = false;

    const docScrollTop = () => {
        return document.documentElement.scrollTop || document.body.scrollTop;
    }

    // basic scroll animation
    const scroller = (toPos = 0) => {
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
        scrollInterval = setInterval(scroller, 20);
    }


    /* Skills Chart */

    const $skills = document.getElementsByClassName('skill-level'),
          $skillsSection = document.getElementById('section-skills');

    let skillsArr = [],
        skillCounter = 0,
        skillsRendered = false,
        skillBarInterval;

    for (var $skill of $skills) {
        let skill = {};
        skill.level = parseFloat($skill.textContent) || 1;
        skill.bar = $skill.firstElementChild;
        skillsArr.push(skill);
    }

    const setSkillBarWidth = () => {
        let skill = skillsArr[skillCounter];
        // adjust level so lower levels appear more accurate in chart
        // 1 -> 0.5, 2 -> 1.5556, ... 9 -> 8.9444, 10 -> 10
        let levelAdj = skill.level - (10 - skill.level) * (5 / 90);
        skill.bar.style.width = levelAdj * 10 + '%';
        skillCounter++;
        if (skillCounter === skillsArr.length) {
            clearInterval(skillBarInterval);
        }
    }


    /* Window Stuff */

    const windowHt = window.innerHeight;

    const scrollListener = (e) => {
        // show or hide back to top button 
        if (btnTopShown && docScrollTop() <= btnShowDistance) {
            btnTopShown = false;
            $btnTop.classList.remove('show');
        } else if (!btnTopShown && docScrollTop() > btnShowDistance) {
            btnTopShown = true;
            $btnTop.classList.add('show');
        }
        // render skills chart when in view
        if (!skillsRendered && docScrollTop() > ($skillsSection.offsetTop - windowHt / 2)) {
            skillsRendered = true;
            skillBarInterval = setInterval(setSkillBarWidth, 100);
        }
    }

    window.addEventListener('scroll', scrollListener);

})();
