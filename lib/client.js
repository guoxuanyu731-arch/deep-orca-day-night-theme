export const inject = ['theme'];

const OWNER = 'deep-orca-day-night';
const BODY_ATTR = 'data-dsh-deep-orca';
const LIGHT_CHROME = '#f4fdff';
const DARK_CHROME = '#061827';
const TITLE = '深海虎鲸昼夜舱 · DeepSeek Harness';

const css = `
body[${BODY_ATTR}] {
  --orca-ink: #102a43;
  --orca-muted: #486581;
  --orca-surface: rgba(248, 253, 255, 0.76);
  --orca-surface-strong: rgba(255, 255, 255, 0.9);
  --orca-border: rgba(34, 167, 199, 0.28);
  --orca-ring: rgba(13, 148, 136, 0.22);
  --orca-accent: #0891b2;
  --orca-accent-2: #14b8a6;
  color-scheme: light;
}

body[${BODY_ATTR}][data-ds-dark-theme] {
  --orca-ink: #dff8ff;
  --orca-muted: #8bc8d8;
  --orca-surface: rgba(6, 24, 39, 0.74);
  --orca-surface-strong: rgba(10, 37, 57, 0.92);
  --orca-border: rgba(125, 211, 252, 0.3);
  --orca-ring: rgba(45, 212, 191, 0.2);
  --orca-accent: #22d3ee;
  --orca-accent-2: #a7f3d0;
  color-scheme: dark;
}

body[${BODY_ATTR}]::before {
  content: "";
  position: fixed;
  inset: 0;
  z-index: -3;
  pointer-events: none;
  background:
    radial-gradient(circle at 18% 18%, rgba(20, 184, 166, 0.28), transparent 24rem),
    radial-gradient(circle at 74% 16%, rgba(125, 211, 252, 0.36), transparent 26rem),
    radial-gradient(circle at 52% 86%, rgba(250, 204, 21, 0.16), transparent 20rem),
    linear-gradient(145deg, #f8feff 0%, #e6fbff 44%, #d7f4f6 100%);
}

body[${BODY_ATTR}][data-ds-dark-theme]::before {
  background:
    radial-gradient(circle at 22% 18%, rgba(34, 211, 238, 0.24), transparent 24rem),
    radial-gradient(circle at 78% 24%, rgba(167, 139, 250, 0.18), transparent 28rem),
    radial-gradient(circle at 48% 88%, rgba(20, 184, 166, 0.18), transparent 22rem),
    linear-gradient(145deg, #04111f 0%, #082338 48%, #051522 100%);
}

body[${BODY_ATTR}]::after {
  content: "";
  position: fixed;
  inset: 0;
  z-index: -2;
  pointer-events: none;
  opacity: 0.6;
  background-image:
    linear-gradient(115deg, transparent 0 42%, rgba(255,255,255,0.34) 43% 44%, transparent 45%),
    repeating-linear-gradient(90deg, rgba(8,145,178,0.08) 0 1px, transparent 1px 72px);
  mask-image: linear-gradient(to right, rgba(0,0,0,0.9), rgba(0,0,0,0.36) 34%, transparent 78%);
}

body[${BODY_ATTR}][data-ds-dark-theme]::after {
  opacity: 0.72;
  background-image:
    linear-gradient(115deg, transparent 0 42%, rgba(34,211,238,0.2) 43% 44%, transparent 45%),
    repeating-linear-gradient(90deg, rgba(125,211,252,0.07) 0 1px, transparent 1px 80px);
}

body[${BODY_ATTR}] [class*="sidebar"],
body[${BODY_ATTR}] [data-pane="sidebar"] {
  background: linear-gradient(180deg, var(--orca-surface-strong), var(--orca-surface)) !important;
  border-right: 1px solid var(--orca-border) !important;
  box-shadow: 12px 0 34px rgba(14, 116, 144, 0.12);
  backdrop-filter: blur(18px) saturate(1.12);
}

body[${BODY_ATTR}] main,
body[${BODY_ATTR}] [class*="chat"],
body[${BODY_ATTR}] [class*="message"],
body[${BODY_ATTR}] [class*="composer"],
body[${BODY_ATTR}] textarea,
body[${BODY_ATTR}] input,
body[${BODY_ATTR}] button,
body[${BODY_ATTR}] [role="dialog"],
body[${BODY_ATTR}] [role="menu"] {
  border-color: var(--orca-border) !important;
}

body[${BODY_ATTR}] [class*="message"],
body[${BODY_ATTR}] [class*="composer"],
body[${BODY_ATTR}] [role="dialog"],
body[${BODY_ATTR}] [role="menu"] {
  background: var(--orca-surface) !important;
  color: var(--orca-ink) !important;
  box-shadow: 0 18px 50px rgba(8, 47, 73, 0.1);
  backdrop-filter: blur(16px) saturate(1.08);
}

body[${BODY_ATTR}] button:hover,
body[${BODY_ATTR}] [role="button"]:hover {
  box-shadow: 0 0 0 3px var(--orca-ring) !important;
}

[data-orca-chrome="rail"] {
  position: fixed;
  top: 64px;
  right: 24px;
  z-index: 40;
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 8px 10px;
  border: 1px solid var(--orca-border);
  border-radius: 999px;
  background: var(--orca-surface-strong);
  color: var(--orca-ink);
  box-shadow: 0 14px 38px rgba(8, 47, 73, 0.16);
  backdrop-filter: blur(16px) saturate(1.15);
}

[data-orca-chrome="toggle"] {
  width: 38px;
  height: 38px;
  display: grid;
  place-items: center;
  border: 0;
  border-radius: 999px;
  background: linear-gradient(135deg, var(--orca-accent), var(--orca-accent-2));
  color: #ffffff;
  cursor: pointer;
}

[data-orca-chrome="toggle"] svg {
  width: 20px;
  height: 20px;
}

[data-orca-chrome="label"] {
  min-width: 4.5rem;
  font: 600 12px/1.1 system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  color: var(--orca-muted);
}

[data-orca-chrome="ambient"] {
  position: fixed;
  inset: 0;
  z-index: -1;
  overflow: hidden;
  pointer-events: none;
}

[data-orca-chrome="ambient"] span {
  position: absolute;
  left: var(--x);
  top: var(--y);
  width: var(--s);
  height: var(--s);
  border-radius: 999px;
  background: radial-gradient(circle, rgba(255,255,255,0.92), rgba(34,211,238,0.18) 62%, transparent 70%);
  animation: orca-drift var(--d) ease-in-out infinite alternate;
  animation-delay: var(--delay);
}

body[${BODY_ATTR}][data-ds-dark-theme] [data-orca-chrome="ambient"] span {
  background: radial-gradient(circle, rgba(167,243,208,0.92), rgba(34,211,238,0.24) 54%, transparent 72%);
}

[data-orca-chrome="mark"] {
  position: fixed;
  left: max(22px, env(safe-area-inset-left));
  bottom: 20px;
  z-index: 12;
  width: 86px;
  height: 86px;
  border: 1px solid var(--orca-border);
  border-radius: 24px;
  background:
    radial-gradient(circle at 36% 36%, #ffffff 0 11px, transparent 12px),
    radial-gradient(circle at 62% 42%, var(--orca-accent) 0 8px, transparent 9px),
    conic-gradient(from 220deg, #07111f 0 42%, #ffffff 42% 72%, var(--orca-accent) 72% 100%);
  box-shadow: 0 18px 42px rgba(8, 47, 73, 0.18);
  cursor: grab;
  opacity: 0.72;
  touch-action: none;
  transition: opacity 160ms ease, box-shadow 160ms ease, transform 160ms ease;
  user-select: none;
  will-change: left, top, transform;
}

[data-orca-chrome="mark"][data-orca-dragging="true"] {
  cursor: grabbing;
  opacity: 0.94;
  transform: scale(1.04) rotate(-2deg);
  box-shadow: 0 24px 54px rgba(8, 47, 73, 0.28), 0 0 0 5px var(--orca-ring);
}

[data-orca-chrome="bubble"] {
  position: fixed;
  z-index: 42;
  max-width: min(14rem, calc(100vw - 24px));
  padding: 9px 12px;
  border: 1px solid var(--orca-border);
  border-radius: 18px 18px 18px 6px;
  background: var(--orca-surface-strong);
  color: var(--orca-ink);
  box-shadow: 0 16px 38px rgba(8, 47, 73, 0.16);
  backdrop-filter: blur(14px) saturate(1.12);
  font: 700 12px/1.35 system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  letter-spacing: 0.02em;
  opacity: 0;
  pointer-events: none;
  transform: translate3d(0, 10px, 0) scale(0.96);
  transition: opacity 180ms ease, transform 180ms ease;
  white-space: normal;
}

[data-orca-chrome="bubble"]::after {
  content: "";
  position: absolute;
  left: 18px;
  bottom: -7px;
  width: 12px;
  height: 12px;
  border-right: 1px solid var(--orca-border);
  border-bottom: 1px solid var(--orca-border);
  background: var(--orca-surface-strong);
  transform: rotate(45deg);
}

[data-orca-chrome="bubble"][data-orca-bubble="show"] {
  opacity: 1;
  transform: translate3d(0, -4px, 0) scale(1);
}

@keyframes orca-drift {
  from { transform: translate3d(-8px, 8px, 0) scale(0.92); opacity: 0.42; }
  to { transform: translate3d(16px, -24px, 0) scale(1.08); opacity: 0.9; }
}

@media (prefers-reduced-motion: reduce) {
  [data-orca-chrome="ambient"] span {
    animation: none;
  }

  [data-orca-chrome="mark"],
  [data-orca-chrome="bubble"] {
    transition: none;
  }
}

@media (max-width: 720px) {
  [data-orca-chrome="rail"] {
    top: auto;
    right: 12px;
    bottom: 12px;
  }

  [data-orca-chrome="mark"] {
    display: none;
  }
}
`;

