/*!
* Start Bootstrap - Creative v7.0.7 (https://startbootstrap.com/theme/creative)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-creative/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

    // Activate SimpleLightbox plugin for portfolio items
    new SimpleLightbox({
        elements: '#portfolio a.portfolio-box'
    });

});

// خلي الفيديوهات تفتح في المودال
// document.querySelectorAll('.portfolio-video').forEach(video => {
//   video.addEventListener('click', () => {
//     const src = video.querySelector('source').src;
//     const title = video.getAttribute("data-title");
//     const category = video.getAttribute("data-category");
//     const description = video.getAttribute("data-description");

//     const modalVideo = document.getElementById('modalVideo');
//     const modalTitle = document.getElementById('modalTitle');
//     const modalDescription = document.getElementById('modalDescription');

//     modalVideo.src = src;
//     modalTitle.textContent = `${category} - ${title}`;
//     modalDescription.textContent = description;

//     const modal = new bootstrap.Modal(document.getElementById('videoModal'));
//     modal.show();

//     // لما يتقفل المودال يوقف الفيديو
//     document.getElementById('videoModal').addEventListener('hidden.bs.modal', () => {
//       modalVideo.pause();
//       modalVideo.src = "";
//     });
//   });
// });
////////////////////////////////////////////////////
//  const videoModal = document.getElementById('videoModal');
//   const modalVideo = document.getElementById('modalVideo');
//   const modalTitle = document.getElementById('modalTitle');
//   const modalDescription = document.getElementById('modalDescription');

//   videoModal.addEventListener('show.bs.modal', event => {
//     const video = event.relatedTarget; 
//     modalVideo.src = video.getAttribute('data-src');
//     modalTitle.textContent = video.getAttribute('data-title');
//     modalDescription.textContent = video.getAttribute('data-description');
//   });

//   videoModal.addEventListener('hidden.bs.modal', () => {
//     modalVideo.pause();
//     modalVideo.src = ""; // علشان الفيديو يقف لما يتقفل
//   });


//   document.getElementById('seeMoreBtn').addEventListener('click', function() {
//     const moreVideos = document.getElementById('moreVideos');
//     moreVideos.classList.toggle('d-none');

//     // تغيير النص عند الفتح / الإغلاق
//     if (moreVideos.classList.contains('d-none')) {
//       this.textContent = 'See More';
//     } else {
//       this.textContent = 'See Less';
//     }
//   });
    const filterBtns = document.querySelectorAll(".filter-btn");
    const items = document.querySelectorAll(".portfolio-item");

    function filterVideos(category) {
    items.forEach(item => {
        if (category === "all" || item.classList.contains(category)) {
        item.classList.add("show");
        } else {
        item.classList.remove("show");
        }
    });
    }

  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelector(".filter-btn.active").classList.remove("active");
      btn.classList.add("active");
      filterVideos(btn.dataset.filter);
    });
  });

  // عرض كل الفيديوهات عند التحميل
  filterVideos("all");




