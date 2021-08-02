var content = document.getElementById("detected");
var image = document.getElementById("image");
var img = image.getAttribute("src");

function scan() {
  var x = document
    .getElementById("formFile")
    .value.match(/[\/\\]([\w\d\s\.\-\(\)]+)$/)[1];

  image.setAttribute("src", `${x}`);

  content.innerHTML = "Loading! ....";

  //   console.log(`${x.value}`);

  Tesseract.recognize(`${x}`, "khm", {
    logger: (m) => console.log(m),
  }).then(({ data: { text } }) => {
    console.log(text);

    content.innerHTML = text;
  });
}
