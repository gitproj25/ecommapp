

import type { Metadata } from 'next';
import './globals.css';
import './font.css';

import ThemeProviderWrapper from '@/components/common/ThemeProviderWrapper';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import Newsletter from '@/components/ui/NewsLetter';
import { Provider } from 'react-redux'
import { store } from '../redux/store/store'
import ReduxProvider from '@/components/ReduxProvider';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import localFont from 'next/font/local'


export const metadata: Metadata = {
  title: '',
  description:
    '',
  keywords:
    '',
  authors: [{ name: 'Fedelis' }],
  viewport: 'width=device-width, initial-scale=1',
  openGraph: {
    title: '',
    description:
      '',
    type: 'website',
  },
};
// const integral = localFont({
//   src: [
//     { path: "/my-copy/public/fonts/IntegralCF/Fontspring-DEMO-integralcf-bold.otf", weight: "700", style: "normal" },
//     { path: "/my-copy/public/fonts/IntegralCF/Fontspring-DEMO-integralcf-extrabold.otf", weight: "800", style: "normal" },
//   ],
//   variable: "--font-integral",
  
// });
// const satoshi = localFont({
//   src: [
//     { path: "/my-copy/public/fonts/Satoshi/Satoshi-Regular.otf", weight: "400", style: "normal" },
//     // { path: "/fonts/Satoshi/Satoshi-RegularItalic.otf", weight: "400", style: "italic" },
//     { path: "/fonts/Satoshi/Satoshi-Light.otf", weight: "300", style: "normal" },
//     { path: "/fonts/Satoshi/Satoshi-LightItalic.otf", weight: "300", style: "italic" },
//     { path: "/fonts/Satoshi/Satoshi-Medium.otf", weight: "500", style: "normal" },
//     { path: "/fonts/Satoshi/Satoshi-MediumItalic.otf", weight: "500", style: "italic" },
//     { path: "/fonts/Satoshi/Satoshi-Bold.otf", weight: "700", style: "normal" },
//     { path: "/fonts/Satoshi/Satoshi-BoldItalic.otf", weight: "700", style: "italic" },
//     { path: "/fonts/Satoshi/Satoshi-Black.otf", weight: "900", style: "normal" },
//     // { path: "/fonts/Satoshi/Satoshi-BlackItalic.otf", weight: "900", style: "italic" },
//   ],
//   variable: "--font-satoshi",
// });


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
        <body >
         <ReduxProvider>
        <ThemeProviderWrapper>
          <Header/>
          {children}
        <div className="relative">
  <Newsletter />
  <Footer />
</div>
 
        </ThemeProviderWrapper>
        </ReduxProvider>
        
      </body>
    </html>
  );
}
