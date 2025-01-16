import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import FileUplaod from '../../../Utils/form/FileUplaod';

const Upload = () => {
    const [images, setImages] = useState([]);

    return (
        <div className='mt-3'>
            <Form>
              <FileUplaod
                    maxNumber='1'
                    images={images}
                    setImages={setImages}
                />
                
                <Button variant="primary" type="submit" className='btn-sm px-4 main-btn' >
                    ثبت
                </Button>
            </Form>
        </div>
    )
}

export default Upload
