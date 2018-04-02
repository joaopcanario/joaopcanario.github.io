const advanced = ["Python", "Visão Computacional", "Machine Learning", "Deep Learning", "OpenCV", "Scikit-Learn", "Git"];
const intermediary = ["Keras / Tensor Flow", "Numpy", "Pandas", "Django", "Flask", "REST API", "Java"];
const beginner = ["Docker", "TDD", "HTML / CSS / JS", "jQuery", "NodeJS", "VueJS", "ReactJS", "MongoDB"];

$(function () {
  const $content = $('#skillsContent');

  populate = function (name, skillSet) {
    let skillContent = '<div class="col-md-4"><ul class="list-group">';
    skillContent += `<li class="list-group-item"><h4><strong>${name}</strong></h4></li>`
    $.each(skillSet, function (index, skill) {
      skillContent += `<li class="list-group-item">${skill}</li>`;
    });
    skillContent += '</ul></div>';

    return skillContent
  }

  let output = `${populate("Advanced", advanced)}<br>`;
  output += `${populate("Intermediary", intermediary)}<br>`;
  output += `${populate("Beginner", beginner)}`;

  $content.html(output);
});