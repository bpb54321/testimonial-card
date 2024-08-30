import profileImgUrl from "../assets/profile-thumbnail.png";

interface TestimonialCardProps {
  quote: string;
  name: string;
  handle: string;
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({
  quote,
  name,
  handle,
}) => {
  return (
    <div
      className="bg-white p-6 rounded-lg w-[340px] flex flex-col gap-4 shadow"
      data-testid="testimonial-card"
    >
      <div className="flex gap-4">
        <img
          className="w-12 h-12"
          src={profileImgUrl}
          alt="A profile photo of Sarah Dole."
        />
        <div>
          <p className="font-semibold text-lg text-neutral-900 line-clamp-2">
            {name}
          </p>
          <p className="font-normal text-sm text-neutral-600">{handle}</p>
        </div>
      </div>
      <blockquote className="font-normal text-base text-neutral-600 line-clamp-6">
        {quote}
      </blockquote>
    </div>
  );
};
