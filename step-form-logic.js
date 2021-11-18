let allStepButtons = document.querySelectorAll('.buttons--step');
let manualButton = document.querySelector('#manual-input-button');
let expectationsInput = document.querySelector('[expectations]');
let currentStepType;
let errorsCounter;
let activeStep;

function startManual() {
    currentStepType = 'substep--active';
    activeStep = document.querySelector('.' + currentStepType);
    let allShouldBeRequired = document.querySelectorAll('[should-be-required]');
    allShouldBeRequired.forEach(input => {
        input.setAttribute('required', '');
    });
    activeStep.classList.remove(currentStepType);
    nextStep = activeStep.nextElementSibling;
    nextStep.classList.add(currentStepType);
}

function showNextStep() {
    if (activeStep.getAttribute('out-to') == 'out') {
        activeStep.parentNode.classList.remove('step--active');
        activeStep.parentNode.nextElementSibling.classList.add('step--active');

    } else {
        nextStep = activeStep.nextElementSibling;
        activeStep.classList.remove(currentStepType);
        nextStep.classList.add(currentStepType);
    }
}

function checkStepPassed() {
    allReqFields = document.querySelectorAll('.' + currentStepType + ' [required]');
    allReqFields.forEach(reqField => {
        if (reqField.value == '') {
            reqField.classList.add('input--error');
            reqField.classList.remove('input--passed');
        } else {
            reqField.classList.remove('input--error');
            reqField.classList.add('input--passed');
        }
    });

    errorsCounter = document.querySelectorAll('.step--active .input--error').length;
    activeStep = document.querySelector('.' + currentStepType);

    if (errorsCounter == 0) {
        activeStep.setAttribute('step-passed', 'true');
        showNextStep();
    } else {
        activeStep.setAttribute('step-passed', 'false');
    }
}

function checkCurrentStep() {
    let currentStep = document.querySelector('.step--active');


    if (currentStep.getAttribute('step-type') == 'global') {
        currentStepType = 'step--active';
        checkStepPassed();
    }

    if (currentStep.getAttribute('step-type') == 'branch-parent') {
        currentStepType = 'substep--active';
        checkStepPassed();
    }

}

allStepButtons.forEach(stepButton => {
    stepButton.addEventListener('click', function() {
        checkCurrentStep();
    });
});

manualButton.addEventListener('click', function() {
    startManual();
});

expectationsInput.addEventListener('input', function() {
    currentSkipButton = expectationsInput.nextElementSibling.querySelector('.buttons');
    if (expectationsInput.value != '') {
        currentSkipButton.classList.remove('buttons--skip-style');
        currentSkipButton.textContent = 'Next';
    } else {
        currentSkipButton.classList.add('buttons--skip-style');
        currentSkipButton.textContent = 'Skip';
    }
});