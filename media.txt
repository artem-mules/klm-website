function pagOnClickScroll() {
    let pagWrapper = document.querySelector('#wf-fslib-pagination');
    let hiddenPagTrigger = document.querySelector('.hidden-link');
    pagWrapper.addEventListener('click', function () {
        setTimeout(hiddenPagTrigger.click() , 300);
    });
}

function translateDateToGerman() {
    let dateLabels = document.querySelectorAll('.body-3--date');

    if (Weglot.getCurrentLang() == 'de') {
        dateLabels.forEach(label => {
            splittedLabel = label.textContent.split(' ')
            currentNonth = splittedLabel[0];

            if (currentNonth == 'Jan') {
                currentNonth = 'Jan'
            }

            if (currentNonth == 'Feb') {
                currentNonth = 'Feb'
            }
            if (currentNonth == 'Mar') {
                currentNonth = 'Mär'
            }
            if (currentNonth == 'Apr') {
                currentNonth = 'Apr'
            }
            if (currentNonth == 'May') {
                currentNonth = 'Mai'
            }
            if (currentNonth == 'Jun') {
                currentNonth = 'Jun'
            }
            if (currentNonth == 'Jul') {
                currentNonth = 'Jul'
            }
            if (currentNonth == 'Aug') {
                currentNonth = 'Aug'
            }
            if (currentNonth == 'Sep') {
                currentNonth = 'Sep'
            }
            if (currentNonth == 'Oct') {
                currentNonth = 'Okt'
            }
            if (currentNonth == 'Nov') {
                currentNonth = 'Nov'
            }
            if (currentNonth == 'Dec') {
                currentNonth = 'Dez'
            }


            label.textContent = (currentNonth + ' ' + splittedLabel[1] + ' ' + splittedLabel[2]);
        });
    } else {
        dateLabels.forEach(label => {
            splittedLabel = label.textContent.split(' ')
            currentNonth = splittedLabel[0];

            if (currentNonth == 'Jan') {
                currentNonth = 'Jan'
            }

            if (currentNonth == 'Feb') {
                currentNonth = 'Feb'
            }
            if (currentNonth == 'Mär') {
                currentNonth = 'Mar'
            }
            if (currentNonth == 'Apr') {
                currentNonth = 'Apr'
            }
            if (currentNonth == 'Mai') {
                currentNonth = 'May'
            }
            if (currentNonth == 'Jun') {
                currentNonth = 'Jun'
            }
            if (currentNonth == 'Jul') {
                currentNonth = 'Jul'
            }
            if (currentNonth == 'Aug') {
                currentNonth = 'Aug'
            }
            if (currentNonth == 'Sep') {
                currentNonth = 'Sep'
            }
            if (currentNonth == 'Okt') {
                currentNonth = 'Oct'
            }
            if (currentNonth == 'Nov') {
                currentNonth = 'Nov'
            }
            if (currentNonth == 'Dez') {
                currentNonth = 'Dec'
            }


            label.textContent = (currentNonth + ' ' + splittedLabel[1] + ' ' + splittedLabel[2]);
        });
    }

}


(function () {
    fsComponent2 = new FsLibrary('.cl__grid__media-list-wrapper--press')
})();

let userChangeLangByClick;

