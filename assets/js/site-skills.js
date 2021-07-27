const advanced = ["Python", "Computer Vision", "Machine Learning", "Deep Learning", "Pattern Recognition", "Pandas", "NumPy", "..."];
const intermediary = ["Celery", "Docker", "Flask", "FastAPI", "PyTorch", "Keras", "TensorFlow", "..."];
const beginner = ["HTML", "CSS", "Javascript", "Vue.js", "jQuery", "-", "-", "..."];

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