(function(){
  const reveal = document.getElementById('reveal');
  const panel = document.getElementById('panel');
  const numEl = document.getElementById('num');
  const copyBtn = document.getElementById('copy');
  const toast = document.getElementById('toast');

  function showToast(msg){
    toast.textContent = msg || '복사됨!';
    toast.hidden = false;
    clearTimeout(showToast._t);
    showToast._t = setTimeout(()=>toast.hidden=true, 1400);
  }

  function b64d(s){
    try{ return decodeURIComponent(escape(window.atob(s))); }
    catch(e){ return atob(s); }
  }

  function copy(text){
    return navigator.clipboard.writeText(text)
      .then(()=>showToast('복사됨!'))
      .catch(()=>{
        const ta = document.createElement('textarea');
        ta.value = text; document.body.appendChild(ta);
        ta.select(); document.execCommand('copy'); ta.remove();
        showToast('복사됨!');
      });
  }

  reveal.addEventListener('click', ()=>{
    if (panel.hasAttribute('hidden')){
      panel.removeAttribute('hidden');
      reveal.setAttribute('aria-expanded','true');
      const n = b64d(TOKEN);
      numEl.textContent = n;
      copyBtn.hidden = false;
      copyBtn.onclick = ()=>copy(n);
      numEl.onclick = ()=>copy(n);
    }
  });
})();