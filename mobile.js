window.onload = () => {
    if (isMobile()) {
        mobileWarning()
    }
};




function isMobile() {
    console.log('test')
    return (/Mobi|Android/i.test(navigator.userAgent));
}

const mobileWarning = () => {
    let modalWarning = new bootstrap.Modal(document.getElementById('mobile-warning'));
    modalWarning.show();
}