# React-Router

### SPA

1. 라우팅 : 어떤 "주소"에 어떤 "UI"를 보여줄지
   - 옛날에는 보통 서버에서 관리(SSR)하는 로직 이제는 클라이언트가 관리(CSR)한다.
2. non-SPA
   - Client <->(html) 서버 <-> DB
   - 새로운 데이터를 요청 할 때마다 화면 정보를 다시 받아와야 한다.
   - 불필요한 트레픽 발생.
3. SPA
   - re-render <->(json) server
