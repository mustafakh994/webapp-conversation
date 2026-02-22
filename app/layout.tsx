import { getLocaleOnServer } from '@/i18n/server'
import { Almarai } from 'next/font/google'

import './styles/globals.css'
import './styles/markdown.scss'

const almarai = Almarai({
  subsets: ['arabic'],
  weight: ['300', '400', '700', '800'],
  variable: '--font-almarai',
})

const LocaleLayout = async ({
  children,
}: {
  children: React.ReactNode
}) => {
  const locale = await getLocaleOnServer()
  // Ensure RTL capability for Arabic (which is the default language for Almarai)
  const isArabic = locale === 'ar' || locale?.startsWith('ar-')
  const dir = isArabic ? 'rtl' : 'ltr'

  return (
    <html lang={locale ?? 'ar'} dir={dir} className={`h-full ${almarai.variable}`}>
      <body className={`h-full ${almarai.className}`}>
        <div className="overflow-x-auto">
          <div className="w-screen h-screen min-w-[300px]">
            {children}
          </div>
        </div>
      </body>
    </html>
  )
}

export default LocaleLayout
