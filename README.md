# Dodam Design System (DDS)

> B1ND의 공식 디자인 시스템 - React 컴포넌트 라이브러리

**DodamDodamDesignSystem**의 약자로, 도담도담 웹 서비스의 디자인 통일성을 제공하고 UI 컴포넌트와 스타일시트 개발을 지원합니다.

[![npm version](https://img.shields.io/npm/v/dds-web-test.svg)](https://www.npmjs.com/package/dds-web-test)
[![license](https://img.shields.io/npm/l/dds-web-test.svg)](https://github.com/Team-B1ND/dds-web/blob/main/LICENSE)

## 📦 설치

```bash
npm install dds-web-test
# or
yarn add dds-web-test
# or
pnpm add dds-web-test
```

### Peer Dependencies

이 패키지는 다음 라이브러리가 필요합니다:

```bash
npm install react react-dom styled-components
```

## 🚀 시작하기

### 기본 사용법

```tsx
import { DodamButton, DodamThemeProvider, DodamLightTheme } from 'dds-web-test';

function App() {
  return (
    <DodamThemeProvider theme={DodamLightTheme}>
      <DodamButton>Click me</DodamButton>
    </DodamThemeProvider>
  );
}
```

### Next.js에서 사용하기

Next.js 13+ (App Router)에서 사용 시 추가 설정이 필요합니다:

```js
// next.config.js
module.exports = {
  compiler: {
    styledComponents: true,
  },
};
```

```tsx
// app/layout.tsx
'use client';

import { DodamThemeProvider, DodamLightTheme } from 'dds-web-test';

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <DodamThemeProvider theme={DodamLightTheme}>
          {children}
        </DodamThemeProvider>
      </body>
    </html>
  );
}
```

## 📖 문서

- **[DDS 공식 문서](https://dds.b1nd.com/)**
- **[Storybook](https://6790af6f8be4854ca7b49f7e-gfjyrtgjug.chromatic.com/?path=/docs/ui-dodambutton-dodamcontentbutton--docs)**

## 🏗️ 아키텍처

### Foundation
<img width="1570" alt="도담디자인시스템" src="https://github.com/user-attachments/assets/44e8e3e4-0364-4fa7-90d0-d4f03ecac669" />

### Component
<img width="1274" alt="도담도담 디자인시스템2" src="https://github.com/user-attachments/assets/f64b4ac7-5e48-49e5-ab2a-616dcca9b3a7" />

## 🎨 주요 컴포넌트

### Buttons
- `DodamFilledButton` - 채워진 버튼
- `DodamContentButton` - 콘텐츠 버튼
- `DodamSegmentedButton` - 세그먼트 버튼
- `DodamToggleButton` - 토글 버튼

### Form
- `DodamTextField` - 텍스트 입력 필드
- `DodamFilledTextField` - 채워진 텍스트 필드
- `DodamCheckBox` - 체크박스
- `DodamDatePicker` - 날짜 선택기

### Typography
- `DodamHeading1`, `DodamHeading2` - 제목
- `DodamBody1`, `DodamBody2` - 본문
- `DodamCaption1`, `DodamCaption2` - 캡션
- `DodamTitle1`, `DodamTitle2` - 타이틀
- `DodamLabel` - 라벨

### Layout
- `DodamModal` - 모달
- `DodamDialog` - 다이얼로그
- `DodamNavBar` - 네비게이션 바
- `Flex` - Flex 레이아웃
- `Portal` - 포털

### Other
- `DodamBus` - 버스 좌석 선택
- `DodamPageIndicator` - 페이지 인디케이터
- `DodamNotFoundPage` - 404 페이지
- `DodamErrorBoundary` - 에러 바운더리

## 🎭 테마

### 라이트 테마

```tsx
import { DodamThemeProvider, DodamLightTheme } from 'dds-web-test';

<DodamThemeProvider theme={DodamLightTheme}>
  {/* ... */}
</DodamThemeProvider>
```

### 다크 테마

```tsx
import { DodamThemeProvider, DodamDarkTheme } from 'dds-web-test';

<DodamThemeProvider theme={DodamDarkTheme}>
  {/* ... */}
</DodamThemeProvider>
```

### Storybook 다크 모드 사용법

배경을 변경하고 theme 버튼을 클릭하여 모드를 변경할 수 있습니다.

![스크린샷 2025-05-02 오전 10 58 40](https://github.com/user-attachments/assets/3cd7f57a-890a-4f2b-b7d0-49d058dbbf0c)

## 🔄 모노레포 → 단일 패키지 전환

이 프로젝트는 원래 모노레포 구조로 여러 개의 패키지로 나누어 관리되었습니다. 개별 패키지로 분리하여 필요한 부분만 설치할 수 있도록 설계되었지만, 실제 사용 시 대부분의 컴포넌트와 유틸리티를 함께 사용하는 경우가 많아 다음과 같은 문제가 발생했습니다:

- ❌ 여러 패키지를 따로따로 설치하는 번거로움
- ❌ 각 패키지별로 버전 관리의 복잡성
- ❌ 의존성 관리의 어려움

이러한 문제를 해결하기 위해 **단일 패키지 구조로 전환**하여 배포하게 되었습니다.

### ⚠️ 현재 상태

- **패키지 크기**: ~34.4MB (압축 전)
- **원인**: 폰트 파일 및 번들링 최적화 부족

### 🚧 향후 계획

- [ ] 패키지 크기 최적화 (목표: 50% 이상 감소)
- [ ] 폰트 파일 외부 CDN 분리
- [ ] Tree-shaking 개선
- [ ] 코드 분할 및 경량화
- [ ] 선택적 import 지원

## 🛠️ 기술 스택

- **React** 18/19
- **TypeScript** 5.x
- **styled-components** 6.x
- **tsup** - 빌드 도구
- **Storybook** - 컴포넌트 문서화

## 📄 라이선스

MIT © Team B1ND

## 🤝 기여하기

기여는 언제나 환영합니다! [GitHub Repository](https://github.com/Team-B1ND/dds-web)에서 이슈를 등록하거나 PR을 보내주세요.

## 📞 문의

- **GitHub**: [Team-B1ND](https://github.com/Team-B1ND)
- **Website**: [dds.b1nd.com](https://dds.b1nd.com/)
