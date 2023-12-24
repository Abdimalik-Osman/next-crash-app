
const Layout = ({children}) => {
  return (
    <div className='p-20'>
      <div className="bg-yellow font-bold">
        <span>You are VIP member.</span>
        {children}
      </div>
    </div>
  )
}

export default Layout
