function initializeUpCare() {
    let elButton__uploadCare = document.querySelector('.buttons--uploadcare');
    let elFileName;
    let elTrigger__uploadCare = document.querySelector('.uploadcare--widget__button');
    let nameInterval;

    function changeButtonTitle() {
        elButton__uploadCare.textContent = 'Upload'
    }

    function checkFileName() {
        elFileName = document.querySelector('.uploadcare--widget__file-name');
        if (elFileName == null) {
            //do nothing
        } else {
            elButton__uploadCare.textContent = ('Your file is: ' + elFileName.textContent);
            clearInterval(nameInterval);
        }
    }

    function checkFileNameInterval() {
        nameInterval = setInterval(checkFileName, 100)
    }

    elButton__uploadCare.addEventListener('click', function () {
        checkFileNameInterval();

        elTrigger__uploadCare.click();
        elButton__uploadCare.textContent = 'Wait, please...'

        setTimeout(changeButtonTitle, 2000);
    });
}

setTimeout(initializeUpCare, 500);