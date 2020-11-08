const vertical = document.querySelector(".vertical");
const horizontal = document.querySelector(".horizontal");
const target = document.querySelector(".target");
const tag = document.querySelector(".tag");

document.addEventListener("mousemove", (event) => {
  //window 위라서 client!!! 좌표 사용
  const clientX = event.clientX;
  const clientY = event.clientY;

  vertical.style.left = `${clientX}px`;
  horizontal.style.top = `${clientY}px`;
  target.style.left = `${clientX}px`;
  target.style.top = `${clientY}px`;
  tag.style.left = `${clientX}px`;
  tag.style.top = `${clientY}px`;
  tag.innerHTML = `
    x:${clientX}, y:${clientY}
  `;
});
