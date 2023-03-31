import { forwardRef, useState } from 'react';
import images from '~/assets/images';
import classNames from 'classnames';

import styles from './Image.module.scss';
// ref ở đây là lấy vị trí từ componet cha
function Image({ src, alt, className, fallback, ...props }, ref) {
    const [imageError, setImageError] = useState('');
    const handleImgError = () => {
        setImageError(fallback || images.imageError); //  fallback || images.imageError: là khi không truyền fallback thì sẽ lấy ảnh từ images.imageError còn không sẽ lấy ảnh trừ fallback truyền vào
    };

    return (
        <img
            // styles.wrapper là css để xóa thuộc tính mặc định khi img error
            // className là khi ảnh hiển thị thì ăn theo css of bên thằng cha
            className={classNames(styles.wrapper, className)}
            src={imageError || src}
            alt={alt}
            ref={ref}
            {...props}
            fallback={fallback}
            onError={handleImgError}
        />
    );
}

export default forwardRef(Image);
