import { FC, PropsWithChildren } from "react"

import "./globals.css"

export const metadata = {
  title: "CV | Aleksandr Kiliushin",
  description: "",
}

const RootLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

export default RootLayout
