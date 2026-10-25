let photoData = "";

document.getElementById("photo").addEventListener("change", function () {
    const file = this.files[0];

    if (!file) {
        photoData = "";
        return;
    }

    if (!file.type.startsWith("image/")) {
        alert("Please select an image file.");
        this.value = "";
        return;
    }

    const reader = new FileReader();

    reader.onload = function (event) {
        photoData = event.target.result;
        document.getElementById("previewPhoto").src = photoData;
        document.getElementById("previewPhoto").style.display = "block";
    };

    reader.readAsDataURL(file);
});

function generateResume() {
    const name = document.getElementById("name").value.trim();

    if (!name) {
        alert("Please enter your full name.");
        return;
    }

    document.getElementById("previewName").textContent = name;

    const fields = [
        ["email", "previewEmail"],
        ["phone", "previewPhone"],
        ["address", "previewAddress"],
        ["objective", "previewObjective"],
        ["degree", "previewDegree"],
        ["college", "previewCollege"],
        ["year", "previewYear"],
        ["percentage", "previewPercentage"],
        ["skills", "previewSkills"],
        ["projects", "previewProjects"],
        ["certifications", "previewCertifications"]
    ];

    fields.forEach(function (field) {
        document.getElementById(field[1]).textContent =
            document.getElementById(field[0]).value.trim();
    });

    const photo = document.getElementById("previewPhoto");

    if (photoData) {
        photo.src = photoData;
        photo.style.display = "block";
    } else {
        photo.removeAttribute("src");
        photo.style.display = "none";
    }

    document.getElementById("resumePreview").scrollIntoView({
        behavior: "smooth"
    });
}

function resetForm() {
    document.getElementById("resumeForm").reset();

    photoData = "";

    document.getElementById("previewPhoto").removeAttribute("src");
    document.getElementById("previewPhoto").style.display = "none";

    const previewFields = [
        "previewName",
        "previewEmail",
        "previewPhone",
        "previewAddress",
        "previewObjective",
        "previewDegree",
        "previewCollege",
        "previewYear",
        "previewPercentage",
        "previewSkills",
        "previewProjects",
        "previewCertifications"
    ];

    previewFields.forEach(function (id) {
        document.getElementById(id).textContent =
            id === "previewName" ? "Your Name" : "";
    });
}

function printResume() {
    generateResume();

    if (document.getElementById("name").value.trim()) {
        window.print();
    }
      }
