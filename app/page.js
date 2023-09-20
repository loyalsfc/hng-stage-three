import ImageGrid from '@/components/draggable/images'
import UploadGallery from '@/components/image-grid/image-grid'
import Image from 'next/image'

export default function Home() {
  return (
    <main className='px-4'>
      <h2>Rubber Band</h2>
      <UploadGallery />
    </main>
  )
}
