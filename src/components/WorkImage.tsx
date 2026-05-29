import { MdArrowOutward } from "react-icons/md";

interface Props {
  image: string;
  alt?: string;
  link?: string;
}

const WorkImage = ({ image, alt, link }: Props) => {
  return (
    <div className="work-image">
      <a
        className="work-image-in"
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        data-cursor="disable"
      >
        {/* Browser chrome bar */}
        <div className="browser-bar">
          <div className="browser-dots">
            <span />
            <span />
            <span />
          </div>
          <div className="browser-url">{link?.replace("https://", "")}</div>
        </div>

        {/* Screenshot */}
        <div className="work-image-frame">
          <img src={image} alt={alt} loading="lazy" />

          {/* Hover overlay */}
          <div className="work-image-overlay">
            <div className="work-visit-btn">
              Visit Site <MdArrowOutward />
            </div>
          </div>
        </div>
      </a>
    </div>
  );
};

export default WorkImage;
