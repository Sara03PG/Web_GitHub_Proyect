import Image from 'next/image';
export default function Page() {
    return (
        <div className="text-center pt-12">
            <h1 className="text-3xl capitalize font-bold mb-4">
                 ~ About me ~ 
            </h1>
            
            <div className="max-w-2xl mx-auto px-4">
                <p className="text-lg mb-8">
                    Hi there! I am an artist trying to survive being an engineer! :D 
                </p>
            </div>
            
            <div className="flex justify-center mb-8">
                <Image 
                    src="/Umbrella_01.jpg"
                    alt="Profile picture"
                    width={597}
                    height={569}
                    className="rounded-full object-cover"
                />
            </div>

                <div className="max-w-2xl mx-auto px-4">
                    <p className="text-lg mb-6 text-justify">
                        My name is Sara! A girl in her 20's trying to survive university and life (send help).
                        I am still a noob in a lot of things yet I wanna keep improving even just a bit.
                    </p>
                </div>

                    <div className="space-y-4 text-left">
                        <div className="border-l-4 border-blue-400 pl-4">
                            <h3 className="font-bold text-lg">What I like!</h3>
                            <p className="text-gray-600">Anime, manga, animation and playing videogames</p>
                        </div>
                    
                        <div className="border-l-4 border-indigo-200 pl-4">
                            <h3 className="font-bold text-lg">Current proyecto</h3>
                            <p className="text-gray-600">Pumpking Paradox,  Secret Proyect - Fantasy</p>
                        </div>
                </div>
            </div>
    );
}