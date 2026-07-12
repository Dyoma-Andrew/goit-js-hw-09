import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */const r=document.querySelector(".container"),m=`
  <form class="feedback-form" autocomplete="off">
    <label class="form-label">
      Email
      <input class="form-input" type="email" name="email" autofocus />
    </label>
    <label class="form-label">
      Message
      <textarea class="form-textarea" name="message" rows="8"></textarea>
    </label>
    <button class="form-btn" type="submit">Submit</button>
  </form>
`;r.innerHTML=m;const t=document.querySelector(".feedback-form"),o="feedback-form-state",e={email:"",message:""};function n(){try{const a=localStorage.getItem(o);if(a){const s=JSON.parse(a);e.email=s.email||"",e.message=s.message||"",t.elements.email.value=e.email,t.elements.message.value=e.message}}catch(a){console.error("Error parsing localStorage data:",a)}}n();t.addEventListener("input",a=>{const{name:s,value:l}=a.target;e[s]=l.trim(),localStorage.setItem(o,JSON.stringify(e))});t.addEventListener("submit",a=>{if(a.preventDefault(),!e.email||!e.message){alert("Fill please all fields");return}console.log("Submitted Data:",e),localStorage.removeItem(o),e.email="",e.message="",t.reset()});
//# sourceMappingURL=2-form.js.map
