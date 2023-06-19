import { SlCarousel, SlCarouselItem } from '@shoelace-style/shoelace/dist/react';
import B from "./1673553091WhatsApp_Image_2023-01-12_at_20_48_09__3_.jpeg"
import styles from "./Gallery.module.css"

export default function Gallery () {


    return(
      <div className={styles.containerGallery}>
        <SlCarousel className={styles.carousel} navigation loop mouseDragging={true}>
        <SlCarouselItem>
          <img className={styles.picture}
            alt="The sun shines on the mountains and trees (by Adam Kool on Unsplash)"
            src={B}
          />
        </SlCarouselItem>
        </SlCarousel>
      </div>
    )
}