import Image from 'next/image'

export default function Home() {
  return (
    <main>
      <div>
        <div className='absolute inset-x-0 top-20 -z-10 transform-gpu blur-3xl overflow-hidden' aria-hidden="true">
          <div 
          className='relative left-[calc(50%-11rem)] sm:left-[calc(50%-30rem)] aspect-[1155/670] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 w-[36.125rem] sm:w-[72.1875rem] -translate-x-1/2 rotate-[30deg]'
          style={{
            clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
          }}
          />
        </div>

          <div className='py-12 sm:py-20 lg:pb-40'>
            <div className='mx-auto max-w-7xl px-6 lg:px-8'>
            <div className='mx-auto max-w-2xl text-center'>
              <h1 className='text-4xl sm:text-6xl tracking-tight font-bold'>
                Chat with Anyone, anywhere!
              </h1>
              <p className='mt-6 text-muted-foreground text-lg'>You speak your language, they speak their language, <span className='text-indigo-600 dark:text-indigo-400'>let AI handle the translation.</span></p>
              </div>
            </div>
          </div>

          <Image src={""} alt='' fill />

      </div>
    </main>
  )
}
