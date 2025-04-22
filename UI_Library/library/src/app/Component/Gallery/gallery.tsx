import GalleryProp from "./galleryprop";

export default function Gallery() {
    const galleryData = [
        [
            { image: "/iran.jpg", tittle: "iraq" },
            { image: "/aryan.jpg", tittle: "Aryan" },
            { image: "/syria.jpg", tittle: "Syria" },
        ],
        [
            { image: "/indus.jpg", tittle: "indus" },
            { image: "/spain.jpg", tittle: "spain" },
            { image: "/iraq.jpg", tittle: "iraq" },
        ],
        [
            { image: "/iraq.jpg", tittle: "iraq" },
            { image: "/syria.jpg", tittle: "Syria" },
            { image: "/gilgit.jpg", tittle: "Gilgit" },
        ],
        [
            { image: "/Africa.jpg", tittle: "Africa" },
            { image: "/iraq.jpg", tittle: "iraq" },
            { image: "/syria.jpg", tittle: "Syria" },
        ],
    ];

    return (
        <div className="max-w-[1370px] min-w-[280px]  md:p-20 bg-red-700">
            {/* Gallery grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 md:gap-3">
                {galleryData.map((column, columnIndex) => (
                    <div key={columnIndex} className="flex flex-col md:gap-3">
                        {column.map((item, itemIndex) => (
                            <div
                                key={itemIndex}
                                className="flex justify-center items-center w-full h-full p-3 rounded-lg  transform transition-all duration-500 animate-slideIn"
                                style={{
                                    animationDelay: `${0.2 * itemIndex}s`,
                                }}
                            >
                                <GalleryProp image={item.image} tittle={item.tittle} />
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
}
