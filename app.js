// Reveal & copy logic (Korean UI)
(function(){
  const revealBtn = document.getElementById('revealBtn');
  const copyBtn = document.getElementById('copyBtn');
  const numberPanel = document.getElementById('numberPanel');
  const numberValue = numberPanel.querySelector('.number-value');
  const toast = document.getElementById('toast');
  const year = document.getElementById('year');

  year.textContent = new Date().getFullYear();

  revealBtn.addEventListener('click', () => {
    const isHidden = numberPanel.hasAttribute('hidden');
    if (isHidden){
      numberPanel.removeAttribute('hidden');
      revealBtn.setAttribute('aria-expanded', 'true');
      revealBtn.textContent = '숨기기';
      copyBtn.disabled = false;
    } else {
      numberPanel.setAttribute('hidden', '');
      revealBtn.setAttribute('aria-expanded', 'false');
      revealBtn.textContent = '번호 보기';
      copyBtn.disabled = true;
    }
  });

  function showToast(msg='복사됨!'){
    toast.textContent = msg;
    toast.hidden = false;
    clearTimeout(showToast._t);
    showToast._t = setTimeout(()=>{toast.hidden = true;}, 1500);
  }

  async function copy(text){
    try{
      await navigator.clipboard.writeText(text);
      showToast('복사됨!');
    }catch(e){
      // fallback
      const ta = document.createElement('textarea');
      ta.value = text;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand('copy');
      ta.remove();
      showToast('복사됨!');
    }
  }

  copyBtn.addEventListener('click', () => {
    copy(window.__REFERRER_ID__);
  });

  numberValue.addEventListener('click', () => {
    copy(window.__REFERRER_ID__);
  });

})();