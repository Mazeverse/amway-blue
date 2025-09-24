# amway-omega (blue)

암웨이 오메가 스타일의 **후원자 번호(7025798063)** 노출용 단일 페이지입니다.  
`번호 보기` 버튼으로 번호를 펼치고, `복사하기` 버튼 또는 번호 클릭으로 클립보드에 복사됩니다.

## 파일 구성
- `index.html` — 메인 페이지
- `style.css` — 블루 테마 스타일
- `app.js` — 번호 표시 및 복사 스크립트
- `assets/favicon.svg` — 간단한 파비콘

## 배포
- GitHub Pages 또는 Vercel에 그대로 업로드하면 동작합니다.
- 검색 노출을 원하시면 `index.html`의 `google-site-verification` 메타 태그 값을 실제 값으로 교체하세요.

## 커스터마이즈
- 번호 변경: `index.html` 하단의 `window.__REFERRER_ID__` 값 및 `.number-value` 텍스트를 같은 값으로 수정.
- 색상 변경: `style.css`의 `--primary`, `--bg1`, `--bg2`를 변경.

## 라이선스
MIT
