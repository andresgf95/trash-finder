import { SlCarousel, SlCarouselItem } from '@shoelace-style/shoelace/dist/react';
import A from "./A.png"
import B from "./1673553091WhatsApp_Image_2023-01-12_at_20_48_09__3_.jpeg"
import C from "./Contenedores-OVAL-fraccion-organica-Santiago-de-Compostela.jpg"
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
        <SlCarouselItem>
          <img className={styles.picture}
            alt="A waterfall in the middle of a forest (by Thomas Kelly on Unsplash)"
            src={C}
          />
        </SlCarouselItem>
        <SlCarouselItem>
          <img className={styles.picture}
            alt="The sun is setting over a lavender field (by Leonard Cotte on Unsplash)"
            src={A}
          />
        </SlCarouselItem>
        <SlCarouselItem>
          <img className={styles.picture}
            alt="A field of grass with the sun setting in the background (by Sapan Patel on Unsplash)"
            src={A}
          />
        </SlCarouselItem>
        <SlCarouselItem>
          <img className={styles.picture}
            alt="A scenic view of a mountain with clouds rolling in (by V2osk on Unsplash)"
            src={A}
          />
        </SlCarouselItem>
        </SlCarousel>
      </div>
    )
}