import Image from "next/image";

interface GalleryPropType {
    image: string;
    tittle: string;
}

export default function GalleryProp({ image, tittle }: GalleryPropType) {
    return (
        <div className="p-2 sm:p-4">
            <div className="border-[6px] border-white overflow-hidden ">
                <Image
                    src={image}
                    alt={tittle}
                    width={500}
                    height={500}
                    className="w-full h-auto object-cover"
                />
                
            </div>
        </div>
    );
}
