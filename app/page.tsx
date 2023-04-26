import Widget from './components/widget/Widget'
import Chart from './components/chart/Chart'
import Featured from './components/featured/Featured'
import Table from './components/table/Table'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Dashboard',
  description: 'Dashboard'
}

export default function Home() {
  return (
    <div className='flex min-w-[500px] flex-col items-center justify-center'>
      <div className='grid w-full min-w-max grid-cols-1 gap-4 lg:grid-cols-2 xl:grid-cols-4'>
        <Widget type='user' />
        <Widget type='order' />
        <Widget type='earning' />
        <Widget type='balance' />
      </div>
      <div className='mt-8 grid w-full grid-cols-1 gap-4 xl:grid-cols-5'>
        <Featured />
        <Chart />
      </div>
      <div className='mt-8 grid w-full grid-cols-1'>
        <Table />
      </div>
    </div>
  )
}
