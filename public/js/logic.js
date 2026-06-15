const withPerson = document.getElementById('one');
const withoutPerson = document.getElementById('two');
const start = document.getElementById('start-button');
const next = document.getElementById('next');
const back = document.getElementById('previous');

withPerson.style.display = 'none';
withoutPerson.style.display = 'none';

start.addEventListener('click', startFlicker);

let count = 0;
function startFlicker() {
    start.style.display = 'none';
    next.style.display = 'none';
    back.style.display = 'none';
    runSequence(); // Kick off the loop
}

function runSequence() {
    // Step 1: Show "With Person" for 2 seconds
    withPerson.style.display = 'block';
    withoutPerson.style.display = 'none';

    setTimeout(() => {
        // Step 2: Go blank for 1 second
        withPerson.style.display = 'none';
        withoutPerson.style.display = 'none';

        setTimeout(() => {
            // Step 3: Show "Without Person" for 2 seconds
            withPerson.style.display = 'none';
            withoutPerson.style.display = 'block';

            setTimeout(() => {
                // Step 4: Go blank for 1 second
                withPerson.style.display = 'none';
                withoutPerson.style.display = 'none';

                // Step 5: Wait 1 second, then restart the whole sequence
                if (count > 10) {
                    start.style.display = 'block';
                    next.style.display = 'block';
                    back.style.display = 'block';
                    count = 0;
                    return;
                } else {
                    setTimeout(runSequence, 400);
                    count++;
                }
                //setTimeout(runSequence, 400);

            }, 300); // "Without Person" duration
        }, 400); // First blank duration
    }, 300); // "With Person" duration
    if (count > 10) {
        return;
        start.style.display = 'block';
    } else {
        count++;
    }
}