class MainHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <div class="container">
      <header
        class="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom"
      >
        <a
          href="index.html"
          class="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none background-color: #f8f9fa; padding: 10px; border-radius: 5px;"
        >
          <svg class="bi me-2" width="40" height="32" aria-hidden="true">
            <use xlink:href="#bootstrap"></use>
          </svg>
          <span class="fs-4">LDV Studios</span>
        </a>
        <ul class="nav nav-pills">
          <li class="nav-item">
            <a href="index.html" class="nav-link active" aria-current="page">Home</a>
          </li>
          <li class="nav-item"><a href="#" class="nav-link">Features</a></li>
          <li class="nav-item"><a href="#" class="nav-link">Pricing</a></li>
          <li class="nav-item"><a href="#" class="nav-link">FAQs</a></li>
          <li class="nav-item"><a href="about.html" class="nav-link">About</a></li>
        </ul>
      </header>
    </div>
    `;
  }
}
customElements.define('main-header', MainHeader);

class MainFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <footer class="py-3 text-center border-top">
        <p class="mb-0">&copy; 2024 LDV Studio. All rights reserved.</p>
      </footer>
    `;
  }
}
customElements.define('main-footer', MainFooter);
