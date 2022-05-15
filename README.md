# MOVIEDIC (무비딕, 그립컴퍼니 사전과제)
영화를 검색하고, 즐겨찾기 할 수 있는 영화검색&amp;스크랩 앱

## [MOVIEDIC - 클릭하여 과제 보기](https://allie1125.github.io/movieDic/)

<img width="1792" alt="스크린샷 2022-05-15 오후 12 23 09" src="https://user-images.githubusercontent.com/64718969/168456019-41f027ae-5d22-4e02-ac93-2c42c54f0fc8.png">
<img width="360" alt="스크린샷 2022-05-15 오후 12 23 38" src="https://user-images.githubusercontent.com/64718969/168456025-490df7c6-c6ce-41f5-98fc-50de396cdd5b.png">

## 공통
    - flexbox, grid를 활용하여 반응형 작업
    - 포스터이미지 데이터가 없는 경우 N/A이미지 노출
    - 영화카드 클릭시 즐겨찾기 추가/해제 팝업 노출
    - 즐겨찾기 추가/해제 시 영화 카드에 즐겨찾기표시(하트) 노출/제거
    
<img width="360" alt="스크린샷 2022-05-15 오후 12 25 09" src="https://user-images.githubusercontent.com/64718969/168456037-5325c07f-9ae0-4809-a024-e1d37fee7eab.png">
<img width="360" alt="스크린샷 2022-05-15 오후 12 25 23" src="https://user-images.githubusercontent.com/64718969/168456040-cc423392-8156-4426-8a5a-671c67c14c5f.png">
<img width="360" alt="스크린샷 2022-05-15 오후 12 26 16" src="https://user-images.githubusercontent.com/64718969/168456062-b26751d1-bb63-45da-afb8-02031e269226.png">


## 메인 페이지
    - 최초 진입시/검색한 영화가 없을 시 검색결과 없음 노출
    - 검색어 입력이 멈추면 0.5초 후 API 호출하여 영화목록 노출
    - 최하단으로 스크롤 시 다음목록 로드
    
<img width="360" alt="스크린샷 2022-05-15 오후 12 25 38" src="https://user-images.githubusercon<img width="360" alt="스크린샷 2022-05-15 오후 12 25 52" src="https://user-images.githubusercontent.com/64718969/168456056-15976d1d-01bd-4b8d-a285-943ee231831a.png">
<img width="360" alt="스크린샷 2022-05-15 오후 12 25 52" src="https://user-images.githubusercontent.com/64718969/168456114-17890c50-bb27-4f71-b67f-c239a0c183b1.png">


## 즐겨찾기 페이지
    - 즐겨찾기 저장 한 영화목록 노출
    - 페이지 리로드 시에도 목록 유지
    - 즐겨찾기 해제 시 목록에서 삭제


