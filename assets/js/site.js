(function () {
  "use strict";

  var content = window.SITE_CONTENT;
  if (!content) return;

  function escapeHtml(value) {
    return String(value == null ? "" : value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  function safeUrl(value) {
    var url = String(value || "").trim();
    if (/^(https?:|mailto:)/i.test(url) || /^(assets\/|index\.html|#)/.test(url)) {
      return escapeHtml(url);
    }
    return "#";
  }

  // Supports **bold** and [label](url) in content.js.
  function formatText(value) {
    var text = escapeHtml(value);
    text = text.replace(
      /\[([^\]]+)\]\((https?:\/\/[^)\s]+|mailto:[^)\s]+|assets\/[^)\s]+)\)/g,
      function (_, label, url) {
        return '<a href="' + safeUrl(url) + '" target="_blank" rel="noopener">' + label + "</a>";
      }
    );
    return text.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
  }

  function heading(title) {
    return "<h2>" + escapeHtml(title) + "</h2>";
  }

  function renderLinks(links) {
    if (!links || !links.length) return "";
    return (
      '<div class="paper-links">' +
      links
        .map(function (link) {
          return (
            '<a href="' +
            safeUrl(link.url) +
            '" target="_blank" rel="noopener">[' +
            escapeHtml(link.label) +
            "]</a>"
          );
        })
        .join("") +
      "</div>"
    );
  }

  function renderCard(item) {
    var image = item.image
      ? '<img src="' +
        safeUrl(item.image) +
        '" alt="' +
        escapeHtml(item.imageAlt || item.title) +
        '" class="project-img" loading="lazy" />'
      : "";
    var authors = item.authors
      ? '<div class="paper-authors">' + formatText(item.authors) + "</div>"
      : "";
    var venue = item.venue
      ? '<div class="paper-venue">' + formatText(item.venue) + "</div>"
      : "";
    var description = item.description
      ? '<p class="paper-desc">' + formatText(item.description) + "</p>"
      : "";
    var keywords = item.keywords
      ? '<div class="paper-keywords"><strong>Keywords:</strong> ' +
        escapeHtml(item.keywords) +
        "</div>"
      : "";

    return (
      '<article class="project-card">' +
      image +
      '<div class="project-body">' +
      '<div class="paper-title">' +
      escapeHtml(item.title) +
      "</div>" +
      authors +
      venue +
      description +
      renderLinks(item.links) +
      keywords +
      "</div></article>"
    );
  }

  function applySeo() {
    if (!content.seo) return;
    document.title = content.seo.title || document.title;
    [
      ["description", content.seo.description],
      ["keywords", content.seo.keywords],
    ].forEach(function (entry) {
      var element = document.querySelector('meta[name="' + entry[0] + '"]');
      if (element && entry[1]) element.setAttribute("content", entry[1]);
    });
  }

  function renderNav() {
    var page = document.body.getAttribute("data-page") || "home";
    var links = [
      { label: "Home", url: page === "home" ? "#top" : "index.html" },
      {
        label: "Publications",
        url: page === "publications" ? "#publications" : "publications.html",
        show: content.publications.length > 0,
      },
      {
        label: "Projects",
        url: page === "home" ? "#projects" : "index.html#projects",
        show: content.projects.length > 0,
      },
      {
        label: "CV",
        url:
          (content.profile.contacts.find(function (item) {
            return item.label.toLowerCase() === "cv";
          }) || {}).url,
        external: true,
      },
    ];
    document.getElementById("site-nav").innerHTML = links
      .filter(function (link) {
        return link.show !== false && link.url;
      })
      .map(function (link) {
        return (
          '<a href="' +
          safeUrl(link.url) +
          '"' +
          (link.external ? ' target="_blank" rel="noopener"' : "") +
          ">" +
          escapeHtml(link.label) +
          "</a>"
        );
      })
      .join("");
  }

  function renderProfile() {
    var profile = content.profile;
    var captions = profile.captions
      .map(function (caption, index) {
        return (
          '<p class="profile-caption' +
          (index ? " profile-caption-secondary" : "") +
          '">' +
          escapeHtml(caption) +
          "</p>"
        );
      })
      .join("");
    var bio = profile.bio
      .map(function (paragraph) {
        return '<p class="bio">' + formatText(paragraph) + "</p>";
      })
      .join("");
    var contacts = profile.contacts
      .map(function (contact) {
        return (
          '<a href="' +
          safeUrl(contact.url) +
          '"' +
          (/^https?:|\.pdf$/i.test(contact.url)
            ? ' target="_blank" rel="noopener"'
            : "") +
          ">" +
          escapeHtml(contact.label) +
          "</a>"
        );
      })
      .join("<span>/</span>");

    document.getElementById("profile").innerHTML =
      '<div class="profile-photo">' +
      '<img src="' +
      safeUrl(profile.photo) +
      '" alt="' +
      escapeHtml(profile.photoAlt || profile.name) +
      '" class="profile-img" />' +
      captions +
      "</div>" +
      '<div class="header-content"><h1>' +
      escapeHtml(profile.name) +
      "</h1>" +
      bio +
      '<div class="contact-links">' +
      contacts +
      "</div></div>";
  }

  function renderResearch() {
    var target = document.getElementById("research-interests");
    var research = content.research;
    if (!research || !research.interests.length) {
      target.hidden = true;
      return;
    }
    var interests = research.interests
      .map(function (item) {
        return (
          '<p class="paper-desc"><strong>' +
          escapeHtml(item.title) +
          ":</strong> " +
          formatText(item.description) +
          "</p>"
        );
      })
      .join("");
    target.innerHTML =
      heading(research.title) +
      '<div class="paper-list"><div class="paper-item">' +
      interests +
      "</div></div>";
  }

  function renderCollection(id, title, items) {
    var target = document.getElementById(id);
    if (!items || !items.length) {
      target.hidden = true;
      return;
    }
    target.hidden = false;
    target.innerHTML =
      heading(title) +
      '<div class="project-list">' +
      items.map(renderCard).join("") +
      "</div>";
  }

  function renderNews() {
    var section = document.getElementById("news");
    if (!section) return;
    if (!content.news.length) {
      section.hidden = true;
      return;
    }
    section.innerHTML =
      heading("News") +
      '<div class="news-list">' +
      content.news
        .map(function (item) {
          return (
            '<div class="news-item"><div class="news-date">' +
            escapeHtml(item.date) +
            '</div><div class="news-text">' +
            formatText(item.text) +
            "</div></div>"
          );
        })
        .join("") +
      "</div>";
  }

  var page = document.body.getAttribute("data-page") || "home";
  renderNav();

  if (page === "publications") {
    document.title = "Publications | " + content.profile.name;
    renderCollection("publications", "Publications", content.publications);
    return;
  }

  applySeo();
  renderProfile();
  renderResearch();
  renderCollection("projects", "Research Projects", content.projects);
  renderNews();
})();
