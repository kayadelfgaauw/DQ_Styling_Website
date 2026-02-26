import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const GallerySection = ({ images, sectionNumber }) => {
    const sectionRef = useRef(null);

    useGSAP(() => {
        const items = sectionRef.current.querySelectorAll('.gallery-image-container');

        items.forEach((img, index) => {
            gsap.fromTo(img,
                {
                    opacity: 0,
                    y: 50,
                    scale: 0.95
                },
                {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    duration: 1.2,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: img,
                        start: "top 85%",
                        toggleActions: "play none none none"
                    },
                    delay: index * 0.1
                }
            );
        });

    }, { dependencies: [images], scope: sectionRef });

    // Determine layout based on positions
    const positions = images.map(img => img.position);

    const isFullWidth = positions.includes('Centraal / Volledig');
    const isDiptych = images.length === 2 && !isFullWidth;
    const isTriptych = images.length === 3;
    const hasGroot = positions.some(p => p.includes('Groot'));

    const renderLayout = () => {
        if (isFullWidth) {
            const { customAspect, customMaxWidth } = images[0];
            return (
                <div className="w-full flex justify-center">
                    <div className={`gallery-image-container overflow-hidden rounded-[3rem] lg:rounded-[5rem] clay-shadow w-full ${customMaxWidth || 'max-w-5xl'} mx-auto ${customAspect ? customAspect : 'aspect-[4/5] md:aspect-[3/4] lg:aspect-[4/5]'} ${customAspect ? 'max-h-none h-auto' : 'max-h-[85vh]'}`}>
                        <img
                            src={images[0].src}
                            alt={images[0].alt}
                            className={`w-full h-full object-cover hover:scale-105 transition-transform duration-1000 ${images[0].rotate || ''}`}
                        />
                    </div>
                </div>
            );
        }

        if (hasGroot) {
            const grootImages = images.filter(img => img.position.includes('Groot'));
            const smallImages = images.filter(img => !img.position.includes('Groot'));

            // If all images are 'Groot', render a balanced triptych (common in Des Pots)
            if (grootImages.length === 3) {
                return (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10">
                        {images.map((img, idx) => (
                            <div key={idx} className="gallery-image-container overflow-hidden rounded-[2.5rem] lg:rounded-[3.5rem] clay-shadow aspect-square md:aspect-[4/5]">
                                <img
                                    src={img.src}
                                    alt={img.alt}
                                    className={`w-full h-full object-cover hover:scale-105 transition-transform duration-1000 ${img.rotate || ''}`}
                                />
                            </div>
                        ))}
                    </div>
                );
            }

            const grootImg = grootImages[0];
            const isGrootLeft = grootImg.position.includes('Links');
            const isGrootMidden = grootImg.position.includes('Midden');

            if (isGrootMidden && isTriptych) {
                return (
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12 items-center">
                        <div className="md:col-span-3 gallery-image-container overflow-hidden rounded-[2.5rem] lg:rounded-[3.5rem] clay-shadow aspect-square md:aspect-[4/5] md:mt-24">
                            <img src={smallImages[0].src} alt={smallImages[0].alt} className={`w-full h-full object-cover ${smallImages[0].rotate || ''}`} />
                        </div>
                        <div className="md:col-span-6 gallery-image-container overflow-hidden rounded-[3rem] lg:rounded-[4rem] clay-shadow aspect-[4/5] md:aspect-square">
                            <img src={grootImg.src} alt={grootImg.alt} className={`w-full h-full object-cover ${grootImg.rotate || ''}`} />
                        </div>
                        <div className="md:col-span-3 gallery-image-container overflow-hidden rounded-[2.5rem] lg:rounded-[3.5rem] clay-shadow aspect-square md:aspect-[4/5] md:mt-24">
                            <img src={smallImages[1].src} alt={smallImages[1].alt} className={`w-full h-full object-cover ${smallImages[1].rotate || ''}`} />
                        </div>
                    </div>
                );
            }

            return (
                <div className={`grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-20 items-center ${isGrootLeft ? '' : 'md:flex-row-reverse'}`}>
                    <div className={`md:col-span-6 gallery-image-container overflow-hidden rounded-[3rem] lg:rounded-[4rem] clay-shadow aspect-[4/5] md:aspect-[3/4.8] lg:aspect-[3/4.2] ${isGrootLeft ? 'md:order-1' : 'md:col-start-7 md:col-span-6'}`}>
                        <img
                            src={grootImg.src}
                            alt={grootImg.alt}
                            className={`w-full h-full object-cover hover:scale-105 transition-transform duration-1000 ${grootImg.rotate || ''}`}
                        />
                    </div>
                    <div className={`md:col-span-6 flex flex-col gap-8 md:gap-16 ${isGrootLeft ? 'md:order-2' : 'md:col-start-1 md:col-span-6 md:row-start-1'}`}>
                        {smallImages.map((img, idx) => (
                            <div key={idx} className="gallery-image-container overflow-hidden rounded-[2.5rem] lg:rounded-[3.5rem] clay-shadow aspect-square md:aspect-[1.2/1]">
                                <img
                                    src={img.src}
                                    alt={img.alt}
                                    className={`w-full h-full object-cover hover:scale-105 transition-transform duration-1000 ${img.rotate || ''}`}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            );
        }

        if (isTriptych) {
            return (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10">
                    {images.map((img, idx) => (
                        <div key={idx} className={`gallery-image-container overflow-hidden rounded-[2.5rem] lg:rounded-[3.5rem] clay-shadow aspect-[4/5] ${idx === 1 ? 'md:mt-24' : ''}`}>
                            <img
                                src={img.src}
                                alt={img.alt}
                                className={`w-full h-full object-cover hover:scale-105 transition-transform duration-1000 ${img.rotate || ''}`}
                            />
                        </div>
                    ))}
                </div>
            );
        }

        if (isDiptych) {
            return (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">
                    {images.map((img, idx) => (
                        <div key={idx} className={`gallery-image-container overflow-hidden rounded-[3rem] lg:rounded-[4rem] clay-shadow aspect-square md:aspect-[4/5] ${idx === 1 ? 'md:mt-24' : ''}`}>
                            <img
                                src={img.src}
                                alt={img.alt}
                                className={`w-full h-full object-cover hover:scale-105 transition-transform duration-1000 ${img.rotate || ''}`}
                            />
                        </div>
                    ))}
                </div>
            );
        }

        return (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {images.map((img, idx) => (
                    <div key={idx} className="gallery-image-container overflow-hidden rounded-[2.5rem] clay-shadow aspect-square">
                        <img
                            src={img.src}
                            alt={img.alt}
                            className={`w-full h-full object-cover hover:scale-105 transition-transform duration-1000 ${img.rotate || ''}`}
                        />
                    </div>
                ))}
            </div>
        );
    };

    return (
        <section ref={sectionRef} className="py-12 md:py-24 max-w-[90rem] mx-auto px-6">
            {renderLayout()}
        </section>
    );
};

export default GallerySection;
