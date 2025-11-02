(async function(){
  const catalog = document.getElementById('catalog');
  const modal = document.getElementById('modal');
  const closeBtn = document.getElementById('close');
  const modalVideo = document.getElementById('modal-video');
  const mName = document.getElementById('m-name');
  const mDesc = document.getElementById('m-desc');
  const mPrice = document.getElementById('m-price');

  const resp = await fetch('products.json');
  const products = await resp.json();

  function createCard(p){
    const div = document.createElement('div');
    div.className = 'card';
    div.innerHTML = `
      <video muted playsinline preload="metadata" poster="${p.thumbnail}">
        <source src="${p.video}" type="video/mp4">
      </video>
      <div class="info"><div class="name">${p.name}</div><div class="price">${p.price}</div></div>`;
    div.addEventListener('click', ()=>openModal(p));
    return div;
  }

  products.forEach(p=>catalog.appendChild(createCard(p)));

  function openModal(p){
    modal.classList.remove('hidden');
    modalVideo.src = p.video;
    mName.textContent = p.name;
    mDesc.textContent = p.desc;
    mPrice.textContent = p.price;
  }

  closeBtn.addEventListener('click', ()=>{
    modal.classList.add('hidden');
    modalVideo.pause();
    modalVideo.src='';
  });

  document.getElementById('contact-mini').addEventListener('click',()=>{
    window.location.href='https://t.me/CalidryBot64';
  });
})();
