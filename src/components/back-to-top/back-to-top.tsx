import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';

import "./back-to-top.css";

type BackToTopProps = {
  onScrollToSection: (sectionName: string) => void;
}

const BackToTop: React.FC<BackToTopProps> = ({onScrollToSection}) => {
  return (
    <button className='real-btn jump-up' onClick={() => onScrollToSection("introSection")}>
      <FontAwesomeIcon icon={faChevronUp} className='arrow-up' />
    </button>
  )
}

export default BackToTop;