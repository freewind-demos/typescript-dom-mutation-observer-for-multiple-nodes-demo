const button = document.getElementById('button')!;
const div1 = document.getElementById('div1')!;
const div2 = document.getElementById('div2')!;

button.addEventListener('click', () => {
    div1.innerText += '#';
    div2.innerText += '%';
})

const observerOptions = {
    childList: true, // direct children
    attributes: true,
    subtree: true // descendants. Only available when childList is true
};

const observer = new MutationObserver((mutations, observer) => {
    console.log("### mutations", mutations)
});

observer.observe(div1, observerOptions);
observer.observe(div2, observerOptions);

