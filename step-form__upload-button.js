let uploadCareTrigger;
let uploadButton = document.querySelector('.buttons--uploadcare');
let uploadSkipButton = document.querySelector('#upload-skip-button');
let embedChangeCounter = 0;
let fileNameElement;

function nameChanged() {
    fileNameElement = document.querySelector('.uploadcare--widget__file-name');
    if (fileNameElement != null) {
        uploadButton.textContent = fileNameElement.textContent;
        uploadSkipButton.classList.remove('buttons--skip-style');
        uploadSkipButton.textContent = 'Next';
    }
}

function listentingUploadButton() {
    let targetNodeFileNameStatus = document.querySelector('#uploadcare--widget__text');
    if (targetNodeFileNameStatus != null) {
        const targetNodeFileName = document.querySelector('#uploadcare--widget__text');
        const observerOptionsFileName = {
            childList: true,
            attributes: true,
            subtree: true
        }
        const observerFileName = new MutationObserver(nameChanged);
        observerFileName.observe(targetNodeFileName, observerOptionsFileName);
    }


    if (embedChangeCounter == 0) {
        uploadCareTrigger = document.querySelector('.uploadcare--widget__button');
        uploadButton.addEventListener('click', function () {
            uploadCareTrigger.click();
        })
    }
    embedChangeCounter = embedChangeCounter + 1;
}

function embedChanged() {
    listentingUploadButton();
}

const targetNodeEmbed = document.querySelector('.uploadcare-embed');
const observerOptionsEmbed = {
    childList: true,
    attributes: true,
    subtree: true
}
const observerEmbed = new MutationObserver(embedChanged);
observerEmbed.observe(targetNodeEmbed, observerOptionsEmbed);
