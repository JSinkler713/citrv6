import { expect, test } from '@jest/globals'
import { render } from '@testing-library/react'
import Carousel from '../Carousel'

test('lets users click on thumbnails to make them the hero', async ()=> {
  const images = ["1.jpg", "2.jpg", "3.jpg"]
  const carousel = render(
      <Carousel images={images}/>);

  // hero is first image by default
  const hero = await carousel.findByTestId("hero")
  expect(hero.src).toContain(images[0])

  // loop through and click on each image
  for (let i=0; i<images.length; i++) {
    const image = images[i]

    const thumb = await carousel.findByTestId(`thumbnail${i}`)
    // as we click new image,
    thumb.click()

    // hero changes to image
    expect(hero.src).toContain(image)
    expect(thumb.classList).toContain('active')
  }
})

