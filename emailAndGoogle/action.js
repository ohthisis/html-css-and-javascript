const scriptURL = 'https://script.google.com/macros/s/AKfycbz8GAH7sgJiJdjUlHqr74aa0PKSwV3-7CUQ-OB4_4ssJJDnYwgPGbCYzcpneRocSi9m2w/exec'
const form = document.forms['submit-to-google-sheet']
const msg=document.getElementById("msg")

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        msg.innerHTML="Thank You For Subscriobing!"
        setTimeout(function(){
            msg.innerHTML=""
        },5000)
        form.reset()
      })
      .catch(error => console.error('Error!', error.message))
  })