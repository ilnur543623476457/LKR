// window.addEventListener('load', () => {
//     window.webkit.messageHandlers.messageAppHandler.postMessage('Navigator');
// });

// document.querySelector('.txt1').addEventListener('click', () => {
//     window.webkit.messageHandlers.messageAppHandler.postMessage('Navigator');
// })

// document.querySelector('.txt2').addEventListener('click', () => {
//     window.webkit.messageHandlers.messageAppHandler.postMessage('Notification');
// })
const anim = lottie
console.log(anim);
anim.loadAnimation({
    container: document.querySelector('#lottie-anime'),
    render: 'svg',
    loop: false,
    autoplay: true,
    path: './anim/loti.json'
})


window.addEventListener('load', () => {
    window.webkit.messageHandlers.messageAppHandler.postMessage('Navigator');
});


ymaps.ready(init);
function init() {
    // Создание карты.
    var myMap = new ymaps.Map("map", {
        center: [56.31805995789757, 44.00093078613282],
        zoom: 12,
        controls: [],
    });
}