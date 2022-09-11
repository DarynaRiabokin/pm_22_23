(() => {
    const sidebar = document.getElementById('sidebar');
    const collapseButton = document.getElementById('collapse-menu');

    const toggleSidebar = () => {
        if (sidebar.classList.contains('closed')) {
            sidebar.classList.remove('closed');
        } else {
            sidebar.classList.add('closed');
        }
    }

    collapseButton.onclick = toggleSidebar;
})();
