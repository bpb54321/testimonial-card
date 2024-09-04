import { TestimonialCard } from "./components/TestimonialCard";

const quote =
  "I've been searching for high-quality abstract images for my design " +
  "projects, and I'm thrilled to have found this platform. The variety and " +
  "depth of creativity are astounding!";
const name = "Sarah Dole";
const handle = "@sarahdole";

function App() {
  return (
    <div className="flex flex-row w-full justify-center pt-8">
      <TestimonialCard quote={quote} name={name} handle={handle} />
    </div>
  );
}

export default App;
