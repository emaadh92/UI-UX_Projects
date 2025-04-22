
import { ComponentType } from 'react';

interface ServicesProps {
    Icons: ComponentType<{ className?: string }>;
    tittle: string;
    description: string;
}

function Services({ Icons, tittle, description }: ServicesProps) {
    return (
        <main>
            <div>
                <div className="border-2 border-green-500 p-2">
                    <div>
                        <Icons className="h-12 w-24 text-green-600" />
                    </div>
                    <div>
                        <p className="font-semibold">{tittle}</p>
                        <p>{description}</p>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Services;

