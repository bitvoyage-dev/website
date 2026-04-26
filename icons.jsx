// icons.jsx — シンプルな線画アイコン集（チラシの雰囲気に合わせた手書き風）

const stroke = { stroke: "currentColor", strokeWidth: 1.8, fill: "none", strokeLinecap: "round", strokeLinejoin: "round" };

const Icon = {
  // 業務診断：現場を見て、構造を可視化
  Diagnose: ({ size = 48 }) => (
    <svg width={size} height={size} viewBox="0 0 48 48" {...stroke}>
      <circle cx="20" cy="20" r="10" />
      <path d="M28 28 L38 38" />
      <path d="M16 20 h8 M20 16 v8" />
    </svg>
  ),
  // 顧問サポート：改善の順番
  Advisor: ({ size = 48 }) => (
    <svg width={size} height={size} viewBox="0 0 48 48" {...stroke}>
      <rect x="10" y="10" width="22" height="28" rx="2" />
      <path d="M14 18 h14 M14 24 h14 M14 30 h10" />
      <path d="M30 34 l4 -4 l4 4 l-4 4 z" fill="currentColor" opacity="0.15" />
      <path d="M30 34 l4 -4 l4 4 l-4 4 z" />
    </svg>
  ),
  // 実装プロジェクト：仕組みとして実装
  Implement: ({ size = 48 }) => (
    <svg width={size} height={size} viewBox="0 0 48 48" {...stroke}>
      <path d="M10 10 h12 v6 h6 v12 h-12 v-6 h-6 z" />
      <path d="M28 28 h10 M38 28 v10" />
      <path d="M30 38 l4 -4 M34 38 l4 -4" />
    </svg>
  ),
  // 問題の詰まり
  Tangle: ({ size = 48 }) => (
    <svg width={size} height={size} viewBox="0 0 48 48" {...stroke}>
      <path d="M8 24 q4 -8 10 -4 t10 6 t8 -8 t6 4" />
      <path d="M8 30 q4 -6 10 -2 t10 4 t8 -6 t6 2" />
    </svg>
  ),
  // 可視化
  Map: ({ size = 48 }) => (
    <svg width={size} height={size} viewBox="0 0 48 48" {...stroke}>
      <rect x="8" y="12" width="10" height="10" rx="2" />
      <rect x="30" y="12" width="10" height="10" rx="2" />
      <rect x="19" y="28" width="10" height="10" rx="2" />
      <path d="M18 17 h12 M13 22 v6 q0 2 2 2 h4 M29 22 v6 q0 2 -2 2 h-4" />
    </svg>
  ),
  // 改善（上向き矢印）
  Growth: ({ size = 48 }) => (
    <svg width={size} height={size} viewBox="0 0 48 48" {...stroke}>
      <path d="M8 36 L20 24 L28 30 L40 14" />
      <path d="M32 14 h8 v8" />
    </svg>
  ),
  // メール
  Mail: ({ size = 24 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" {...stroke}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 7 l9 7 l9 -7" />
    </svg>
  ),
  // 電話
  Phone: ({ size = 24 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" {...stroke}>
      <path d="M5 4 h4 l2 5 l-2 2 a12 12 0 0 0 6 6 l2 -2 l5 2 v4 a2 2 0 0 1 -2 2 A18 18 0 0 1 3 6 a2 2 0 0 1 2 -2" />
    </svg>
  ),
  // 時計（30分）
  Clock: ({ size = 24 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" {...stroke}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7 v5 l3 2" />
    </svg>
  ),
  // 矢印右
  ArrowRight: ({ size = 20 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" {...stroke}>
      <path d="M5 12 h14 M13 6 l6 6 l-6 6" />
    </svg>
  ),
  // 電球（アイデア）
  Bulb: ({ size = 24 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" {...stroke}>
      <path d="M9 18 h6 M10 21 h4" />
      <path d="M12 3 a6 6 0 0 1 4 10 q-1 1 -1 3 h-6 q0 -2 -1 -3 a6 6 0 0 1 4 -10 z" />
    </svg>
  ),
  // 人
  Person: ({ size = 24 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" {...stroke}>
      <circle cx="12" cy="8" r="4" />
      <path d="M4 22 q0 -8 8 -8 t8 8" />
    </svg>
  ),
  // 書類
  Doc: ({ size = 24 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" {...stroke}>
      <path d="M6 3 h9 l4 4 v14 a1 1 0 0 1 -1 1 h-12 a1 1 0 0 1 -1 -1 v-17 a1 1 0 0 1 1 -1 z" />
      <path d="M15 3 v4 h4" />
      <path d="M9 13 h6 M9 17 h6" />
    </svg>
  ),
  // チェック
  Check: ({ size = 16 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" {...stroke} strokeWidth="3">
      <path d="M5 12 l5 5 l9 -11" />
    </svg>
  ),
  // 場所ピン
  Pin: ({ size = 24 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" {...stroke}>
      <path d="M12 22 s7 -7 7 -13 a7 7 0 0 0 -14 0 q0 6 7 13 z" />
      <circle cx="12" cy="9" r="2.5" />
    </svg>
  ),
};

// 考えている人（チラシのイラストの代替）
function ThinkingPerson({ size = 180 }) {
  return (
    <svg width={size} height={size * 1.1} viewBox="0 0 180 200" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      {/* 頭 */}
      <circle cx="90" cy="60" r="26" fill="#fff" />
      {/* 髪 */}
      <path d="M68 52 q0 -22 22 -22 t22 22 q-4 -6 -12 -6 q-6 4 -14 2 q-8 0 -18 4 z" fill="#2a2620" stroke="none" />
      {/* 目 */}
      <path d="M81 60 q2 -2 4 0" strokeWidth="2" />
      <path d="M95 60 q2 -2 4 0" strokeWidth="2" />
      {/* 口 */}
      <path d="M86 72 q4 2 8 0" strokeWidth="1.6" />
      {/* 首 */}
      <path d="M83 84 v6 M97 84 v6" />
      {/* 体（セーター） */}
      <path d="M60 110 q4 -16 23 -20 h14 q19 4 23 20 l4 50 h-68 z" fill="#cdd6e0" stroke="#2a2620" />
      {/* 手（顎を触る） */}
      <path d="M104 94 q8 -2 12 -8 q2 -2 0 -4 q-2 -2 -4 0 q-4 4 -10 4" fill="#fff" stroke="#2a2620" />
    </svg>
  );
}

// PCを使う人
function PersonOnPC({ size = 180 }) {
  return (
    <svg width={size} height={size * 1.1} viewBox="0 0 180 200" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      {/* 頭 */}
      <circle cx="90" cy="50" r="24" fill="#fff" />
      {/* 髪 */}
      <path d="M68 46 q0 -22 22 -22 t22 22 q-4 -6 -12 -6 q-8 2 -16 0 q-8 2 -16 6 z" fill="#2a2620" stroke="none" />
      {/* 目 */}
      <circle cx="82" cy="52" r="1.5" fill="#2a2620" stroke="none" />
      <circle cx="98" cy="52" r="1.5" fill="#2a2620" stroke="none" />
      {/* 口 */}
      <path d="M86 62 q4 2 8 0" />
      {/* 体 */}
      <path d="M64 100 q4 -18 22 -26 h8 q18 8 22 26 v40 h-52 z" fill="#cdd6e0" stroke="#2a2620" />
      {/* ラップトップ */}
      <rect x="42" y="130" width="96" height="40" rx="2" fill="#fff" />
      <rect x="46" y="134" width="88" height="30" rx="1" fill="#1e4775" stroke="none" />
      <path d="M36 170 h108 l-2 6 h-104 z" fill="#cdd6e0" />
      {/* 腕 */}
      <path d="M70 130 q-6 -14 -2 -26 M110 130 q6 -14 2 -26" />
    </svg>
  );
}

window.Icon = Icon;
window.ThinkingPerson = ThinkingPerson;
window.PersonOnPC = PersonOnPC;
