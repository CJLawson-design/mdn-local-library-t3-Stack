import SideNav from './SideNav'

function Layout( {children}: {children: React.ReactNode}) {
  return (
      <>
      <SideNav />
        {children}
      </>
  )
}

export default Layout