import React, { useState } from 'react'
import Switch from '../../../Utils/switchButton/SwitchButton';

const RegisterTab = () => {
    const [value, setValue] = useState(false);

    return (
        <div className='settings-tab'>
            <h6 className='main_title mt-4'>تنظیمات کد معرف</h6>
            <div className='settings-tab-content'>
                <p className='m-0'>ثبت نام با کد معرف در حال حاضر {value ? 'اجباری' : 'اختیاری'} است، {value ? 'اختیاری' : 'اجباری'} شود ؟</p>
                <Switch
                    id={'code'}
                    isOn={value}
                    handleToggle={() => setValue(!value)}
                />
            </div>

            <h6 className='main_title mt-5'>تاریخ:</h6>
            <div className='d-flex align-items-center'>
                <p className='m-0'>جمعه, 29 بهمن 1361 ساعت 00:00:00</p>
            </div>
            
        </div>
    )
}

export default RegisterTab
