// Basic interactivity: mobile nav toggle, testimonial slider, form validation, image lightbox, dynamic year
document.addEventListener('DOMContentLoaded', function(){
  // Year
  ['year','year2','year3','year4','year5','year6'].forEach(id=>{
    const el = document.getElementById(id);
    if(el) el.textContent = new Date().getFullYear();
  });

  // Mobile nav toggles
  const navToggles = document.querySelectorAll('.nav-toggle');
  navToggles.forEach(btn=>{
    btn.addEventListener('click', ()=>{
      const nav = document.querySelector('.main-nav');
      if(nav) nav.classList.toggle('show');
    });
  });

  // Testimonials slider (simple)
  const slider = document.getElementById('testiSlider');
  if(slider){
    const slides = slider.querySelectorAll('.slide');
    let idx = 0;
    function show(i){
      slides.forEach((s,si)=>{
        s.style.display = (si===i)?'block':'none';
      });
    }
    show(idx);
    slider.querySelectorAll('.slide-btn').forEach(btn=>{
      btn.addEventListener('click', ()=>{
        const dir = btn.dataset.dir;
        idx = (dir==='next')? (idx+1)%slides.length : (idx-1+slides.length)%slides.length;
        show(idx);
      });
    });
    // auto-advance
    setInterval(()=>{ idx = (idx+1)%slides.length; show(idx); }, 6000);
  }

  // Booking form validation
  const bookingForm = document.getElementById('bookingForm');
  if(bookingForm){
    bookingForm.addEventListener('submit', function(e){
      if(!bookingForm.checkValidity()){ e.preventDefault(); bookingForm.classList.add('was-validated'); alert('Please fill out required fields correctly.'); return; }
      e.preventDefault();
      // Simulate submission
      alert('Booking request received! We will contact you to confirm.');
      bookingForm.reset();
    });
  }

  // Contact form
  const contactForm = document.getElementById('contactForm');
  if(contactForm){
    contactForm.addEventListener('submit', function(e){
      if(!contactForm.checkValidity()){ e.preventDefault(); alert('Please fill the contact form correctly.'); return; }
      e.preventDefault();
      alert('Thanks! Your message has been sent.');
      contactForm.reset();
    });
  }

  // Simple gallery click to enlarge (lightbox)
  const gallery = document.getElementById('galleryGrid');
  if(gallery){
    gallery.addEventListener('click', function(e){
      const img = e.target.closest('img');
      if(!img) return;
      const overlay = document.createElement('div');
      overlay.style.position='fixed';overlay.style.inset=0;overlay.style.background='rgba(0,0,0,0.8)';overlay.style.display='flex';overlay.style.alignItems='center';overlay.style.justifyContent='center';overlay.style.zIndex=9999;
      const big = document.createElement('img');big.src=img.src;big.style.maxWidth='90%';big.style.maxHeight='90%';big.style.borderRadius='12px';
      overlay.appendChild(big);
      overlay.addEventListener('click', ()=>document.body.removeChild(overlay));
      document.body.appendChild(overlay);
    });
  }

});