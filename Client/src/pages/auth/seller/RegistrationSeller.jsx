import { Button } from "@/components/ui/button";

const RegisterSeller = () => {

    return(
        <div className="flex justify-center items-center w-screen h-screen">
            <div className="bg-gray-200 w-1/2 h-[500px] rounded-3xl border border-black p-10 flex flex-col items-center justify-center space-y-5 ">
                <h1 className="font-bold text-4xl">Welcome to Tara Auct!</h1>
                <p>to get started sign-up as a seller by completing necessary details</p>
                <Button className="px-14">Start Registration</Button>
            </div>
        </div>
        
    )
}

export default RegisterSeller;