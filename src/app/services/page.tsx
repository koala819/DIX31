import Hero from "@/components/atoms/Hero";
import Presentation from "@/components/atoms/Presentation";
import Description from "@/components/atoms/Description";
import CommentList from "@/components/molecules/CommentList";
import { comments } from "@/lib/comments";
import Projets from "@/components/atoms/Projets";
import Rates from "@/components/atoms/Rates";
export default function Page() {
  return (
    <section className='my-16'>
      <Hero />
      <Presentation />
      <Description />
      <CommentList comments={comments} />
      <Projets />
      <Rates />
    </section>
  );
}
