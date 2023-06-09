## 1. 프로젝트 주제

- 커피 주문 앱
- 개발 기간
    - 3/6~ 3/29 (3주)
    - 개인 진행
- Github Repo
    - [https://github.com/jaehafe/applepresso](https://github.com/jaehafe/applepresso)
- 배포 주소
    - [https://applepresso.vercel.app/](https://applepresso.vercel.app/)

### 2. 사용한 기술

- client
    - React
    - 비동기 관리: useEffect, useState 기본 hook을 활용해 custom hook 제작
    - 라우터: React Router v6.4
    - 상태 관리: Context API
    - CSS: Styled-Components
- backend
    - DB: Firebase

### 3. pages, components flow chart
![applepresso](https://github.com/jaehafe/applepresso/assets/108874515/0df582c6-3c8f-4849-811f-e81e30130235)


![applepresso components](https://github.com/jaehafe/applepresso/assets/108874515/dead2021-d126-45be-9a7e-32fd64380914)

### 4. 주요 구현 기능

- 카카오페이 mock 결제
- 카카오지도 매장 정보 위치 확인, 현재 위치 확인
- firebase 사용
    - 물건 구매, 메뉴, 매장 정보 불러오기
- calendar 필터링으로 주문내역 선택
- 장바구니
    - Context API, useReducer로 전역 상태 관리
- 결제 페이지
    - 주문매장, 장소선택, 포장선택, 픽업 예정시간, 주문 내역 등 state관리
- 메뉴 이름 검색
    - useDebounce 커스텀 훅 사용으로 api 사용 최소화
- 모달 창
    - createPortal 사용

## 5. 프로젝트 회고 및 문제 해결, 추가 기능 설명
https://adam-37.gitbook.io/joomadeung/projects/projects/react-hook
