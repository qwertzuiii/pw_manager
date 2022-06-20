function redir(a) {
    window.location.href = a;
}

function redir_timeout(a, time) {
    setTimeout(() => {
        window.location.href = a;
    }, time);
}