document.addEventListener('DOMContentLoaded',()=>{
    const form = document.getElementById('resume-form') as HTMLFormElement
    const resumeContainer = document.getElementById('resume') as HTMLDivElement
    const editButton = document.getElementById('edit-resume') as HTMLButtonElement
    const themeToggle = document.getElementById('toggle-theme') as HTMLButtonElement
    const sharelink = document.getElementById('sharelink') as HTMLAnchorElement
    const share = document.getElementById('share') as HTMLDivElement
    const downloadBtn = document.getElementById('download') as HTMLButtonElement

    themeToggle.addEventListener('click',()=>{
        document.body.classList.toggle('dark-mode')
        document.body.classList.toggle('light-mode')
        themeToggle.textContent = document.body.classList.contains('dark-mode')
        ? 'Switch to light mode'
        : 'Switch to dark mode'
    })
    
    form.addEventListener('submit',(event:Event)=>{
        event.preventDefault()
      const username = (document.getElementById('username') as HTMLInputElement).value
        const name = (document.getElementById('name') as HTMLInputElement ).value
        const email = (document.getElementById('email') as HTMLInputElement ).value
        const education =(document.getElementById('education') as HTMLTextAreaElement).value
        const work = (document.getElementById('work-experience') as HTMLTextAreaElement).value
        const skills = (document.getElementById('skills') as HTMLTextAreaElement).value.split(',')
        
        const resumeData ={
            name,
            email,
            education,
            work,
            skills,
        };
        localStorage.setItem(username,JSON.stringify(resumeData))
     
        resumeContainer.innerHTML = ''

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
            ${skills.map(skil=>`<li>${skil.trim()}</li>`).join('')}         
          </ul>
      `


        form.style.display='none'
        editButton.style.display='block'


       
    
        resumeContainer.innerHTML = resumeHtml
  const shareLink = `${window.location.origin}?username=${encodeURIComponent(username)}`
    
  share.style.display='block'
  sharelink.href= shareLink
  sharelink.textContent=shareLink




})
editButton.addEventListener('click',()=>{
    form.style.display='block'
    editButton.style.display='none'
   })
 downloadBtn.addEventListener("click",()=>{
    window.print()
 })

 window.addEventListener("DOMContentLoaded",()=>{
    const urlp = new URLSearchParams(window.location.search)
    let username:any = urlp.get('username')

    if(username){
        const savedData = localStorage.getItem("username")
        let resumeDa: any | undefined
        if(savedData){
           resumeDa  = JSON.parse(savedData)
            (document.getElementById(username) as HTMLInputElement).value= username
            (document.getElementById("name") as HTMLInputElement).value = resumeDa && resumeDa.name ? resumeDa.name : "";
            (document.getElementById("email") as HTMLInputElement).value = resumeDa && resumeDa.email ? resumeDa.email : "";
            (document.getElementById("education") as HTMLTextAreaElement).value = resumeDa && resumeDa.education ? resumeDa.education : "";
(document.getElementById("work-experience") as HTMLTextAreaElement).value = resumeDa && resumeDa.workExperience ? resumeDa.workExperience : "";
(document.getElementById("skills") as HTMLTextAreaElement).value=resumeDa?.skills?.join(",")
    }

    }
})

})
