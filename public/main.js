async function init() {
  let rustApp = null;

  try {
    rustApp = await import("../pkg");
  } catch (error) {
    console.error(error);
    return;
  }

  console.log(rustApp);

  const input = document.getElementById("upload");
  const fileReader = new FileReader();

  fileReader.onloadend = () => {
    const base64 = fileReader.result.replace(
      /^data:image\/(png|jpeg|jpg);base64,/,
      ""
    );
    let imgDataUrl = rustApp.grayscale(base64);
    document.getElementById("new-img").setAttribute("src", imgDataUrl);
  };

  input.addEventListener("change", () => {
    fileReader.readAsDataURL(input.files[0]);
  });
}

init();
