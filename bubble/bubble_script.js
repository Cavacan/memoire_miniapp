export const container = document.getElementById('bubble-container');

export function createBubble() {
  const bubble = document.createElement('div');
  bubble.classList.add('bubble');
  
  const size = Math.random() * 50 + 20;
  bubble.style.width = `${size}px`;
  bubble.style.height = `${size}px`;
  
  // 左右のランダムな位置に配置
  bubble.style.left = `${Math.random() * 100}%`;
  
  // バブルが下から表示されるようにbottomを修正
  bubble.style.bottom = `-${size}px`;

  console.log('Bubble created with size:', size);
  
  // バブルクリックで消すアニメーション
  bubble.addEventListener('click', () => {
    bubble.classList.add('pop');
    setTimeout(() => bubble.remove(), 300);
  });
  
  // コンテナに追加
  container.appendChild(bubble);

  // 4秒後にバブルを削除
  setTimeout(() => {
    if (!bubble.classList.contains('pop')) {
      bubble.remove();
    }
  }, 4000);
}
