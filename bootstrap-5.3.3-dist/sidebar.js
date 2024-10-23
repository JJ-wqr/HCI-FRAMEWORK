// Open sidebar
function openSidebar() {
    document.getElementById("sidebar").classList.add("sidebar-open");
    document.getElementById("main").style.marginLeft = "250px"; // Shift main content to the right
}

// Close sidebar
function closeSidebar() {
    document.getElementById("sidebar").classList.remove("sidebar-open");
    document.getElementById("main").style.marginLeft = "0"; // Reset main content position
}
