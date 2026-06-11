import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

import * as React from "react"

export default function App(){
  return(
  <>
    <div className="flex min-h-screen items-center justify-center p-10 ">
      <div className="w-full max-w-4xl p-4 " >
      <Carousel>
        <CarouselContent className="-ml-4">
          <CarouselItem className="pl-4 basis-full md:basis-1/2 lg:basis-1/2">
            <div className="p-1">
              <img src="https://images.wallpaperscraft.com/image/single/coffee_table_cup_119666_1920x1080.jpg" 
              className="aspect-square w-full object-cover rounded-xl"
              />
            </div>
          </CarouselItem>
          <CarouselItem className="pl-4 basis-full md:basis-1/2 lg:basis-1/2">
            <div className="p-1">
              <img src="https://images.wallpaperscraft.com/image/single/cat_open_inscription_160287_1920x1080.jpg"  
              className="aspect-square w-full object-cover rounded-xl"
              />
            </div>
          </CarouselItem>
          <CarouselItem className="pl-4 basis-full md:basis-1/2 lg:basis-1/2">
            <div className="p-1">
              <img src="https://images.wallpaperscraft.com/image/single/coffee_cappuccino_cup_136699_1920x1080.jpg"
              className="aspect-square w-full object-cover rounded-xl"
              />
            </div>
          </CarouselItem>
        <CarouselItem className="pl-4 basis-full md:basis-1/2 lg:basis-1/2">
            <div className="p-1">
              <img src="https://images.wallpaperscraft.com/image/single/cup_coffee_books_156306_1920x1080.jpg"  
              className="aspect-square w-full object-cover rounded-xl"
              />
            </div>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      </div>
    </div>



  </>
  );
}
