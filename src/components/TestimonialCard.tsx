import profileImgUrl from "../assets/profile-thumbnail.png";

export const TestimonialCard: React.FC = () => {
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
      <blockquote className="font-normal text-base text-neutral-600">
        I've been searching for high-quality abstract images for my design
        projects, and I'm thrilled to have found this platform. The variety and
        depth of creativity are astounding!
      </blockquote>
    </div>
  );
};
