function showSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'flex'
}

function hideSidebar(){
    const sidebar = document.querySelector('.sidebar');
    const hidebar = document.querySelector('.hidebar');

    const animate = [
        {transform: "translateX(0px)"},
        {transform: "translateX(300px)"},
    ];

    const timing = {
        duration: 1000,
        iterations: 1,
    };

    sidebar.animate(animate,timing)

    setTimeout(()=>{
        sidebar.style.display='none'
    },1000)
}