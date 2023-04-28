import Sidebar from '../components/sidebar/Sidebar'
import Navbar from '../components/navbar/Navbar'

type Props = {
  children: React.ReactNode
}

export default function layout({ children }: Props) {
  return (
    <div className='w-full min-w-[500px] pl-72'>
      <Navbar />
      <Sidebar />
      <div>{children}</div>
    </div>
  )
}
