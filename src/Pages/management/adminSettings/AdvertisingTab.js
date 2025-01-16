import React, { useState } from 'react'
import Switch from '../../../Utils/switchButton/SwitchButton';

const AdvertisingTab = () => {
    const [ad, setAd] = useState(false);

    return (
        <div className='settings-tab'>
            <h6 className='main_title mt-4'>تنظیمات تبلیغات</h6>
            <div className='settings-tab-content'>
                <p className='m-0'> نمایش تبلیغات در حال حاضر {ad ? 'فعال' : 'غیرفعال'} است، {ad ? 'غیرفعال' : 'فعال'}  شود ؟ </p>
                <Switch
                    id={'ad'}
                    isOn={ad}
                    handleToggle={() => setAd(!ad)}
                />
            </div>
        </div>
    )
}

export default AdvertisingTab
