let shareTrigger;
function fallbackShare(url,title,trigger){shareTrigger=trigger;document.querySelector('#shareTitle').textContent=title;document.querySelector('#shareURL').value=url;document.querySelector('#copyMessage').textContent='';document.querySelector('#shareDialog').showModal()}
async function shareLink(url,title,trigger){if(navigator.share){try{await navigator.share({title,url});return}catch(error){if(error.name==='AbortError')return}}fallbackShare(url,title,trigger)}
document.addEventListener('click',event=>{const button=event.target.closest('[data-share-url]');if(button)shareLink(button.dataset.shareUrl||location.href,button.dataset.shareTitle||document.title,button)});
document.querySelector('#copyURL').onclick=async()=>{try{await navigator.clipboard.writeText(document.querySelector('#shareURL').value);document.querySelector('#copyMessage').textContent='URLをコピーしました。'}catch(error){document.querySelector('#shareURL').focus();document.querySelector('#shareURL').select();document.querySelector('#copyMessage').textContent='URLを長押ししてコピーしてください。'}};
document.querySelector('#closeShare').onclick=()=>{document.querySelector('#shareDialog').close();shareTrigger?.focus()};