function tagsForLanguages() {
    let weGlotCurrentLang = Weglot.getCurrentLang();
    //delete tags from cards
    let filterAlleTags = document.querySelectorAll('.media-filter--pr-cat .navigation');
    if (weGlotCurrentLang == 'de') {
        filterAlleTags.forEach(alleTag => {
            if (alleTag.textContent != 'English' && alleTag.textContent != 'Andere Sprachen' && alleTag.textContent != 'Deutsch') {
                let currentAlleTag = alleTag.parentElement;
                currentAlleTag.classList.remove('media-filter__item--cards');
            }
        });
    } else {
        filterAlleTags.forEach(alleTag => {
            if (alleTag.textContent != 'English' && alleTag.textContent != 'German' && alleTag.textContent != 'Other languages' && alleTag.textContent != 'Regional press' && alleTag.textContent != 'Local press') {
                let currentAlleTag = alleTag.parentElement;
                currentAlleTag.classList.remove('media-filter__item--cards');
            }
        });
    }


    //exclude cards that refer to (condition)
    let cardsAlleTags = document.querySelectorAll('.press-wrapper .media-filter__item .navigation');
    if (weGlotCurrentLang == 'de') {
        cardsAlleTags.forEach(alleTag => {
            if (alleTag.textContent == 'English' || alleTag.textContent == 'Andere Sprachen') {
                let currentHidenCard = alleTag.parentElement.parentElement.parentElement.parentElement;
                currentHidenCard.remove();
            }
        });
    } else {
        cardsAlleTags.forEach(alleTag => {
            if (alleTag.textContent == 'German' || alleTag.textContent == 'Regional press' || alleTag.textContent == 'Local press') {
                let currentHidenCard = alleTag.parentElement.parentElement.parentElement.parentElement;
                currentHidenCard.remove();
            }
        });
    }
}

//Add actual buttons
function createActualCatButtons() {
    let pressFilterCategoryWrapper = document.querySelector('#press__media-filter-cat');
    let pressFilterCategories = new (Array);
    let pressListTagsPlaceholders = document.querySelectorAll('.tags-src__category');

    //make an array of categories and sort it
    pressListTagsPlaceholders.forEach(placeholder => {
        stepPlaceholderValue = placeholder.textContent;
        if (pressFilterCategories.includes(stepPlaceholderValue) == false) {
            pressFilterCategories.push(stepPlaceholderValue);
        }
    });

    pressFilterCategories.sort();

    pressFilterCategories.forEach(category => {
        let clonableFiterButton = document.querySelector('.clonable-elements .media-filter__item').cloneNode(true);
        clonableFiterButton.setAttribute('filter-by', category);
        clonableFiterButton.classList.add('filter-button-item');
        let clonableFiterButtonP = clonableFiterButton.querySelector('.navigation');
        clonableFiterButtonP.textContent = category;
        pressFilterCategoryWrapper.append(clonableFiterButton);
    });
}

//Add actual buttons
function createActualYearButtons() {
    let yearPlaceholders = document.querySelectorAll('.tags-src__year');
    let pressFilterWrapperYear = document.querySelector('#press__media-filter-year');
    let pressFilterYears = new (Array);

    //make an array of categories and sort it
    yearPlaceholders.forEach(placeholder => {
        let stepPlaceholderValue = placeholder.textContent;
        let stepPlaceholderSplit = stepPlaceholderValue.split(" ");
        let currentYear = stepPlaceholderSplit[stepPlaceholderSplit.length - 1];

        if (pressFilterYears.includes(currentYear) == false) {
            pressFilterYears.push(currentYear);
        }
    });

    pressFilterYears.sort();
    pressFilterYears.reverse();

    pressFilterYears.forEach(category => {
        let clonableFiterButton = document.querySelector('.clonable-elements .media-filter__item').cloneNode(true);
        clonableFiterButton.setAttribute('filter-by', category);
        clonableFiterButton.classList.add('filter-button-item');
        clonableFiterButton.classList.remove('media-filter__item--cards');
        let clonableFiterButtonP = clonableFiterButton.querySelector('.navigation');
        clonableFiterButtonP.textContent = category;
        pressFilterWrapperYear.append(clonableFiterButton);
    });
}

//actions that are better to perform at the end
//hide system tags in cads
function hideSystemTags() {
    let cardsAlleTags = document.querySelectorAll('.press-wrapper .media-filter__item .navigation');
    cardsAlleTags.forEach(alleTag => {
        if (alleTag.textContent != 'English' && alleTag.textContent != 'Deutsch' && alleTag.textContent != 'German') {
            let currentAlleTag = alleTag.parentElement;
            currentAlleTag.classList.remove('media-filter__item--cards');
        }
    });
}

