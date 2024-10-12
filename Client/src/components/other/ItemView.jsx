import { useNavigate, useParams } from "react-router-dom";
import FeaturedCard from "./FeaturedCard";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import BackIcon from '../../assets/icons/back.png';

const ItemView = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [selectedItem, setSelectedItem] = useState([]);

    const FeaturedCardsData = [
        { id: 1, name: "Sample Item 1", price: "P 100.00", sellerName: 'Seller Name', details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...', imageUrl: "https://via.placeholder.com/400x300" },
        { id: 2, name: "Sample Item 2", price: "P 200.00", sellerName: 'Seller Name', details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...', imageUrl: "https://via.placeholder.com/400x300" },
        { id: 3, name: "Sample Item 3", price: "P 350.00", sellerName: 'Seller Name', details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...', imageUrl: "https://via.placeholder.com/400x300" },
    ];

    useEffect(() => {
        // Scroll to the top of the page
        window.scrollTo(0, 0);

        // Find the item in FeaturedCardsData based on the id from the URL
        const foundItem = FeaturedCardsData.find(item => item.id === parseInt(id));
        setSelectedItem(foundItem);
    }, [id]); // Run effect whenever id changes

    const onhandleBack =() => {
        navigate(-1)
    
    }

    return (
        <div>
            <button onClick={onhandleBack} className=" flex items-center py-3 focus:outline-none" type="button">
                <img src={BackIcon} alt="Search" className="w-4 h-4 mt-1 cursor-pointer" />
                <h1 className="text-lg pl-1">Back</h1>      
            </button>
          
            <div className='flex'>
                {selectedItem && (
                    <>
                       
                        <img
                            src={selectedItem.imageUrl}
                            alt={`Image for ${selectedItem.name}`}
                            className="w-1/2 h-auto rounded-md"
                        />
                        <div className="p-5 pt-10 w-1/2">
                            <div className="flex justify-between w-full">
                                <div>
                                    <h1 className="text-4xl font-bold">{selectedItem.name}</h1>
                                    <h1 className="text-2xl">{selectedItem.sellerName}</h1>
                                </div>
                                <h1 className="text-4xl font-bold">{selectedItem.price}</h1>
                            </div>

                            <div className="flex justify-between w-full mt-12">
                                <h1 className="text-2xl">Quantity</h1>
                                <h1 className="text-xl">- 01 +</h1>
                            </div>

                            <div className="flex justify-between w-full mt-6 h-14">
                                <p className="text-lg text-justify">{selectedItem.details}</p>
                            </div>

                            <div className="flex flex-col w-full mt-32 space-y-3">
                                <Button rounded="lg" className="text-lg py-2">Checkout</Button>
                                <Button rounded="lg" className="text-lg py-2" variant="secondary">Add to Cart</Button>
                            </div>
                        </div>
                    </>
                )}
            </div>
            <div>
                <FeaturedCard cardsData={FeaturedCardsData} type='Featured Products' title='SIMILAR PRODUCTS' />
            </div>
        </div>
    );
}

export default ItemView;
