document.addEventListener("DOMContentLoaded", function() {
    const messagesContent = document.querySelector(".messages-content");
    const messageInput = document.querySelector(".message-input");
    const messageSubmit = document.querySelector(".message-submit");

    // Add message
    function addMessage(text, type) {
        const messageDiv = document.createElement("div");
        messageDiv.classList.add("message", type);

        const messageText = document.createElement("p");
        messageText.textContent = text;
        messageDiv.appendChild(messageText);

        messagesContent.appendChild(messageDiv);
        messagesContent.scrollTop = messagesContent.scrollHeight; 
    }

    // Send button 
    messageSubmit.addEventListener("click", function() {
        const userMessage = messageInput.value.trim();
        if (userMessage) {
            addMessage(userMessage, "sent");
            messageInput.value = "";
            
            // Response
            setTimeout(() => {
                let reply = "You know who I AM. That chopper is heading to the swamp?";
                if (userMessage.toLowerCase().includes("shrek")) {
                    reply = "HEY I AM THE BOSS NOT YOU!";
                } else if (userMessage.toLowerCase().includes("hello")) {
                    reply = "Make it quick";
                } else if (userMessage.toLowerCase().includes("bye")) {
                    reply = "Have you payed?";
                }
                // delay
                addMessage(reply, "received");
            }, 1000); 
        }
    });

    // Pressing enter to also send
    messageInput.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            event.preventDefault();
            messageSubmit.click();
        }
    });
});
