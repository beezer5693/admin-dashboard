const NewProduct = () => {
  return (
    <div className='min-w-[500px]'>
      <div className='flex w-full flex-col rounded-2xl bg-white p-8 dark:bg-zinc-950/60'>
        <h1 className='text-xl text-black dark:text-gray-200'>
          Add a New Product
        </h1>
        <div className='mt-8 flex flex-col justify-center'>
          <form>
            <div className='mb-3 flex flex-col'>
              <label className='text-sm text-gray-500/80 dark:text-gray-400'>
                Title
              </label>
              <input
                className='mt-1 rounded-lg border p-2.5 outline-none placeholder:text-gray-400 focus:border-2 focus:border-blue-600 dark:border-zinc-950 dark:bg-gray-300/20 dark:text-gray-400 dark:focus:border-blue-600'
                type='text'
                placeholder='Apple iPhone 12 Pro Max'
              />
            </div>
            <div className='mb-3 flex flex-col'>
              <label className='text-sm text-gray-500/80 dark:text-gray-400'>
                Description
              </label>
              <textarea
                className='mt-1 rounded-lg border p-2.5 outline-none placeholder:text-gray-400 focus:border-2 focus:border-blue-600 dark:border-zinc-950 dark:bg-gray-300/20 dark:text-gray-400 dark:focus:border-blue-600'
                placeholder='Description...'
              />
            </div>
            <div className='mb-3 flex flex-col'>
              <label className='text-sm text-gray-500/80 dark:text-gray-400'>
                Category
              </label>
              <input
                className='mt-1 rounded-lg border p-2.5 outline-none placeholder:text-gray-400 focus:border-2 focus:border-blue-600 dark:border-zinc-950 dark:bg-gray-300/20 dark:text-gray-400 dark:focus:border-blue-600'
                type='text'
                placeholder='Computers'
              />
            </div>
            <div className='mb-3 flex flex-col'>
              <label className='text-sm text-gray-500/80 dark:text-gray-400'>
                Price
              </label>
              <input
                className='mt-1 rounded-lg border p-2.5 outline-none placeholder:text-gray-400 focus:border-2 focus:border-blue-600 dark:border-zinc-950 dark:bg-gray-300/20 dark:text-gray-400 dark:focus:border-blue-600'
                type='text'
                placeholder='0.00'
              />
            </div>
            <div className='mb-6 flex flex-col'>
              <label className='text-sm text-gray-500/80 dark:text-gray-400'>
                Stock
              </label>
              <input
                className='mt-1 rounded-lg border p-2.5 outline-none placeholder:text-gray-400 focus:border-2 focus:border-blue-600 dark:border-zinc-950 dark:bg-gray-300/20 dark:text-gray-400 dark:focus:border-blue-600'
                type='text'
                placeholder='In Stock'
              />
            </div>
            <button
              type='submit'
              className='w-full rounded-lg bg-blue-600 p-2.5 text-gray-100 transition duration-300 ease-in-out hover:bg-blue-600/80'
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
export default NewProduct
