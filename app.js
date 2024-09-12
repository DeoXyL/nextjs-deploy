// Function to dynamically generate the resume
function generateResume(event) {
    var _a;
    // Prevent the form from submitting the traditional way
    event.preventDefault();
    // Get values from the form inputs
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var education = document.getElementById('education').value;
    var workExperience = document.getElementById('workExperience').value;
    // Get the profile image file
    var profileImage = (_a = document.getElementById('profileImage').files) === null || _a === void 0 ? void 0 : _a[0];
    var profileImagePreview = document.getElementById('profileImagePreview');
    // Display text values in the resume section
    document.getElementById('displayName').textContent = name;
    document.getElementById('displayEmail').textContent = email;
    document.getElementById('displayEducation').textContent = education;
    document.getElementById('displayWorkExperience').textContent = workExperience;
    // Display the profile image in the resume section
    if (profileImage) {
        var reader = new FileReader();
        reader.onload = function (e) {
            var _a;
            profileImagePreview.src = (_a = e.target) === null || _a === void 0 ? void 0 : _a.result;
        };
        reader.readAsDataURL(profileImage); // Convert the image file to a data URL
    }
    // Show the generated resume
    document.getElementById('generatedResume').style.display = 'block';
}
// Attach the submit event listener to the form
var resumeForm = document.getElementById('resumeForm');
resumeForm.addEventListener('submit', generateResume);
