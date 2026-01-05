
function addItem(type) {
    const input = document.getElementById(type + "-input");
    const list = document.getElementById(type + "-list");
    const text = input.value.trim();
    if (text === "") return;

    const li = document.createElement("li");
    li.textContent = text;
    list.appendChild(li);
    input.value = "";

    // Basic reminder after 5 seconds
    setTimeout(() => {
        alert(`Reminder: Don't forget your ${type.slice(0, -1)} - "${text}"!`);
    }, 5000);
}

function switchTab(tabId) {
    document.querySelectorAll(".tab").forEach(tab => tab.classList.remove("active"));
    document.getElementById(tabId).classList.add("active");
}
