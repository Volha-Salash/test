import '../banners/banners.css';
import PropTypes from 'prop-types';

const Banners = (props) => {
    const { bannerData } = props;

    if (!bannerData) return null;
    return (
        <div className="banners">
            {bannerData.map((banner, index) => (
                <a key={index}
                    href={banner.link}
                    className="banner">
                    {banner.text}
                </a>
            ))}
        </div>
    );
};

Banners.propTypes = {
    bannerData: PropTypes.array.isRequired
};

export default Banners;
