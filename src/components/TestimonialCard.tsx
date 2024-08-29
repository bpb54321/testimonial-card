import profileImgUrl from "../assets/profile-thumbnail.png";

interface TestimonialCardProps {
  quote: string;
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({ quote }) => {
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
          <p className="font-semibold text-lg text-justify text-neutral-900">
            Sarah Dole
          </p>
          <p className="font-normal text-sm text-neutral-600">@sarahdole</p>
        </div>
      </div>
      <blockquote className="font-normal text-base text-neutral-600 line-clamp-6">
        {quote}
      </blockquote>
    </div>
  );
};
