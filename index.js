// Function to open the desired tab
function openTab(event, tabName) {
    var i, tabcontent, tablinks;

    // Hide all tab contents
    tabcontent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Remove "active" class from all tab links (unhighlight them)
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the selected tab content and add the "active" class to the clicked link
    document.getElementById(tabName).style.display = "block";
    event.currentTarget.className += " active";

    // Save the selected tab in localStorage
    localStorage.setItem("activeTab", tabName);
}

const initialInputValue = "1,2+i,3-2i,6";
// Function to check for a saved tab and activate it on page load
window.onload = function() {
    var activeTab = localStorage.getItem("activeTab");
    
    // If there is no saved tab, default to Tab 1
    if (!activeTab) {
        activeTab = "Tab1";
    }

    // Hide all tab contents (CSS handles this by default)
    // Show the saved active tab content immediately
    document.getElementById(activeTab).style.display = "block";
    
    // Find and activate the correct tab link
    var tablinks = document.getElementsByClassName("tablink");
    for (var i = 0; i < tablinks.length; i++) {
        // Check if this link corresponds to the active tab
        if (tablinks[i].getAttribute("onclick").includes(activeTab)) {
            tablinks[i].className += " active"; // Add "active" class only to the correct tab
        } else {
            tablinks[i].className = tablinks[i].className.replace(" active", ""); // Ensure all others are unhighlighted
        }
    }
    document.getElementById("input").value = initialInputValue;
};
