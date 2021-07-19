function loadMemes() {
    fetch("https://meme-api.herokuapp.com/gimme")
      .then((res) => res.json())
      .then((data) => (document.getElementById("meme").src = data.preview[2]));
  }
  let img = document.getElementById("meme");
  
  
   ("click", () => {
    let imagePath = img.getAttribute("src");
    let fileName = getFileName(imagePath);
      saveAs(imagePath, fileName);
  });
  function getFileName(str) {
    return str.substring(str.lastIndexOf("/") + 1, str.lastIndexOf("?"));
  }