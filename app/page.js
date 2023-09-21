import ImageGrids from '@/components/dnd-kit/dnd-kit'

export default function Home() {
  return (
    <main className='px-4 md:px-8 min-h-screen'>
      <ImageGrids/>
      <footer className='py-8'>
        <p className='text-center'>© 2023. All rights reserved.</p>
      </footer>
    </main>
  )
}
