"use client"; // クライアントコンポーネントとして設定

// src/app/layout.jsx
import './globals.css'; // グローバルスタイルをインポート
import Sidebar from '../components/Sidebar'; // Sidebarをインポート
import Logo from '../components/Logo'; // Logoをインポート
import { usePathname } from 'next/navigation';

export default function RootLayout({ children }) {
  // const pathname = usePathname();

  // // サイドバーを非表示にするページのパスを配列で定義
  // const noSidebarPaths = ['/login_user', '/login_manager', '/'];

  // // 現在のパスがnoSidebarPathsのいずれかに一致するか判定
  // const isNoSidebarPage = noSidebarPaths.includes(pathname);

  return (
    <html lang="ja">
      <body>{children}</body>
      
    </html>
  );
}


