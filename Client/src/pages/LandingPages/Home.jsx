// src/pages/Home.js
import Banner from '../../assets/images/home-banner.png';
import aboutPhoto from '../../assets/images/about-photo.png';
import ElectronicPhoto from '../../assets/images/electronics.png';
import FashionPhoto from '../../assets/images/fashion.png';
import FurniturePhoto from '../../assets/images/furniture.png';
import AutomobilePhoto from '../../assets/images/automobile.png';

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
        <button className='bg-white text-black text-2xl rounded-3xl p-2 px-5'>Shop Now</button>
      </div>

      {/*Categories*/}
      <div className='py-5'>
        <h1 className='text-5xl font-bold pb-10'>Categories</h1> 
        <div className="flex justify-evenly">
            <div className='flex justify-center items-center rounded-full bg-slate-600 w-56 h-56 text-white font-bold'
               style={{
                backgroundImage: `url(${ElectronicPhoto})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}>
            
                <h1 className='text-2xl text-center'>Electronics</h1>
            </div>

            <div className='flex justify-center items-center rounded-full bg-slate-600 w-56 h-56 text-white font-bold'
              style={{
                backgroundImage: `url(${FashionPhoto})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}>
                <h1 className='text-2xl text-center'>Fashion & Accessories</h1>
            </div>

            <div className='flex justify-center items-center rounded-full bg-slate-600 w-56 h-56 text-white font-bold'
              style={{
                backgroundImage: `url(${FurniturePhoto})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}>
                <h1 className='text-2xl text-center'>Home & Furniture</h1>
            </div>

            <div className='flex justify-center items-center rounded-full bg-slate-600 w-56 h-56 text-white font-bold'
              style={{
                backgroundImage: `url(${AutomobilePhoto})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}>
                <h1 className='text-2xl text-center'>Automobile & Motorcycles</h1>
            </div>
        </div>
      </div>

      {/*Featured Products*/}
      <div className='py-5'>
        <h1 className='text-5xl font-bold pb-10'>Featured Products</h1> 
        <div className="flex justify-center space-x-10">

            <div className='flex-col justify-center items-center rounded-3xl bg-white w-96 h-96 border-black border text-black font-bold'>
              <div className='w-full h-3/4 border-b border-black bg-slate-400 rounded-t-3xl'>
                <h1 className='text-center'>photo</h1>
              
              </div>
              <div className='p-4'>
                <h1 className='text-3xl'>Sample Item Name</h1>
                <h5 className='font-normal text-xl'>P 0.00</h5>
              </div>
            </div>

            <div className='flex-col justify-center items-center rounded-3xl bg-white w-96 h-96 border-black border text-black font-bold'>
              <div className='w-full h-3/4 border-b border-black bg-slate-400 rounded-t-3xl'>
                <h1 className='text-center'>photo</h1>
              
              </div>
              <div className='p-4'>
              <h1 className='text-3xl'>Sample Item Name</h1>
              <h5 className='font-normal text-xl'>P 0.00</h5>
              </div>
            </div>


            <div className='flex-col justify-center items-center rounded-3xl bg-white w-96 h-96 border-black border text-black font-bold'>
              <div className='w-full h-3/4 border-b border-black bg-slate-400 rounded-t-3xl'>
                <h1 className='text-center'>photo</h1>
              
              </div>
              <div className='p-4'>
              <h1 className='text-3xl'>Sample Item Name</h1>
              <h5 className='font-normal text-xl'>P 0.00</h5>
              </div>
            </div>

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

            <div className='flex-col justify-center items-center rounded-3xl bg-white w-96 h-96 border-black border text-black font-bold'>
              <div className='w-full h-3/4 border-b border-black bg-slate-400 rounded-t-3xl relative'> 
                <h1 className='text-center'>photo</h1>
                <h3 className='bg-black text-white rounded-xl w-max p-1 px-5 absolute bottom-0 left-0 mb-2 ml-2'> 
                  Downgrade
                </h3>
              
              </div>
              <div className='p-4'>
                <h1 className='text-3xl'>Sample Item Name</h1>
                <div className='flex justify-between'>
                  <h5 className='font-normal text-xl'>Trade Item</h5>
                  <h5 className='font-normal text-xl'>P 0.00</h5>
                </div>
              </div>
            </div>

            <div className='flex-col justify-center items-center rounded-3xl bg-white w-96 h-96 border-black border text-black font-bold'>
            <div className='w-full h-3/4 border-b border-black bg-slate-400 rounded-t-3xl relative'> 
            <h1 className='text-center'>photo</h1>
                <h3 className='bg-black text-white rounded-xl w-max p-1 px-5 absolute bottom-0 left-0 mb-2 ml-2'> 
                  Downgrade
                </h3>
              </div>
              <div className='p-4'>
                <h1 className='text-3xl'>Sample Item Name</h1>
                <div className='flex justify-between'>
                  <h5 className='font-normal text-xl'>Trade Item</h5>
                  <h5 className='font-normal text-xl'>P 0.00</h5>
                </div>
              </div>
            </div>


            <div className='flex-col justify-center items-center rounded-3xl bg-white w-96 h-96 border-black border text-black font-bold'>
              <div className='w-full h-3/4 border-b border-black bg-slate-400 rounded-t-3xl relative'> 
                <h1 className='text-center'>photo</h1>
                <h3 className='bg-black text-white rounded-xl w-max p-1 px-5 absolute bottom-0 left-0 mb-2 ml-2'> 
                  Downgrade
                </h3>
              </div>
              <div className='p-4'>
                <h1 className='text-3xl'>Sample Item Name</h1>
                <div className='flex justify-between'>
                  <h5 className='font-normal text-xl'>Trade Item</h5>
                  <h5 className='font-normal text-xl'>P 0.00</h5>
                </div>
              </div>
            </div>


        </div>
      </div>

      {/*Bidding Zone*/}
      <div className='py-5'>
        <h1 className='text-5xl font-bold pb-10'>Bidding Zone</h1> 
        <div className="flex justify-center space-x-10">

            <div className='flex-col justify-center items-center rounded-3xl bg-white w-96 h-96 border-black border text-black font-bold'>
              <div className='w-full h-3/4 border-b border-black bg-slate-400 rounded-t-3xl relative'> 
                <h1 className='text-center'>photo</h1>
                <h3 className='bg-white text-black rounded-xl w-max p-1 px-5 absolute bottom-0 left-0 mb-2 ml-2'> {/* Positioned absolutely */}
                  1hr 2m 3s left
                </h3>
              
              
              </div>
              <div className='p-4'>
                <h1 className='text-3xl'>Sample Item Name</h1>
                <h5 className='font-normal text-xl'>P 0.00 - 0.00</h5>
              </div>
            </div>

            <div className='flex-col justify-center items-center rounded-3xl bg-white w-96 h-96 border-black border text-black font-bold'>
              <div className='w-full h-3/4 border-b border-black bg-slate-400 rounded-t-3xl relative'> 
                <h1 className='text-center'>photo</h1>
                <h3 className='bg-white text-black rounded-xl w-max p-1 px-5 absolute bottom-0 left-0 mb-2 ml-2'> {/* Positioned absolutely */}
                  1hr 2m 3s left
                </h3>
              
              
              </div>
              <div className='p-4'>
                <h1 className='text-3xl'>Sample Item Name</h1>
                <h5 className='font-normal text-xl'>P 0.00 - 0.00</h5>
              </div>
            </div>

            <div className='flex-col justify-center items-center rounded-3xl bg-white w-96 h-96 border-black border text-black font-bold'>
              <div className='w-full h-3/4 border-b border-black bg-slate-400 rounded-t-3xl relative'> 
                <h1 className='text-center'>photo</h1>
                <h3 className='bg-white text-black rounded-xl w-max p-1 px-5 absolute bottom-0 left-0 mb-2 ml-2'> {/* Positioned absolutely */}
                  1hr 2m 3s left
                </h3>
              
              
              </div>
              <div className='p-4'>
                <h1 className='text-3xl'>Sample Item Name</h1>
                <h5 className='font-normal text-xl'>P 0.00 - 0.00</h5>
              </div>
            </div>

        </div>
      </div>

      
      {/*Trade Events*/}
      <div className="flex justify-center space-x-10 py-5">

        <div className='flex-col justify-center items-center rounded-3xl bg-black w-96 h-96 border-black border text-white font-bold p-5 py-12 relative'>
            <h1 className='font-bold text-4xl'>Trade Events</h1>
            <p className='font-normal text-xl pl-1'>Save your spot!</p>
            <h3 className='bg-white text-black rounded-3xl text-2xl w-max p-3 px-8 absolute bottom-12 left-4 mb-2 ml-2'> 
              Register Now!
            </h3>        
        </div>

      
        <div className='flex-col justify-center items-center rounded-3xl bg-slate-400 w-96 h-96 border-black border text-white font-bold p-5 py-12 relative'>
          <h1 className='font-bold text-4xl mb-6'>Event Name</h1> 
          
       
          <div className='absolute bottom-12 left-4'>
            <h3 className='text-white font-normal text-2xl w-max px-8'>
              Sample Location
            </h3>    
            <h3 className='text-white font-normal text-2xl w-max px-8'>
              September 14, 2024
            </h3>  
            <h3 className='text-white font-normal text-2xl w-max  px-8'>
              10:00 am
            </h3>      
          </div>
        </div>


        <div className='flex-col justify-center items-center rounded-3xl bg-slate-400 w-96 h-96 border-black border text-white font-bold p-5 py-12 relative'>
          <h1 className='font-bold text-4xl mb-6'>Event Name</h1>
          
       
          <div className='absolute bottom-12 left-4'>
            <h3 className='text-white font-normal text-2xl w-max px-8'>
              Sample Location
            </h3>    
            <h3 className='text-white font-normal text-2xl w-max px-8'>
              September 14, 2024
            </h3>  
            <h3 className='text-white font-normal text-2xl w-max  px-8'>
              10:00 am
            </h3>      
          </div>
        </div>
      </div>
      

 
    </div>
  );
};

export default Home;