//finsweet staffs
function finSweetStartFilter() {

    (function () {
        myFilters2 = [{
            filterWrapper: '.media-filter--pr-cat',
            filterType: 'multi'
        },
        {
            filterWrapper: '.media-filter--pr-year',
            filterType: 'multi',
            filterByClass: ".media-filter__item--year"
        }
        ]

        fsComponent2.filter({
            filterArray: myFilters2,
            activeClass: 'w--current',
            animation: {
                enable: true
            }
        })

    })();


    let filterAlleTagsClick = document.querySelectorAll('.media-filter--pr-cat .navigation');
    filterAlleTagsClick[0].click();
    filterAlleTagsClick[0].click();

    function apperMedia() {
        let mediaWrapperEl = document.querySelector('#media-list-wrapper--op');
        mediaWrapperEl.classList.remove('media-list-wrapper--op--0');
    }

    setTimeout(apperMedia, 500);
    setTimeout(translateDateToGerman, 400);
    setTimeout(pagOnClickScroll, 600);

}

function finSweetStartPaginator() {

    (function () {
        /* LOAD MORE COMPONENT */

        // run loadmore on our instance
        fsComponent2.loadmore({
            button: ".load-more-button",
            resetIx: true,
            loadAll: true,
            paginate: {
                enable: true,
                itemsPerPage: 4,
                insertPagination: '.pagination-container',
                bgColor: '#FFFFFF',
                bgColorActive: '#240c2e',
                textColor: '#240c2e',
                textColorActive: '#FFFFFF',
                borderColor: '#3D315B'
            },
            animation: {
                enable: false
            }
        })

    })();

}

//the delete function is needed, when restarting the language, so that it does not create a dublicata of buttons
function removeFilterButtons() {
    let allFilterButtons = document.querySelectorAll('.filter-button-item');
    allFilterButtons.forEach(fiterButton => {
        fiterButton.remove();
    });
}

//a general function that calls all functionality except finsweet
function buttonsStarter() {
    removeFilterButtons();
    createActualYearButtons();
    createActualCatButtons();
    hideSystemTags();
    tagsForLanguages();
}

//After changing the language - check if the change was triggered by a user or automatically, if a user - reload the page
Weglot.on("languageChanged", function () {
    buttonsStarter();
    if (userChangeLangByClick == true) {
        document.location.reload();
    }
    userChangeLangByClick = false;
})

//after starting weGlot - we ask to run finsweet after 1 second, we only do this here because initialization always happens and the language change does not always
Weglot.on("initialized", function () {
    buttonsStarter();
})

finSweetStartPaginator();

function listenToSwitcher() {
    let weGlotSwitcherEl = document.querySelector('.dropdown-toggle--header--lang');
    weGlotSwitcherEl.addEventListener('mousedown', function () {
        userChangeLangByClick = true;
    });
}


//function that will be executed after the paginator is loaded
let pagStatus = 0;

function testFun() {
    if (pagStatus < 1) {
        // console.log('lets start ***finSweet');

        Weglot.initialize({
            api_key: 'wg_a06f3a7b6acb04572ef530639d3aa00a6'
        });
        setTimeout(finSweetStartFilter, 1000);
        setTimeout(listenToSwitcher, 1000);
    }
    pagStatus = pagStatus + 1;
}

let pagTimer;
//at the beginning of the function pagOs -> clear the timer, if there was one, and start it again
function pagObs() {
    clearTimeout(pagTimer);
    pagTimer = setTimeout(testFun, 200);
}
//start tracking the container with the paginator, it is important for us to understand when it changes
const targetNode = document.querySelector(".pagination-container");
const observerOptions = {
    childList: true,
    attributes: true,
    subtree: true
}
//Here we specify the function that will be run whenever the tree changes
const observer = new MutationObserver(pagObs);
observer.observe(targetNode, observerOptions);
//______________________________________________________________________________