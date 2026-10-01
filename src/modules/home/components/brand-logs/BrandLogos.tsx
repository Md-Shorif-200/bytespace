import Image from "next/image";
import Container from "@/components/common/Container";

const logo_1 = "/image/brand-logos/logoipsum-1.svg";
const logo_2 = "/image/brand-logos/logoipsum-2.png";
const logo_3 = "/image/brand-logos/logoipsum-3.svg";
const logo_4 = "/image/brand-logos/logoipsum-4.svg";
const logo_5 = "/image/brand-logos/logoipsum-5.svg";

const logos = [logo_1, logo_2, logo_3, logo_4, logo_5];

const BrandLogos = () => {
  return (
    <section className="bg-[#F5F5F6] w-full h-[202px]  min-[450px]:h-[180px] md:h-[100px] lg:h-[150px] xl:h-[202px] mx-auto flex items-center lg:justify-center">
      <Container>
        <div className="grid grid-cols-2 min-[450px]:grid-cols-3 md:grid-cols-5  gap-6">
          {logos.map((logo) => (
            <div
              key={logo}
              className="flex h-[41px] lg:w-[167px] items-center justify-center gap-2 text-[#82868E]"
            >
              <Image
                src={logo}
                alt="Brand logo"
                width={40}
                height={40}
                className="h-[30px] w-[30px] sm:h-[40px] sm:w-[40px] md:h-[30px] md:w-[30px] lg:h-[40px] lg:w-[40px]"
              />
              <span className="font-satoshi text-[14px] font-bold">
                Logoipsum
              </span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default BrandLogos;
