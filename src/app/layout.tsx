import { Ubuntu } from "next/font/google"
import { FC, PropsWithChildren } from "react"

import "./globals.css"

const inter = Ubuntu({ subsets: ["latin"], weight: "400" })

export const metadata = {
  title: "CV | Aleksandr Kiliushin",
  description: "",
}

const RootLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main>{children}</main>
      </body>
    </html>
  )
}

export default RootLayout
