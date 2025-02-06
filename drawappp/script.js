const canvas = document.getElementById("draw");
const ctx = canvas.getContext("2d");
const COLOR_TOOL = document.getElementById("color-tool")
const SIZE_TOOL = document.getElementById("size-tool")
const btn = document.getElementById("btn")
var imgURL = document.getElementById("img")
var drawing = false;

  imgURL.addEventListener("change", () =>{
    const img = new Image()
    console.log(img.src)
  })

    COLOR_TOOL.addEventListener("input", () =>{
        ctx.strokeStyle = COLOR_TOOL.value;
    })
    
    SIZE_TOOL.addEventListener("input", () =>{
        document.getElementById("size-text").textContent = SIZE_TOOL.value
        ctx.lineWidth = SIZE_TOOL.value;
    })

 

  canvas.addEventListener("mousedown", () => drawing = true);
  canvas.addEventListener("mouseup", () => drawing = false);
  
  canvas.addEventListener("mousemove", (event) => {
    if(drawing === true){
    const rect = canvas.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    
    ctx.beginPath();
    ctx.arc(x, y, 5, 0, Math.PI * 2); 
    ctx.stroke(); 
    }
  });

  btn.addEventListener("click", () =>{
    const imageURL = canvas.toDataURL("image/png")
    const link = document.createElement("a")
    link.href = imageURL
    link.download = "desen.png"
    link.click()
  })

