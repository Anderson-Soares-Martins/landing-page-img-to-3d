import { AuroraBackground } from "@/components/ui/aurora-background";
import { Compare } from "@/components/ui/compare";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { Vortex } from "@/components/ui/vortex";
import image1 from "@/assets/imagem1.png";
import image2 from "@/assets/imagem2.png";
import Image from "next/image";
import logo from "@/assets/logo.png";

export default function Home() {
  const testimonials = [
    {
      quote:
        "This tool has completely transformed our design process. The 3D models are so realistic!",
      name: "Alex Turner",
      title: "Lead Designer, Creative Studio"
    },
    {
      quote:
        "Amazing! Now I can convert images to 3D models with just a few clicks. It's a game changer.",
      name: "Sarah Collins",
      title: "Product Manager, Fashion Brand"
    },
    {
      quote:
        "The best image-to-3D conversion platform I’ve used. Fast and easy to work with!",
      name: "David White",
      title: "Freelance 3D Artist"
    }
  ];

  return (
    <AuroraBackground>
      <div className="w-full flex-1 mt-[60px] z-10">
        {/* Hero Section */}
        <section className="min-h-screen flex flex-col justify-center items-center text-center text-white px-6">
          <h1 className="text-4xl md:text-6xl font-bold">
            Transform Your Images Into 3D Models
          </h1>
          <p className="text-lg md:text-xl mt-4 max-w-3xl">
            Our platform uses cutting-edge AI technology to convert your 2D
            images into high-quality 3D models. Easy, fast, and precise.
          </p>
          <button className="mt-8 px-6 py-3 bg-white text-blue-600 text-lg rounded-md hover:bg-gray-100 transition-all">
            Get Started for Free
          </button>

          <Compare
            autoplay
            firstImage={image1.src}
            secondImage={image2.src}
            className="mt-12 w-full max-w-xl rounded-lg shadow-2xl opacity-80"
          />
        </section>

        {/* Features Section */}
        <section className="py-32 bg-background text-foreground px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
            Why Choose Our 3D Model Converter?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            <div className="bg-background p-6 rounded-lg shadow-sm shadow-foreground text-center">
              <h3 className="text-xl font-semibold">AI-Powered Precision</h3>
              <p className="text-gray-500 mt-4">
                Our AI-driven algorithms ensure that your 3D models are as close
                to reality as possible, with minimal effort on your part.
              </p>
            </div>
            <div className="bg-background p-6 rounded-lg shadow-sm shadow-foreground text-center">
              <h3 className="text-xl font-semibold">Fast Conversion</h3>
              <p className="text-gray-500 mt-4">
                Convert your images into detailed 3D models in just a few
                minutes. Our platform is optimized for speed without sacrificing
                quality.
              </p>
            </div>
            <div className="bg-background p-6 rounded-lg shadow-sm shadow-foreground text-center">
              <h3 className="text-xl font-semibold">Easy to Use</h3>
              <p className="text-gray-500 mt-4">
                No prior 3D modeling experience needed. Our intuitive interface
                allows anyone to create 3D models effortlessly.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative overflow-hidden bg-black text-white text-center py-40">
          <Vortex>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Start Converting Your Images to 3D Today
            </h2>
            <p className="text-lg md:text-xl mb-6">
              Upload an image and see the transformation for yourself.
            </p>
            <button className="px-6 py-3 bg-white text-blue-600 text-lg rounded-md hover:bg-gray-100 transition-all">
              Upload Your Image
            </button>
          </Vortex>
        </section>

        {/* comments Section */}
        <section className="py-16 bg-background text-foreground text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-10">
            What Our Users Are Saying
          </h2>
          <InfiniteMovingCards
            items={testimonials}
            direction="left"
            speed="normal"
            pauseOnHover={true}
            className="mx-10"
          />
        </section>
      </div>
    </AuroraBackground>
  );
}
