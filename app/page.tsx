/**
 * Home Page Component
 *
 * This is the main landing page of the application.
 * In Next.js App Router, files named page.tsx in the app directory
 * represent route segments. This file at app/page.tsx corresponds to the "/" route.
 *
 * The page displays:
 * - A centered "Hello, World!" heading with gradient effect
 * - A descriptive paragraph explaining the tech stack
 * - Responsive design that works on all device sizes
 * - Fade-in animations for visual appeal
 */

export default function Home() {
  return (
    <main>
      {/* Hero section with centered content */}
      <section className="hero">
        {/* Main heading with gradient text effect */}
        <h1>Hello, World!</h1>

        {/* Description paragraph with information about the stack */}
        <p>
          Đây là một trang web đơn giản được xây dựng bằng Next.js 14 với App
          Router và CSS thuần. Trang này hoàn toàn responsive, có hiệu ứng
          animation đẹp, và không sử dụng bất kỳ thư viện UI bên thứ ba nào.
        </p>
      </section>
    </main>
  );
}
