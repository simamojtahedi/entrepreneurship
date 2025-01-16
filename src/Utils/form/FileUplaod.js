import React, { useState } from 'react'
import { Col, Form, Row } from 'react-bootstrap'
import ImageUploading from 'react-images-uploading';
import {HiUpload} from 'react-icons/hi'
import {IoCloseSharp} from 'react-icons/io5'
import {AiFillEdit} from 'react-icons/ai'
import { toast } from 'react-toastify';
import './Form.scss'

const FileUplaod = (props) => {
    const maxNumber = props.maxNumber;

    const onChange = (imageList) => {
      let imageSize = imageList.map(image => image.file.size)
      if (imageSize > 2000000) {
        let newImages = imageList.filter(image => image.file.size < 2000000)
        props.setImages(newImages);
        toast.error('حجم عکس  باید زیر 2 مگابایت باشد')
      } else {
        props.setImages(imageList);
      }
    };

    return (
        <Form.Group className="mb-3" controlId="picture">
            <Form.Label column> بارگذاری عکس </Form.Label>
            <Col>
            <ImageUploading value={props.images} onChange={onChange} maxNumber={maxNumber} dataURLKey="data_url" >
                {({ imageList, onImageUpload, onImageUpdate, onImageRemove, isDragging, dragProps, }) => (
                    <div className="upload__image-wrapper">
                    {!imageList.length &&
                        <button type='button' className='upload-image-btn' style={isDragging ? { color: 'red' } : undefined} onClick={onImageUpload} {...dragProps} >
                        <HiUpload />
                        <span>بارگذاری تصویر (اختیاری)</span>
                        <span>حداکثر اندازه :200 کیلوبایت</span>
                        </button>
                    }
                    {imageList.map((image, index) => (
                        <div key={index} className="image-item">
                        <img src={image['data_url']} alt="" />
                        <div className="image-item__btn-wrapper">
                            <button type='button' className='edit' onClick={() => onImageUpdate(index)}><AiFillEdit /></button>
                            <button type='button' className='delete' onClick={() => onImageRemove(index)}><IoCloseSharp /></button>
                        </div>
                        </div>
                    ))}
                    </div>
                        )}
                </ImageUploading>
            </Col>
        </Form.Group>
    )
}

export default FileUplaod
