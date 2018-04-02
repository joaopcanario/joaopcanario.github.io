const projects = [
  {
    "name": "Imports",
    "url": "https://github.com/joaopcanario/imports",
    "langs": "Python",
    "description": "A Python helper to list all possible unused packages installed on your Project"
  },
  {
    "name": "CFOpen API",
    "url": "https://github.com/joaopcanario/cfopen-api",
    "langs": "Flask Redis Celery Python",
    "description": "Open Crossfit Games API for custom leaderboard creation"
  },
  {
    "name": "Eventex",
    "url": "https://github.com/joaopcanario/eventex",
    "langs": "Django Python",
    "description": "Event system ordered by Morena (WTTD)"
  },
  {
    "name": "CFOpen Leaderboard",
    "url": "https://github.com/joaopcanario/open-crossfit-leaderboard",
    "langs": "ReactJS",
    "description": "Open Crossfit leaderboard for athletes from Bahia"
  }
]

$(function () {
  const $content = $('#codeContent');

  $.each(projects, function (index, project) {
    let output = '<div class="timeline">';
    output += `<span class="timeline-icon" />`;
    output += `<div class="timeline-content">`;
    output += `<div class="card mb-3">`;
    output += `<div class="card-body">`;
    output += `<h5 class="card-title"><a href="${project.url}" target="_blank">${project.name} <span class="icon fab fa-github fa-1x" /></a></h5>`;
    output += `<p class="card-text">${project.description}</p>`;
    output += `<span class="card-text description">${project.langs}</span>`;
    output += `</div></div></div></div>`;

    $content.append(output);

    return index <= 4;
  });
});
