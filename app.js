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
    // 번호를 최초 클릭시에만 생성해서 DOM에 삽입
    if (panel.hasAttribute('hidden')){
      panel.removeAttribute('hidden');
      reveal.setAttribute('aria-expanded','true');
      const n = b64d(TOKEN);
      numEl.textContent = n;
      copyBtn.hidden = false;
      copyBtn.onclick = ()=>copy(n);
      numEl.onclick = ()=>copy(n);
    } else {
      // 원본 사이트가 토글이 아니라면 이 부분을 주석 처리할 수도 있음.
      panel.setAttribute('hidden','');
      reveal.setAttribute('aria-expanded','false');
      // 숨김 시 DOM에서 제거해서 크롤링 방지
      numEl.textContent = '';
      copyBtn.hidden = true;
      copyBtn.onclick = null;
      numEl.onclick = null;
    }
  });
})();