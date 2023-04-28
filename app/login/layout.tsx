export default function layout({ children }: { children: React.ReactNode }) {
	return (
		<div className='fixed bottom-0 left-0 right-0 top-0 flex items-start justify-center bg-zinc-900 pt-[400px]'>
			{children}
		</div>
	)
}
