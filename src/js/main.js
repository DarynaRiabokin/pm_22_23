(() => {
    const sidebar = document.getElementById('sidebar');
    const content = document.getElementById('content');
    const collapseButton = document.getElementById('collapse-menu');

    const toggleSidebar = () => {
        if (sidebar.classList.contains('closed')) {
            sidebar.classList.remove('closed');
            content.classList.remove('col-10');
            content.classList.add('col-9');
        } else {
            sidebar.classList.add('closed');
            content.classList.remove('col-9');
            content.classList.add('col-10');
        }
    }

    collapseButton.onclick = toggleSidebar;
})();
