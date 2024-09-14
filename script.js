var form = document.getElementById("resumeForm");
if (form) {
    form.addEventListener("submit", function (event) {
        event.preventDefault();
        console.log("form submitted");
        var nameElement = document.getElementById("name");
        var emailElement = document.getElementById("email");
        var phoneElement = document.getElementById("phone");
        var EducationElement = document.getElementById("Education");
        var ExperienceElement = document.getElementById("Experience");
        var skillsElement = document.getElementById("skills");
        if (nameElement &&
            emailElement &&
            phoneElement &&
            EducationElement &&
            ExperienceElement &&
            skillsElement) {
            var name_1 = nameElement.value;
            var email = emailElement.value;
            var phone = phoneElement.value;
            var Education = EducationElement.value;
            var Experience = ExperienceElement.value;
            var skills = skillsElement.value;
            var resumeOutput = "\n        <h2>Resume</h2>\n        \n        <p><strong>Name:</strong> ".concat(name_1, "</p>\n        <p><strong>Email:</strong> ").concat(email, "</p>\n        <p><strong>phone:</strong> ").concat(phone, "</p>\n    \n        <h3>Education</h3>\n        <p>").concat(Education, "</p>\n\n        <h3>Experience</h3>\n        <p>").concat(Experience, "</p>\n\n        <h3>Skills</h3>\n        <p>").concat(skills, "</p>\n    \n      ");
            var resumeOutputElement = document.getElementById("resumeOutput");
            if (resumeOutputElement) {
                resumeOutputElement.innerHTML = resumeOutput;
            }
            else {
                console.log("The resume output elements are missing");
            }
        }
        else {
            console.log("one or more output elements are missing");
        }
    });
}
