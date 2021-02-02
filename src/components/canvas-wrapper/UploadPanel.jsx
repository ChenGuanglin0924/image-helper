import { useContext } from 'react';
import { Upload } from 'antd';
import { InboxOutlined } from '@ant-design/icons';
import HelperContext from '../../utils/HelperContext';

import 'antd/es/upload/style/css';

const { Dragger } = Upload;

const UploadPanel = () => {
    const { updateState, ctx, images } = useContext(HelperContext);

    // const getBase64 = (img, callback) => {
    //     const reader = new FileReader();
    //     reader.addEventListener('load', () => callback(reader.result));
    //     reader.readAsDataURL(img);
    //   }

    const beforeUpload = (file) => {
        updateState({
            images: [file],
        });
        // updateState({
        //     images: file
        // })
        return false;
    };

    return (
        <Dragger multiple accept="image/*" beforeUpload={beforeUpload} /*  itemRender={itemRender} */>
            <p className="ant-upload-drag-icon">
                <InboxOutlined />
            </p>
            <p className="ant-upload-text">Click or drag file to this area to upload</p>
            <p className="ant-upload-hint">
                Support for a single or bulk upload. Strictly prohibit from uploading company data or other band files
            </p>
        </Dragger>
    );
};

export default UploadPanel;