const particles = [
  ['8%', '18%', '7px', '12s', '-1s'],
  ['16%', '72%', '10px', '16s', '-3s'],
  ['26%', '38%', '5px', '14s', '-5s'],
  ['42%', '84%', '9px', '18s', '-7s'],
  ['58%', '22%', '6px', '13s', '-9s'],
  ['72%', '66%', '11px', '17s', '-11s'],
  ['86%', '32%', '5px', '15s', '-13s'],
  ['94%', '78%', '8px', '19s', '-15s']
];

const dragPhrases = [
  '带我一起走嘛～',
  '不要丢下我呀～',
  '再陪我一小会儿嘛',
  '嘿嘿，贴贴一下～',
  '我就乖乖跟着你啦',
  '摸摸头好不好？',
  '搬到这里也喜欢你～',
  '别放手嘛，我会想你的'
];

function setThemeColor(dark) {
  const meta = document.head.querySelector('meta[name="theme-color"]');
  if (meta) meta.content = dark ? DARK_CHROME : LIGHT_CHROME;
}

function makeIcon(dark) {
  return dark
    ? '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M20.2 15.4A8.3 8.3 0 0 1 8.6 3.8a8.3 8.3 0 1 0 11.6 11.6Z"/></svg>'
    : '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="4" fill="currentColor"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9 7 7M17 17l2.1 2.1M19.1 4.9 17 7M7 17l-2.1 2.1" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>';
}

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

