# Base for Front End Developer

## 🌟 WEB APIs

- 브라우저에 대해서 이해하자!

1. DOM APIs
2. NetWork APIs
3. Graphics APIs
4. Audio/Vidoe APIs
5. Device APIs
6. File APIs
7. Storage APIs

> 관련자료 읽어 보세요
>
> 1. [MDN Web API](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Introduction)
> 2. [Web API collection](https://developer.mozilla.org/en-US/docs/Web/API)
> 3. [Security](https://www.thoughtco.com/what-javascript-cannot-do-2037666)

### Browser 구조 분석

1. Window : 전체적인 창( size, scroll, load)
   - DOM + BOM(navigator, location, fetch, storage) + Javascript
2. Document : 작성한 HTML이 보이는 곳

> 1.  [size](https://nomadgeoniljang.github.io/2020-front-101/window-size/)
> 2.  [좌표](https://nomadgeoniljang.github.io/2020-front-101/window-position)

### load

1. async, defer("Contend Loaded 이전에")
   - <script src="" defer or async>
2. window.addEventListener("load",()=>{})
   - 모든리소스 로딩 (image, css, js...etc)
   - "DOMContentLoaded" : only HTML
   - "beforeunload" - 페이지에서 나갈떄 발생
   - "unload" - resource is being unload

### PROJECT

- [project1](https://nomadgeoniljang.github.io/2020-front-101/project1-coordinates/)
- [project2](https://nomadgeoniljang.github.io/2020-front-101/project2-rabbits/)

## 💥 DOM 정복하자!

- [DOM](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction)
- [DOM API](https://developer.mozilla.org/en-US/docs/Web/API/HTML_DOM_API)

1. Document Object Model
   - 브라우저는 HTML tag를 분석해서 Node로 만든다 -> DOM Tree🌴 를 만든다!!!.
   - HTML tag는 그와 같은 엘레먼드가 있다. (Memory에 저장이 된다.)
   - Event Target <- Node <- (Document, Element(HTMLElement), Text)

### 1️⃣ Node

- [Node](https://developer.mozilla.org/en-US/docs/Web/API/Node)
- [Event Target](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget)

1. 모든 노드는 이벤트 타겟이다.
   - addEventListener()
   - removeEventListener()
   - dispatchEvent()

### 2️⃣ CSSOM

- [CSSOM](https://developer.mozilla.org/en-US/docs/Web/API/CSS_Object_Model)

1. (HTML)DOM + CSS(external, embedded, inline, user-aget stylesheet) = CSSON
   - compute styles based on CSS cascading rules
     ![CSSOM](https://raw.githubusercontent.com/nomadGeonilJang/2020-front-101/master/images/csson.png)
