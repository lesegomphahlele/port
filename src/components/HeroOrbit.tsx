import { PropsWithChildren } from "react"
import { twMerge } from "tailwind-merge";

export const HeroOrbit = ({ children, size, rotation, shouldOrbit = false, shouldSpin = false, spinDuration, orbitDuration }: PropsWithChildren<{ size: number; rotation: number; shouldOrbit?: boolean; shouldSpin?: boolean; spinDuration?: string; orbitDuration?: string; }>) => {
    return (
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 -z-20"> {/* Outer container centered on the screen */}
            <div className={twMerge(shouldOrbit === true && "animate-spin")} style={{
                animationDuration: orbitDuration,
            }}> {/* animate the image while respecting original orbit*/}
                <div className="flex items-start justify-start" style={{
                    transform: `rotate(${rotation}deg)`,
                    height: `${size}px`,
                    width: `${size}px`
                }}> {/* Inner container that handles the orbit in the hero section */}
                    <div className={twMerge(shouldSpin === true && "animate-spin")} style={{
                        animationDuration: spinDuration,
                    }}>
                        <div className="inline-flex" style={{
                            transform: `rotate(${rotation * -1}deg)`
                        }}>  {/* Individual container to handle rotation and animation of the image component */}
                            {children} {/* Image component */}
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
};