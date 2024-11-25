document.addEventListener('DOMContentLoaded', () => {
    const messageBox = document.getElementById('message-box');
    const popup = document.getElementById('popup');
    const serverDown = document.getElementById('server-down');
    const subscribeButton = document.getElementById('subscribe-btn');

    // Show verification for 5 seconds
    setTimeout(() => {
        messageBox.style.display = 'none';
        popup.classList.remove('hidden');
    }, 5000);

    // Redirect to YouTube channel on button click
    subscribeButton.addEventListener('click', () => {
        window.open('https://www.youtube.com/@TBSGAMERSOFC', '_blank');

        // Show server down message after button click
        popup.style.display = 'none';
        serverDown.classList.remove('hidden');
    });
});

// Assuming verification process and timing
window.onload = function() {
    setTimeout(function() {
        showPopup("failed");
    }, 5000); // Show the popup after 5 seconds
};

// Function to show the popup based on verification status
function showPopup(status) {
    // Hide all popups
    document.getElementById('popup').style.display = 'none';
    document.getElementById('server-down').style.display = 'none';

    if (status === "failed") {
        // Show the verification failed popup
        document.getElementById('popup').style.display = 'block';
    } else if (status === "serverDown") {
        // Show the server down popup
        document.getElementById('server-down').style.display = 'block';
    }
}

// Example function to simulate server down after subscribing
document.getElementById("subscribe-btn").addEventListener("click", function() {
    showPopup("serverDown");
});
