// src/pages/Home.js
import Banner from '../../assets/images/home-banner.png';
import aboutPhoto from '../../assets/images/about-photo.png';
import ElectronicPhoto from '../../assets/images/electronics.png';
import FashionPhoto from '../../assets/images/fashion.png';
import FurniturePhoto from '../../assets/images/furniture.png';
import AutomobilePhoto from '../../assets/images/automobile.png';
import HealthPhoto from '../../assets/images/health.png';
import BabyPhoto from '../../assets/images/baby.png';
import PetPhoto from '../../assets/images/pet.png';
import ArtPhoto from '../../assets/images/art.png';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

import {
  Card,
  CardContent,
  CardFooter,
} from "@/components/ui/card"

import { Button } from '@/components/ui/button';

const cardsData = [
  { id: 1, name: "Sample Item 1", price: "P 100.00", imageUrl: "https://via.placeholder.com/400x300" },
  { id: 2, name: "Sample Item 2", price: "P 200.00", imageUrl: "https://via.placeholder.com/400x300" },
  { id: 3, name: "Sample Item 3", price: "P 300.00", imageUrl: "https://via.placeholder.com/400x300" },
];

const cardEventsData = [
  { id: 1, name: "Event Name 1", location: "Sample Location", date: 'September 14, 2024', time: '10:00 am', imageUrl: "https://via.placeholder.com/400x400" },
  { id: 1, name: "Event Name 2", location: "Sample Location", date: 'September 14, 2024', time: '10:00 am', imageUrl: "https://via.placeholder.com/400x400" },

];

const categories = [
  {title: "Electronics", image: ElectronicPhoto},
  {title: "Fashion & Accessories", image: FashionPhoto},
  {title: "Home & Furniture", image: FurniturePhoto},
  {title: "Automobile & Motorcycles", image: AutomobilePhoto},
  {title: "Health & Beauty", image: HealthPhoto},
  {title: "Baby & Kids", image: BabyPhoto},
  {title: "Pet Supplies", image: PetPhoto},
  {title: "Art & Collectibles", image: ArtPhoto},
];

