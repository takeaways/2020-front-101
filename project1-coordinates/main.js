const vertical = document.querySelector(".vertical");
const horizontal = document.querySelector(".horizontal");
const target = document.querySelector(".target");

window.addEventListener("load", () => {
  const targetRect = target.getBoundingClientRect();
  const targetHalfWidth = targetRect.width / 2;
  const targetHalfHeight = targetRect.height / 2;
  const tag = document.querySelector(".tag");
  document.addEventListener("mousemove", (event) => {
    //window 위라서 client!!! 좌표 사용
    const clientX = event.clientX;
    const clientY = event.clientY;

    console.log(targetHalfHeight);

    vertical.style.transform = `translateX(${clientX}px)`;
    horizontal.style.transform = `translateY(${clientY}px)`;
    target.style.transform = `translate(${clientX - targetHalfWidth}px,${
      clientY - targetHalfHeight
    }px)`;
    tag.style.transform = `translate(${clientX}px,${clientY}px)`;

    tag.innerHTML = `
    x:${clientX}, y:${clientY}
  `;
  });
});
