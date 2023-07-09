import SocialMediaIcon from "./social-media-icon";

import { Instagram, Twitter, Facebook } from "@mui/icons-material";

const SocialMedia = () => {
  return (
    <div className="social-media-container">
      <SocialMediaIcon icon={<Facebook />} />
      <SocialMediaIcon icon={<Twitter />} />
      <SocialMediaIcon icon={<Instagram />} />
    </div>
  );
};

export default SocialMedia;
