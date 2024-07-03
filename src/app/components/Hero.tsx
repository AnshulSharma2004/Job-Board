
const Hero = () => {
  return (
    <section className={'my-12 container'}>
        <h1 className={'text-center font-bold text-4xl'}>Find your next <br /> dream job</h1>
        {/*<p className={'text-center text-gray-600'}>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>*/}

        <form className={'flex gap-2 mt-4 mx-auto max-w-md'}>
            <input
                type={'search'}
                className={'w-full border border-gray-400 py-2 px-4 rounded-md'}
                placeholder={'Search for a job'}
            />
            <button className={'bg-blue-600 rounded-md text-white py-2 px-4'}>Search</button>
        </form>
    </section>
  )
}

export default Hero
