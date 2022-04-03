import { AppComposeUtils } from './AppCompose.util'
import { Header } from './Header'

export const Layout: React.FC<{}> = ({ children }) => {
  return (
    <div className="w-full">
      <AppComposeUtils />
      <Header />
      {children}
      {/* <Footer /> */}
    </div>
  )
}
