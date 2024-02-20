import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-primary-50 bg-dotted-pattern bg-contain py-5 md:py-10">
      <div className="wrapper grid grid-cols-1 gap-5 md:grid-cols-2 2xl:gap-0">
        <div className="flex flex-col justify-center gap-8">
          <h1 className="h1-bold">Learn Skills From People Just Like You!</h1>
          <p className="p-regular-20 md:p-regular-24">
            Seasoned industury veteren aren't the only ones who can teach you
            valuable insight. Take classes from our expert mentors to get the
            roles you want - just like they did.
          </p>
          <Button size="lg" asChild className="button w-full sm:w-fit">
            <Link href="#events">Explore Now</Link>
          </Button>
        </div>

        <Image
          src="/assets/images/hero.png"
          alt="hero image"
          width={1000}
          height={1000}
          className="max-h-[70vh] object-contain object-center 2xl:max-h-[50vh]"
        ></Image>
      </div>
    </section>
  );
}
