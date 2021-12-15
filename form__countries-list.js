let countryListInput = document.querySelector('#step-1__country');
let statesListInput = document.querySelector('#step-1__state');
let stateTriggerShow = document.querySelector('.o__input-countries-wrapper__1');
let stateTriggerClose = document.querySelector('.c__input-countries-wrapper__1');

countryListInput.addEventListener('change', function () {
    console.log(this.value);
    if (this.value == 'Deutschland') {
        stateTriggerShow.click();
        statesListInput.setAttribute('required', '');
    } else {
        stateTriggerClose.click();
        statesListInput.removeAttribute('required');
    }
});