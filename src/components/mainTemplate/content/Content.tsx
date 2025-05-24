import '../content/content.css';
import { randomTextGenerator } from "../../../consts/consts";

interface ContentProps {
  titles: string[];
  activeTab: number;
  randomTextGenerator: (wordCount?: number) => string;
}

const Content = (props: ContentProps) => {
  const { titles, activeTab } = props;

  if (!titles) return null;
  return (
    <div className="content_menu">
      <h2>{titles[activeTab]}</h2>
      <p>{randomTextGenerator()}</p>
    </div>
  );
};

export default Content;