const Home = () => {
  
  return (
    <div>
      <div
          className="cursor-pointer w-full h-96 rounded-3xl text-white p-14 py-10" 
          style={{
              backgroundImage: `url(${Banner})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
          }}
      >
        <h1 className='font-bold text-5xl w-1/2 mt-10 mb-5'>&quot; Unlock the Best Deals -
        Trade, Buy, and Sell with Confidence!&quot;</h1>
        <Button className='bg-white text-black text-xl rounded-3xl py-3 px-5'>Shop Now</Button>
      </div>

      <Carousel className="my-10 mx-5 " opts={{align: 'start',loop: true}}>
        <CarouselContent className="ml-2">
          {categories.map((category, index) => (
            <CarouselItem key={index} className="pl-1 md:basis-1/2 lg:basis-1/4">
              <div
                className="p-1 flex items-center justify-center rounded-full bg-slate-600 w-56 h-56 text-white font-bold"
                style={{
                  backgroundImage: `url(${category.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              >
                <h1 className="text-2xl text-center">{category.title}</h1>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>

      {/*Featured Products*/}
      <div className='py-5'>
        <h1 className='text-5xl font-bold pb-10'>Featured Products</h1> 
        <div className="flex justify-center space-x-10">
        {cardsData.map(card => (
          <Card key={card.id}>
            <CardContent>
              <img 
                  src={card.imageUrl}
                  alt={`Image for ${card.name}`}
                  className="w-full h-auto rounded-md" // Use h-auto for responsive height
              />
            </CardContent>
            <CardFooter>
              <h1 className='text-3xl'>{card.name}</h1>
              <h5 className='font-normal text-xl'>{card.price}</h5>
            </CardFooter>
          </Card>
        ))}
        </div>
      </div>
   
    {/* About Section */}
    <div className='bg-black text-white p-14 flex w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]'> 
      <div className='w-full max-w-7xl mx-auto flex'>
        <div className='w-1/2 p-10 pr-12'>
          <h1 className='font-bold text-4xl mb-5'>About Company</h1>
          <p className='text-xl mb-10'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          </p>
          <button className='text-black bg-white rounded-3xl p-3 px-8'>Learn More</button>
        </div>
        <div className='w-1/2 h-80 bg-slate-400'  
            style={{
                  backgroundImage: `url(${aboutPhoto})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
              }}>
        </div>
      </div>
    </div>

    {/*Trade Deals*/}
    <div className='py-5'>
        <h1 className='text-5xl font-bold pb-10'>Trade Deals</h1> 
        <div className="flex justify-center space-x-10">
        {cardsData.map(card => (
          <Card key={card.id}>
            <CardContent className="relative">
              <img 
                  src={card.imageUrl}
                  alt={`Image for ${card.name}`}
                  className="w-full h-auto rounded-md" // Use h-auto for responsive height
              />
              <h3 className='bg-black text-white rounded-xl w-max p-1 px-5 absolute bottom-0 left-0 mb-2 ml-2'> 
                  Downgrade
                </h3>
            </CardContent>
            <CardFooter>
              <h1 className='text-3xl'>{card.name}</h1>
              <div className='flex justify-between'>
                <h5 className='font-normal text-xl'>Trade Item</h5>
                <h5 className='font-normal text-xl'>{card.price}</h5>
              </div>
            
            </CardFooter>
          </Card>
        ))}
        </div>
      </div>

      {/*Bidding Zone*/}
      <div className='py-5'>
        <h1 className='text-5xl font-bold pb-10'>Bidding Zone</h1> 
        <div className="flex justify-center space-x-10">
        {cardsData.map(card => (
          <Card key={card.id}>
            <CardContent className="relative">
              <img 
                  src={card.imageUrl}
                  alt={`Image for ${card.name}`}
                  className="w-full h-auto rounded-md" // Use h-auto for responsive height
              />
               <h3 className='bg-white text-black rounded-xl w-max p-1 px-5 absolute bottom-0 left-0 mb-2 ml-2'> {/* Positioned absolutely */}
                  1hr 2m 3s left
                </h3>

            </CardContent>
            <CardFooter>
              <h1 className='text-3xl'>{card.name}</h1>
              <div className='flex justify-between'>
                <h5 className='font-normal text-xl'>Trade Item</h5>
                <h5 className='font-normal text-xl'>P 0.00 - 0.00</h5>
                </div>
            
            </CardFooter>
          </Card>
        ))}
        </div>
      </div>

      
      {/*Trade Events*/}
      <div className="flex justify-center space-x-10 py-5">

        <div className='flex-col justify-center items-center rounded-3xl bg-black w-96 h-96 border-black border text-white font-bold p-5 py-12 relative'>
            <h1 className='font-bold text-4xl'>Trade Events</h1>
            <p className='font-normal text-xl pl-1'>Save your spot!</p>
            <Button variant='secondary' rounded='lg' className='text-2xl w-max p-3 px-8 absolute bottom-12 left-4 mb-2 ml-2'> 
              Register Now!
            </Button>        
        </div>

      
      
        {cardEventsData.map(card => (
          <Card key={card.id}>
            <CardContent className="relative ">
            <h1 className='absolute top-0 pt-5 pl-5 font-bold text-4xl mb-6'>{card.name}</h1>
              <img 
                  src={card.imageUrl}
                  alt={`Image for ${card.name}`}
                  className="w-full h-auto rounded-md" // Use h-auto for responsive height
              />
              <div className='absolute bottom-12 left-4'>
                <h3 className='text-white font-normal text-2xl w-max px-8'>
                  {card.location}
                </h3>    
                <h3 className='text-white font-normal text-2xl w-max px-8'>
                  {card.date}
                </h3>  
                <h3 className='text-white font-normal text-2xl w-max  px-8'>
                  {card.time}
                </h3>      
              </div>
            </CardContent>     
          </Card>
        ))}
      

      </div>
      

 
    </div>
  );
};

export default Home;
