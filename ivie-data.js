(function () {
  const U = id => (/^\d+$/.test(id) ? 'https://images.pexels.com/photos/' + id + '/pexels-photo-' + id + '.jpeg?auto=compress&cs=tinysrgb&' : 'https://images.unsplash.com/' + id + '?') + 'w=1000&q=80&auto=format&fit=crop';
  const V = {
    v1: { src: 'https://www.pexels.com/download/video/39541871/', poster: 'https://images.pexels.com/videos/39541871/pexels-photo-39541871.jpeg?auto=compress&w=1000' },
    v2: { src: 'https://www.pexels.com/download/video/39347032/', poster: 'https://images.pexels.com/videos/39347032/pexels-photo-39347032.jpeg?auto=compress&w=1000' },
    fabric: { src: 'https://www.pexels.com/download/video/9690685/', poster: 'https://images.pexels.com/videos/9690685/pexels-photo-9690685.jpeg?auto=compress&w=1000' }
  };
  const I = {
    slip: 'photo-1594737996820-af7654631790', ivory: '6766741', linen: 'photo-1616617749174-a2a1f2134674',
    coat: '7468092', red: '7020558', braid: '6848260',
    blouse: '36445251', man: '6050429', hands: '29716433',
    afro: '7065427', tank: '37335113', white: '8087739',
    rail: 'photo-1769107805465-bfd41863f1a0', studio: 'photo-1787505136296-1e8f0750e5ff', cut: 'photo-1787505136265-9a99dad3bbac',
    notes: 'photo-1787505136259-5195dfbfcd01', store: 'photo-1765009433753-c7462637d21f'
  };
  const im = (k, pos, alt) => ({ src: U(I[k]), pos: pos || '50% 50%', alt: alt || '' });
  const W = ['XS', 'S', 'M', 'L', 'XL'], M = ['S', 'M', 'L', 'XL', 'XXL'];
  const P = [
    { slug: 'adwoa-silk-slip-dress', name: 'Adwoa Silk Slip Dress', price: 3850, cat: 'Dresses', sizes: W, out: [], el: 2, sp: 0, isNew: 1,
      desc: 'A bias-cut slip in heavy sand-washed silk that moves like water and settles close to the body. Fine adjustable straps, a softly cowled neck.',
      fabric: '100% mulberry silk, 22 momme. Dry clean, or hand wash cold. Steam, do not press.',
      variants: [
        { colour: 'Champagne', swatch: '#D8C3A0', imgs: [im('slip', '50% 50%', 'Silk slip dress on a blue textile'), im('ivory', '50% 20%', 'The dress worn, three-quarter view'), im('ivory', '50% 85%', 'Detail of the hem')] },
        { colour: 'Onyx', swatch: '#1F1C1A', imgs: [im('afro', '50% 35%', 'The slip in onyx, worn'), im('red', '40% 30%', 'The slip against a deep red backdrop'), im('afro', '50% 80%', 'Detail of the cowl')] }
      ], look: ['sculpted-crepe-blazer', 'kente-trim-tailored-trousers', 'draped-satin-blouse'] },
    { slug: 'lace-wrap-dress', name: 'Lace Wrap Dress', price: 4200, cat: 'Dresses', sizes: W, out: ['XL'], el: 3, sp: 1, isNew: 1, cardVideo: 'v1',
      desc: 'French corded lace on a silk lining, wrapped and tied at the waist. Long sleeves, a midi length that catches the light as you walk.',
      fabric: 'Cotton and viscose corded lace, silk crepe de chine lining. Dry clean only.',
      variants: [{ colour: 'Ivory', swatch: '#EFE8DC', imgs: [im('ivory', '50% 30%', 'Woman in an ivory lace dress'), im('white', '50% 50%', 'Figures in white on a tiled floor'), im('ivory', '50% 70%', 'Lace detail')] }],
      look: ['akosua-pleated-maxi-skirt', 'draped-satin-blouse', 'evening-column-gown'] },
    { slug: 'harmattan-linen-two-piece', name: 'Harmattan Linen Two-Piece', price: 3400, cat: 'Two-Piece Sets', sizes: W, out: [], el: 4, sp: 2, isNew: 1,
      desc: 'A boxy short-sleeved top and wide, high-rise trousers in washed Irish linen. Made for the dry season, worn together or apart.',
      fabric: '100% washed linen. Machine wash cold on a gentle cycle. Line dry in the shade.',
      variants: [
        { colour: 'Sand', swatch: '#C9B597', imgs: [im('linen', '50% 30%', 'Woman in a sand linen top'), im('tank', '50% 40%', 'The set, worn with sunglasses'), im('linen', '50% 85%', 'Linen texture')] },
        { colour: 'Olive', swatch: '#5E6044', imgs: [im('tank', '65% 45%', 'The set in olive'), im('linen', '50% 10%', 'Neckline detail'), im('tank', '50% 90%', 'Trouser detail')] }
      ], look: ['tailored-linen-shirt', 'sculpted-crepe-blazer', 'akosua-pleated-maxi-skirt'] },
    { slug: 'sculpted-crepe-blazer', name: 'Sculpted Crepe Blazer', price: 2950, cat: 'Outerwear', sizes: W, out: ['XS'], el: 0, sp: 3,
      desc: 'A single-button blazer in double-faced wool crepe, with a strong shoulder and a softly nipped waist. Fully lined.',
      fabric: 'Wool crepe, cupro lining. Dry clean only.',
      variants: [{ colour: 'Ink', swatch: '#1E2433', imgs: [im('coat', '50% 30%', 'Portrait in a structured ink blazer'), im('blouse', '50% 40%', 'The blazer worn open'), im('coat', '50% 80%', 'Lapel detail')] }],
      look: ['draped-satin-blouse', 'kente-trim-tailored-trousers', 'adwoa-silk-slip-dress'] },
    { slug: 'akosua-pleated-maxi-skirt', name: 'Akosua Pleated Maxi Skirt', price: 2300, cat: 'Trousers and Skirts', sizes: W, out: ['XS', 'XL'], el: 1, sp: 1,
      desc: 'Knife pleats in liquid satin, set on a narrow waistband and falling to the ankle. It sways long after you have stopped moving.',
      fabric: 'Polyester satin, permanent pleats. Hand wash cold, hang to dry. Do not iron the pleats.',
      variants: [{ colour: 'Bronze', swatch: '#8A5F3A', imgs: [im('braid', '50% 40%', 'Profile with a braided ponytail'), im('red', '80% 60%', 'The skirt in movement'), im('braid', '50% 85%', 'Pleat detail')] }],
      look: ['draped-satin-blouse', 'lace-wrap-dress', 'sculpted-crepe-blazer'] },
    { slug: 'evening-column-gown', name: 'Evening Column Gown', price: 6500, cat: 'Dresses', sizes: W, out: ['XS', 'L', 'XL'], el: 1, sp: 0, isNew: 1, cardVideo: 'v2',
      desc: 'A floor-length column in silk crepe, with a high neck and an open back. Our most considered evening piece.',
      fabric: 'Silk crepe, silk lining. Dry clean only. Store hanging, in the garment bag provided.',
      variants: [{ colour: 'Onyx', swatch: '#1F1C1A', imgs: [im('red', '50% 30%', 'Woman against a deep red backdrop'), im('hands', '50% 40%', 'The gown, hands raised'), im('red', '50% 85%', 'Detail of the back')] }],
      look: ['adwoa-silk-slip-dress', 'structured-agbada-inspired-jacket', 'lace-wrap-dress'] },
    { slug: 'kente-trim-tailored-trousers', name: 'Kente-Trim Tailored Trousers', price: 1950, cat: 'Trousers and Skirts', sizes: W, out: [], el: 5, sp: 4,
      desc: 'A straight, high-waisted trouser with a hand-woven Kente stripe down each side seam. Pressed crease, a clean finish at the ankle.',
      fabric: 'Wool blend, hand-woven Kente trim from Bonwire. Dry clean only.',
      variants: [{ colour: 'Black', swatch: '#141210', imgs: [im('afro', '50% 90%', 'Tailored black trousers'), im('coat', '50% 95%', 'The trousers with the crepe blazer'), im('afro', '30% 60%', 'Kente trim detail')] }],
      look: ['sculpted-crepe-blazer', 'draped-satin-blouse', 'harmattan-linen-two-piece'] },
    { slug: 'draped-satin-blouse', name: 'Draped Satin Blouse', price: 1850, cat: 'Tops', sizes: W, out: ['S'], el: 2, sp: 2,
      desc: 'A fluid blouse in silk satin, draped at one shoulder and gathered softly at the waist. Tucks in or falls loose.',
      fabric: 'Silk satin. Hand wash cold or dry clean. Cool iron on the reverse.',
      variants: [{ colour: 'Pearl', swatch: '#E9E3D8', imgs: [im('blouse', '50% 35%', 'Woman in a pearl blouse and blue jacket'), im('ivory', '50% 90%', 'The blouse tucked in'), im('blouse', '50% 75%', 'Drape detail')] }],
      look: ['kente-trim-tailored-trousers', 'akosua-pleated-maxi-skirt', 'sculpted-crepe-blazer'] },
    { slug: 'tailored-linen-shirt', name: 'Tailored Linen Shirt', price: 1600, cat: 'Menswear', sizes: M, out: [], el: 3, sp: 0,
      desc: 'A sharply cut shirt in mid-weight linen, with a soft collar and mother-of-pearl buttons. Made for heat, cut to look composed in it.',
      fabric: '100% linen. Machine wash cold. Iron while damp.',
      variants: [{ colour: '', swatch: '', imgs: [im('man', '50% 30%', 'Man in a tailored shirt'), im('cut', '50% 50%', 'Linen being cut in the atelier'), im('man', '50% 80%', 'Cuff detail')] }],
      look: ['structured-agbada-inspired-jacket', 'harmattan-linen-two-piece'] },
    { slug: 'structured-agbada-inspired-jacket', name: 'Structured Agbada-Inspired Jacket', price: 4800, cat: 'Menswear', sizes: M, out: ['S'], el: 0, sp: 1,
      desc: 'The generous volume of the agbada, reworked as a structured jacket. Wide sleeves, a deep front panel, a collarless neck.',
      fabric: 'Wool and silk blend, hand-finished embroidery. Dry clean only.',
      variants: [{ colour: 'Black', swatch: '#141210', imgs: [im('man', '50% 50%', 'Man in a black jacket'), im('studio', '50% 50%', 'The jacket being fitted in the atelier'), im('man', '50% 10%', 'Neckline detail')] }],
      look: ['tailored-linen-shirt', 'evening-column-gown'] }
  ];
  const fmt = n => 'GHS ' + n.toLocaleString('en-GB');
  const find = slug => P.find(p => p.slug === slug) || P[0];
  function expand(e, href, img) {
    if (e && (e.metaKey || e.ctrlKey || e.shiftKey || e.button === 1)) return;
    if (e) e.preventDefault();
    try { sessionStorage.setItem('ivie-hero', href); } catch (x) {}
    const R = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!img || R) { location.href = href; return; }
    const r = img.getBoundingClientRect();
    const Wd = document.documentElement.clientWidth, mob = Wd < 768;
    const tw = mob ? Wd : Math.round(Wd * 0.58), th = Math.round(tw * 1.25), tt = mob ? 96 : 76;
    const cs = getComputedStyle(img);
    const veil = document.createElement('div');
    veil.style.cssText = 'position:fixed;left:0;right:0;bottom:0;top:' + tt + 'px;z-index:90;background:#F6F1EA;opacity:0;transition:opacity 520ms cubic-bezier(0.22,1,0.36,1);';
    const c = document.createElement('img');
    c.src = img.currentSrc || img.src; c.alt = '';
    c.style.cssText = 'position:fixed;margin:0;z-index:91;left:' + r.left + 'px;top:' + r.top + 'px;width:' + r.width + 'px;height:' + r.height + 'px;object-fit:cover;object-position:' + cs.objectPosition + ';filter:' + cs.filter + ';transition:left 700ms cubic-bezier(0.65,0,0.35,1),top 700ms cubic-bezier(0.65,0,0.35,1),width 700ms cubic-bezier(0.65,0,0.35,1),height 700ms cubic-bezier(0.65,0,0.35,1);';
    document.body.append(veil, c);
    c.getBoundingClientRect();
    requestAnimationFrame(() => { veil.style.opacity = '1'; Object.assign(c.style, { left: '0px', top: tt + 'px', width: tw + 'px', height: th + 'px' }); });
    setTimeout(() => { location.href = href; }, 720);
    window.addEventListener('pageshow', ev => { if (ev.persisted) { veil.remove(); c.remove(); } }, { once: true });
  }
  const store = {
    get(k, d) { try { const v = localStorage.getItem(k); return v === null ? d : JSON.parse(v); } catch (x) { return d; } },
    set(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (x) {} }
  };
  function lite() {
    try { const s = localStorage.getItem('ivie-lite'); if (s !== null) return s === '1'; } catch (x) {}
    const c = navigator.connection;
    return !!(c && (c.saveData || /2g|3g/.test(c.effectiveType || '')));
  }
  const SEED = [{ slug: 'adwoa-silk-slip-dress', colour: 'Champagne', size: 'M', qty: 1 }, { slug: 'kente-trim-tailored-trousers', colour: 'Black', size: 'M', qty: 1 }];
  const cart = {
    get() { const c = store.get('ivie-cart', null); return Array.isArray(c) ? c : SEED.slice(); },
    set(items) { store.set('ivie-cart', items); store.set('ivie-bag', cart.count(items)); window.dispatchEvent(new CustomEvent('ivie-cart', { detail: items })); },
    count(items) { return (items || cart.get()).reduce((n, i) => n + i.qty, 0); },
    add(it) {
      const c = cart.get(), k = c.find(i => i.slug === it.slug && i.colour === it.colour && i.size === it.size);
      if (k) k.qty = Math.min(k.qty + 1, 5); else c.push({ ...it, qty: 1 });
      cart.set(c); return cart.count(c);
    },
    open() { window.dispatchEvent(new CustomEvent('ivie-bag-open')); }
  };
  function ambient(root) {
    const vids = Array.from((root || document).querySelectorAll('video[data-src]'));
    const RM = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let on = !lite() && !RM;
    const apply = v => {
      if (on && v._in) {
        if (!v.src) { v.src = v.dataset.src; v.addEventListener('playing', () => { if (on) v.style.opacity = v.dataset.maxOp || '1'; }); }
        const p = v.play(); if (p && p.catch) p.catch(() => {});
      } else { v.pause(); v.style.opacity = '0'; }
    };
    const io = new IntersectionObserver(es => es.forEach(e => { e.target._in = e.isIntersecting; apply(e.target); }), { rootMargin: '200px' });
    vids.forEach(v => io.observe(v));
    const onLite = e => { on = !e.detail && !RM; vids.forEach(apply); };
    window.addEventListener('ivie-lite', onLite);
    return () => { io.disconnect(); window.removeEventListener('ivie-lite', onLite); };
  }
  window.IVIE = { ambient, cart, products: P, videos: V, img: k => U(I[k]), fmt, find, expand, store, lite, href: (slug, colour) => '/product?p=' + slug + (colour ? '&c=' + encodeURIComponent(colour) : '') };
})();
