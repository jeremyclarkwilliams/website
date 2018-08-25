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

    window.onscroll = (e) => {
        // show or hide back to top button 
        if (btnTopShown && docScrollTop() <= btnShowDistance) {
            $btnTop.classList.remove('show');
            btnTopShown = false;
        } else if (!btnTopShown && docScrollTop() > btnShowDistance) {
            $btnTop.classList.add('show');
            btnTopShown = true;
        }
    }


    /* Skills Chart */

    const $skills = document.getElementsByClassName('skill-level');

    let skillsArr = [],
        currentSkill = 0;

    for (var $skill of $skills) {
        let skill = {};
        skill.skillLevel = parseFloat($skill.textContent) || 1;
        skill.skillBar = $skill.firstElementChild;
        skillsArr.push(skill);
    }

    const populateSkillBars = setInterval(() => {
        let skill = skillsArr[currentSkill];
        skill.skillBar.style.width = skill.skillLevel * 10 + '%';
        currentSkill++;
        if (currentSkill === skillsArr.length) {
            clearInterval(populateSkillBars);
        }
    }, 250);

})();
