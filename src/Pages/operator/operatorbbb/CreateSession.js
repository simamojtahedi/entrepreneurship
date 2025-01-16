import React, { useState } from 'react'
import { Button, Form, Tab, Tabs } from 'react-bootstrap';
import Input from '../../../Utils/form/Input';
import MainModal from '../../../Utils/modal/MainModal';
import Switch from '../../../Utils/switchButton/SwitchButton';
import { useFormik } from 'formik'
import * as Yup from 'yup'

const CreateSession = (props) => {
    const [options, setOptions] = useState({
        record: false,
        autoRecord: false,
        recordAccess: false,
        userPhoto: true,
        onlyTeacherPicture: false,
        usersVoice: true,
        autoDeactiveVoiceAtTheBegining: true,
        privateChat: true,
        publicChat: true,
        note: true
    });

    const SignInSchema = Yup.object().shape({
        code: Yup.string().required('پر کردن این فیلد الزامی است'),
        name: Yup.string().required('پر کردن این فیلد الزامی است'),
        message: Yup.string().required('پر کردن این فیلد الزامی است'),
        time: Yup.string().required('پر کردن این فیلد الزامی است'),
    })

    const formik = useFormik({
        initialValues: {
            code: 'TEST-123-456',
            name: '',
            message: '',
            time: '',
        },
        validateOnMount: true,
        validationSchema: SignInSchema,
        onSubmit: (values,{ resetForm }) => {
            resetForm();
        },
    });
    
    return (
        <>
            <MainModal show={props.show} size='lg' handleClose={props.handleClose} title='ویرایش دوره'>
                <Form onSubmit={formik.handleSubmit}>
                    <Input name='code' label='کد جلسه:' formik={formik} />
                    <Input name='name' label='نام جلسه:' formik={formik} />
                    <Input name='message' label='پیام خوش آمدگویی:' formik={formik} />
                    <Input name='time' label='مدت جلسه:' formik={formik} text='دقیقه' />

                    <Tabs defaultActiveKey="record" id="settings">
                        <Tab eventKey="record" title="تنظیمات ضبط">
                            <Switch text='ضبط جلسه' id={'record'} isOn={options.record} handleToggle={() => setOptions({...options, record: !options.record})} />
                            <Switch text='شروع اتوماتیک ضبط' id={'autoRecord'} isOn={options.autoRecord} handleToggle={() => setOptions({...options, autoRecord: !options.autoRecord})} />
                            <Switch text='دسترسی شروع و پایان ضبط' id={'recordAccess'} isOn={options.recordAccess} handleToggle={() => setOptions({...options, recordAccess: !options.recordAccess})} />
                        </Tab>
                        <Tab eventKey="picture" title="تنظیمات تصویر کاربران">
                            <Switch text='تصویر کاربران' id={'userPhoto'} isOn={options.userPhoto} handleToggle={() => setOptions({...options, userPhoto: !options.userPhoto})} />
                            <Switch text='تصاویر کاربران فقط برای استاد' id={'onlyTeacherPicture'} isOn={options.onlyTeacherPicture} handleToggle={() => setOptions({...options, onlyTeacherPicture: !options.onlyTeacherPicture})} />
                        </Tab>
                        <Tab eventKey="voice" title="تنظیمات صدای کاربران">
                            <Switch text='صدای کاربران' id={'usersVoice'} isOn={options.usersVoice} handleToggle={() => setOptions({...options, usersVoice: !options.usersVoice})} />
                            <Switch text='قطع صدای کاربران هنگام ورود' id={'autoDeactiveVoiceAtTheBegining'} isOn={options.autoDeactiveVoiceAtTheBegining} handleToggle={() => setOptions({...options, autoDeactiveVoiceAtTheBegining: !options.autoDeactiveVoiceAtTheBegining})} />
                        </Tab>
                        <Tab eventKey="chat" title="تنظیمات گفتکو">
                            <Switch text='وضعیت گفتگوی خصوصی' id={'privateChat'} isOn={options.privateChat} handleToggle={() => setOptions({...options, privateChat: !options.privateChat})} />
                            <Switch text='وضعیت گفتگوی عمومی' id={'publicChat'} isOn={options.publicChat} handleToggle={() => setOptions({...options, publicChat: !options.publicChat})} />
                            <Switch text='وضعیت یاداشت ها' id={'note'} isOn={options.note} handleToggle={() => setOptions({...options, note: !options.note})} />
                        </Tab>
                    </Tabs>
                    <Button className='btn-sm px-3' type='submit' disabled={!formik.isValid}>ثبت</Button>
                </Form>
            </MainModal>
        </>
    )
}

export default CreateSession
