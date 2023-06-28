import { FC, PropsWithChildren } from "react"

import "./globals.css"

export const metadata = {
  title: "CV | Aleksandr Kiliushin",
  description: "",
}

const RootLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <main>{children}</main>
      </body>
    </html>
  )
}

export default RootLayout
