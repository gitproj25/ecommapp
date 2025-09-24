

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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
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
