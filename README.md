# Hello World - Next.js Website

Một trang web đơn giản "Hello World" được xây dựng bằng **Next.js 14** với **App Router** và **CSS thuần**.

## 🚀 Tính Năng

- ✨ **Next.js 14** với App Router
- 🎨 **CSS thuần** (không dùng Tailwind hay CSS-in-JS)
- 📱 **Responsive Design** - hoạt động tốt trên mobile, tablet và desktop
- ⚡ **Hiệu ứng Animation** - fade-in effect và hover animation
- 🌈 **Gradient Text** - tiêu đề có hiệu ứng gradient màu
- 🔤 **CSS Variables** - dễ dàng thay đổi màu sắc và font
- 📝 **TypeScript** - code được viết bằng TypeScript
- 🧹 **Code sạch** - có comment giải thích từng phần

## 📁 Cấu Trúc Dự Án

```
hello-world-nextjs/
├── app/
│   ├── layout.tsx          # Root layout component
│   ├── page.tsx            # Trang chủ (route "/")
│   └── globals.css         # CSS toàn cục
├── package.json            # Dependencies và scripts
├── tsconfig.json           # TypeScript configuration
├── next.config.js          # Next.js configuration
├── .gitignore              # Git ignore rules
└── README.md               # Hướng dẫn này
```

## 📖 Giải Thích từng File

### `package.json`
- Định nghĩa dependencies: React, React DOM, Next.js
- Định nghĩa dev dependencies: TypeScript, @types packages
- Scripts: `dev`, `build`, `start`, `lint`

### `tsconfig.json`
- Cấu hình TypeScript để hoạt động với Next.js
- Target ES2020
- Strict mode enabled
- Path aliases cấu hình

### `next.config.js`
- Cấu hình cơ bản cho Next.js
- React strict mode được bật

### `app/layout.tsx`
- **Root Layout** - bao bọc toàn bộ ứng dụng
- Định nghĩa metadata: title, description, viewport
- Import file CSS toàn cục (globals.css)
- Cấu hình ngôn ngữ (lang="vi" cho Tiếng Việt)

### `app/page.tsx`
- **Trang chủ** tương ứng với route "/"
- Hiển thị tiêu đề "Hello, World!"
- Hiển thị đoạn mô tả về tech stack
- Sử dụng class CSS từ globals.css

### `app/globals.css`
- **CSS Variables** cho màu sắc, font, spacing
- **Reset styles** - loại bỏ margin/padding mặc định
- **Responsive Design**:
  - Desktop: Font size 48px
  - Tablet (≤768px): Font size 36px
  - Mobile (≤480px): Font size 28px
- **Animations**:
  - `fadeIn` - hiệu ứng xuất hiện từ từ
  - `fadeInDelay` - hiệu ứng xuất hiện trễ cho description
- **Hover Effects** - tiêu đề di chuyển lên khi hover
- **Gradient Text** - tiêu đề có màu gradient

## 🛠️ Hướng Dẫn Chạy

### 1. Yêu Cầu Hệ Thống
- **Node.js**: version 18+ hoặc 20+
- **npm** hoặc **yarn** hoặc **pnpm**

### 2. Cài Đặt Dependencies

```bash
# Sử dụng npm
npm install

# Hoặc sử dụng yarn
yarn install

# Hoặc sử dụng pnpm
pnpm install
```

### 3. Chạy Development Server

```bash
# Sử dụng npm
npm run dev

# Hoặc sử dụng yarn
yarn dev

# Hoặc sử dụng pnpm
pnpm dev
```

Server sẽ khởi động tại: **http://localhost:3000**

### 4. Build cho Production

```bash
# Build ứng dụng
npm run build

# Chạy production build
npm start
```

### 5. Lint Code

```bash
npm run lint
```

## 🎨 Tùy Chỉnh

### Thay Đổi Màu Sắc

Mở file `app/globals.css` và chỉnh sửa CSS variables trong `:root`:

```css
:root {
  --color-primary: #1a1a1a;        /* Màu chính */
  --color-accent: #0070f3;         /* Màu accent */
  --color-background: #f9f9f9;     /* Màu nền */
  /* ... các biến khác ... */
}
```

### Thay Đổi Font

Chỉnh sửa `--font-family-base` trong `:root`:

```css
--font-family-base: 'Your Font Name', sans-serif;
```

### Thay Đổi Nội Dung

Chỉnh sửa file `app/page.tsx`:
- Thay đổi text trong `<h1>` để thay tiêu đề
- Thay đổi text trong `<p>` để thay description

## 📱 Responsive Breakpoints

- **Desktop**: ≥ 768px
- **Tablet**: 480px - 768px
- **Mobile**: < 480px

Trang web hiển thị tốt trên tất cả các kích thước màn hình.

## ⚙️ Công Nghệ Sử Dụng

- **Next.js 14** - React framework
- **React 18** - UI library
- **TypeScript** - Type safety
- **CSS 3** - Styling (Variables, Flexbox, Gradient, Animations)

## 📝 Ghi Chú

- Không sử dụng Tailwind CSS
- Không sử dụng CSS-in-JS
- Không sử dụng thư viện UI bên thứ ba
- Code được viết bằng TypeScript
- Có comment giải thích từng phần

## 🤝 Đóng Góp

Tự do fork, chỉnh sửa và tùy chỉnh dự án này theo nhu cầu của bạn!

## 📄 License

MIT
