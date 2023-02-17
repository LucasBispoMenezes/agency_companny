const totalImagsn = document.querySelectorAll('.box-image').length - 1;
let interval = 0


const action = () => {
    let img = document.querySelectorAll('.box-image img');
    const bar = document.querySelectorAll('.bar');
    setInterval(() => {
        img[interval].style.display = 'none';
        interval++;
        if (interval > totalImagsn) {
            interval = 0;
        }
        img[interval].style.display = 'block';
    }, 3000);
}

action();
