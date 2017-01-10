const cats = document.querySelectorAll('.image');
const voteButton = document.querySelector('#vote');
const radios = document.querySelectorAll('input[type="radio"]');

cats.forEach(img => {
    img.addEventListener('click', imageClickHandler);
});

function imageClickHandler(e) {
    cats.forEach(img => {
        if (e.target === img.firstChild) {
            img.classList.add('selected');
            img.classList.remove('notSelected');
            enableButton(e.target);
        } else {
            img.classList.remove('selected');
            img.classList.add('notSelected');
        }
    });
}

function enableButton(target) {
    radios.forEach(radio => {
        if (radio.id === target.dataset.cat) {
            radio.checked = true;
        } else {
            radio.checked = false;
        }
    });
    voteButton.disabled = false;
}
