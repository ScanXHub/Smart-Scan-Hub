function openScanner() {
    window.location.href = "qrscanner.html";
}

function openGenerator() {
    window.location.href = "qrgenerator.html";
}
function submitFeedback() {

    const name =
        document.getElementById("feedbackName").value.trim();

    const feedback =
        document.getElementById("feedbackText").value.trim();

    const message =
        document.getElementById("feedbackMessage");

    if (name === "" || feedback === "") {

        message.innerText =
            "Please enter your name and feedback.";

        return;
    }

    let feedbackList =
        JSON.parse(localStorage.getItem("feedbackList")) || [];

    feedbackList.push({
        name: name,
        feedback: feedback
    });

    localStorage.setItem(
        "feedbackList",
        JSON.stringify(feedbackList)
    );

    message.innerText =
        "Thank you for your feedback!";

    document.getElementById("feedbackName").value = "";
    document.getElementById("feedbackText").value = "";
}
function scrollToTop() {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}