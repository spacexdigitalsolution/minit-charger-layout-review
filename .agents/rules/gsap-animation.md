---
trigger: glob
globs:
  - "app/**/*.js"
  - "app/**/*.jsx"
---

# GSAP & Animation Conventions

## 1. GSAP Lifecycle in React 19
- Always import GSAP and `useGSAP` from `@gsap/react`:
  ```jsx
  import gsap from "gsap";
  import { useGSAP } from "@gsap/react";
  ```
- Always pass a `scope` ref to `useGSAP` to prevent memory leaks and ensure automated cleanup on unmount:
  ```jsx
  const containerRef = useRef(null);

  useGSAP(() => {
    gsap.from(".fade-item", {
      opacity: 0,
      y: 20,
      duration: 0.6,
      stagger: 0.1,
    });
  }, { scope: containerRef });
  ```

## 2. Critical: Avoid Ref Access During Render
- In React 19 / ESLint 9, calling `contextSafe` directly in the component body (e.g., `const handleClick = contextSafe(...)`) causes the `react-hooks/refs` lint error because it accesses refs during render.
- **Solution:** Wrap event handlers in `useCallback` or construct callbacks inside `useGSAP`:
  ```jsx
  const { contextSafe } = useGSAP({ scope: containerRef });

  const handleClick = useCallback(
    contextSafe((id) => {
      gsap.to(`.tab-${id}`, { opacity: 1, duration: 0.3 });
    }),
    [contextSafe]
  );
  ```

## 3. Reduced Motion Support
- Always check and respect user reduced-motion preferences before launching non-essential animations:
  ```jsx
  const prefersReducedMotion = typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (prefersReducedMotion) {
    // Skip or simplify animation
    return;
  }
  ```
- Avoid calling `setState` synchronously within `useEffect` when checking motion queries; initialize state with the query result or handle via event listeners.
