"use strict";
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('resume-form');
    const resumeContainer = document.getElementById('resume');
    const editButton = document.getElementById('edit-resume');
    const themeToggle = document.getElementById('toggle-theme');
    const sharelink = document.getElementById('sharelink');
    const share = document.getElementById('share');
    const downloadBtn = document.getElementById('download');
    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        document.body.classList.toggle('light-mode');
        themeToggle.textContent = document.body.classList.contains('dark-mode')
            ? 'Switch to light mode'
            : 'Switch to dark mode';
    });
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const username = document.getElementById('username').value;
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const education = document.getElementById('education').value;
        const work = document.getElementById('work-experience').value;
        const skills = document.getElementById('skills').value.split(',');
        const resumeData = {
            name,
            email,
            education,
            work,
            skills,
        };
        localStorage.setItem(username, JSON.stringify(resumeData));
        resumeContainer.innerHTML = '';
        const resumeHtml = `
      <h2> Resume Builder</h2>
      <h2>${name}</h2>
      <p>Email: ${email}</p>
      <h3>Eductaion</h3>
      <p>${education}</p>
      <h3>Work Experience</h3>
      <p>${work}</p>
      <h3>Skills</h3>
          <ul>
            ${skills.map(skil => `<li>${skil.trim()}</li>`).join('')}         
          </ul>
      `;
        form.style.display = 'none';
        editButton.style.display = 'block';
        resumeContainer.innerHTML = resumeHtml;
        const shareLink = `${window.location.origin}?username=${encodeURIComponent(username)}`;
        share.style.display = 'block';
        sharelink.href = shareLink;
        sharelink.textContent = shareLink;
    });
    editButton.addEventListener('click', () => {
        form.style.display = 'block';
        editButton.style.display = 'none';
    });
    downloadBtn.addEventListener("click", () => {
        window.print();
    });
    window.addEventListener("DOMContentLoaded", () => {
        var _a;
        const urlp = new URLSearchParams(window.location.search);
        let username = urlp.get('username');
        if (username) {
            const savedData = localStorage.getItem("username");
            let resumeDa;
            if (savedData) {
                resumeDa = JSON.parse(savedData)(document.getElementById(username)).value = username(document.getElementById("name")).value = resumeDa && resumeDa.name ? resumeDa.name : "";
                document.getElementById("email").value = resumeDa && resumeDa.email ? resumeDa.email : "";
                document.getElementById("education").value = resumeDa && resumeDa.education ? resumeDa.education : "";
                document.getElementById("work-experience").value = resumeDa && resumeDa.workExperience ? resumeDa.workExperience : "";
                document.getElementById("skills").value = (_a = resumeDa === null || resumeDa === void 0 ? void 0 : resumeDa.skills) === null || _a === void 0 ? void 0 : _a.join(",");
            }
        }
    });
});
