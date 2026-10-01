import Container from "@/components/common/Container";
import Image from "next/image";
import { reviews } from "../../data/client-reviews.data";



// lime on the top and right, soft purple on the bottom left
const backgroundGradient = [
  "radial-gradient(ellipse 58% 80% at 0% 98%, rgba(118, 142, 225, 0.44) 0%, rgba(118, 142, 225, 0) 100%)",
  "radial-gradient(ellipse 72% 67% at 130% 41%, rgba(212, 251, 32, 0.63) 0%, rgba(212, 251, 32, 0) 100%)",
  "radial-gradient(ellipse 21% 34% at 51% 22%, rgba(212, 251, 32, 0.52) 0%, rgba(212, 251, 32, 0) 100%)",
].join(", ");

const ClientsReview = () => {
  return (
    <section
      className="py-16 lg:py-24"
      style={{
        backgroundColor: "#ffffff",
        backgroundImage: backgroundGradient,
        backgroundRepeat: "no-repeat",
      }}
    >
      <Container>
        {/* title and short text */}
        <div className="grid items-end gap-8 lg:grid-cols-2 lg:gap-11">
          <h2 className="heading_m text-dark">
            Discover What Our <br /> Community Is Saying
          </h2>

          <p className="body_l text-[#4F4F4F]">
            At ByteSpace, our vibrant community of learners and creators is at
            the heart of what we do. Hear directly from those who have
            experienced the transformative journey of learning and creating on
            our platform. Explore testimonials that reflect the diverse
            perspectives of enthusiastic learners and accomplished creators.
          </p>
        </div>

        {/* review cards */}
        <div className="mt-12 grid gap-6 lg:gap-10 md:grid-cols-2 lg:mt-16 lg:grid-cols-3">
          {reviews.map((review) => (
            <div key={review.id} className="rounded-[24px] bg-white p-6">
              <Image
                src={review.image}
                alt={review.name}
                width={80}
                height={80}
                className="h-20 w-20 rounded-full object-cover"
              />

              <h3 className="mt-5 heading_xs text-[#000000]">
                {review.name}
              </h3>

              <p className="mt-1 body_l text-accent">
                {review.role}
              </p>

              <p className="mt-4 body_l text-[#4F4F4F]">
                &quot;{review.text}&quot;
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default ClientsReview;