function activate(ctx) {
  const body = document.body;
  const previousTitle = document.title;
  const style = document.createElement('style');
  const rail = document.createElement('div');
  const button = document.createElement('button');
  const label = document.createElement('span');
  const ambient = document.createElement('div');
  const mark = document.createElement('div');
  const bubble = document.createElement('div');
  let disposed = false;
  let dragState = null;
  let bubbleTimer = 0;
  let lastBubbleAt = 0;
  let phraseIndex = 0;

  style.dataset.orcaOwner = OWNER;
  style.textContent = css;

  rail.dataset.orcaOwner = OWNER;
  rail.dataset.orcaChrome = 'rail';

  button.type = 'button';
  button.dataset.orcaChrome = 'toggle';
  button.title = '切换昼夜主题';

  label.dataset.orcaChrome = 'label';

  ambient.dataset.orcaOwner = OWNER;
  ambient.dataset.orcaChrome = 'ambient';
  ambient.setAttribute('aria-hidden', 'true');
  for (const [x, y, s, d, delay] of particles) {
    const dot = document.createElement('span');
    dot.style.setProperty('--x', x);
    dot.style.setProperty('--y', y);
    dot.style.setProperty('--s', s);
    dot.style.setProperty('--d', d);
    dot.style.setProperty('--delay', delay);
    ambient.append(dot);
  }

  mark.dataset.orcaOwner = OWNER;
  mark.dataset.orcaChrome = 'mark';
  mark.role = 'button';
  mark.tabIndex = 0;
  mark.title = '拖我试试～';
  mark.setAttribute('aria-label', '可拖动的深海虎鲸装饰，会冒撒娇小气泡');

  bubble.dataset.orcaOwner = OWNER;
  bubble.dataset.orcaChrome = 'bubble';
  bubble.setAttribute('aria-hidden', 'true');

  const nextPhrase = () => {
    phraseIndex = (phraseIndex + 1 + Math.floor(Math.random() * (dragPhrases.length - 1))) % dragPhrases.length;
    return dragPhrases[phraseIndex];
  };

  const positionBubble = () => {
    const markRect = mark.getBoundingClientRect();
    const bubbleRect = bubble.getBoundingClientRect();
    const margin = 12;
    const fallbackWidth = Math.min(224, window.innerWidth - margin * 2);
    const width = bubbleRect.width || fallbackWidth;
    const height = bubbleRect.height || 42;
    const left = clamp(markRect.left + markRect.width * 0.55, margin, window.innerWidth - width - margin);
    const top = clamp(markRect.top - height - 12, margin, window.innerHeight - height - margin);
    bubble.style.left = `${left}px`;
    bubble.style.top = `${top}px`;
  };

  const showBubble = (text = nextPhrase(), holdMs = 1500) => {
    bubble.textContent = text;
    bubble.dataset.orcaBubble = 'show';
    positionBubble();
    window.clearTimeout(bubbleTimer);
    bubbleTimer = window.setTimeout(() => {
      delete bubble.dataset.orcaBubble;
    }, holdMs);
  };

  const moveMarkTo = (left, top) => {
    const rect = mark.getBoundingClientRect();
    const margin = 8;
    const x = clamp(left, margin, window.innerWidth - rect.width - margin);
    const y = clamp(top, margin, window.innerHeight - rect.height - margin);
    mark.style.left = `${x}px`;
    mark.style.top = `${y}px`;
    mark.style.right = 'auto';
    mark.style.bottom = 'auto';
    positionBubble();
  };

  const startDrag = (event) => {
    if (event.pointerType === 'mouse' && event.button !== 0) return;
    if (getComputedStyle(mark).display === 'none') return;
    const rect = mark.getBoundingClientRect();
    dragState = {
      pointerId: event.pointerId,
      startX: event.clientX,
      startY: event.clientY,
      left: rect.left,
      top: rect.top
    };
    mark.dataset.orcaDragging = 'true';
    try {
      mark.setPointerCapture?.(event.pointerId);
    } catch {}
    event.preventDefault();
    lastBubbleAt = Date.now();
    showBubble('带我一起走嘛～', 1800);
  };

  const dragMove = (event) => {
    if (!dragState || event.pointerId !== dragState.pointerId) return;
    event.preventDefault();
    moveMarkTo(
      dragState.left + event.clientX - dragState.startX,
      dragState.top + event.clientY - dragState.startY
    );
    const now = Date.now();
    if (now - lastBubbleAt > 680) {
      lastBubbleAt = now;
      showBubble(nextPhrase(), 1300);
    }
  };

  const endDrag = (event) => {
    if (!dragState || event.pointerId !== dragState.pointerId) return;
    try {
      mark.releasePointerCapture?.(event.pointerId);
    } catch {}
    dragState = null;
    delete mark.dataset.orcaDragging;
    showBubble('就待在这里啦～', 1400);
  };

  const keepMarkInViewport = () => {
    if (!mark.style.left && !mark.style.top) return;
    const rect = mark.getBoundingClientRect();
    moveMarkTo(rect.left, rect.top);
  };

  const sync = () => {
    const dark = body.hasAttribute('data-ds-dark-theme');
    button.innerHTML = makeIcon(dark);
    button.setAttribute('aria-label', dark ? '切换到浅昼主题' : '切换到夜巡主题');
    label.textContent = dark ? '夜巡模式' : '浅昼模式';
    setThemeColor(dark);
  };

  const switchTheme = () => {
    const dark = body.hasAttribute('data-ds-dark-theme');
    ctx?.theme?.setTheme?.(dark ? 'light' : 'dark');
    requestAnimationFrame(sync);
  };

  const observer = new MutationObserver(sync);
  observer.observe(body, { attributes: true, attributeFilter: ['data-ds-dark-theme'] });

  button.addEventListener('click', switchTheme);
  mark.addEventListener('pointerdown', startDrag);
  mark.addEventListener('pointermove', dragMove);
  mark.addEventListener('pointerup', endDrag);
  mark.addEventListener('pointercancel', endDrag);
  window.addEventListener('resize', keepMarkInViewport);
  rail.append(button, label);
  document.head.append(style);
  document.body.append(ambient, mark, bubble, rail);
  body.setAttribute(BODY_ATTR, '');
  document.title = TITLE;
  sync();

  return () => {
    if (disposed) return;
    disposed = true;
    window.clearTimeout(bubbleTimer);
    observer.disconnect();
    button.removeEventListener('click', switchTheme);
    mark.removeEventListener('pointerdown', startDrag);
    mark.removeEventListener('pointermove', dragMove);
    mark.removeEventListener('pointerup', endDrag);
    mark.removeEventListener('pointercancel', endDrag);
    window.removeEventListener('resize', keepMarkInViewport);
    document.querySelectorAll(`[data-orca-owner="${OWNER}"]`).forEach((node) => node.remove());
    body.removeAttribute(BODY_ATTR);
    if (document.title === TITLE) document.title = previousTitle;
  };
}

export function apply(ctx) {
  if (ctx?.effect) {
    ctx.effect(() => activate(ctx), 'ui-skin-deep-orca-day-night: browser skin');
    return;
  }
  activate(ctx);
}
