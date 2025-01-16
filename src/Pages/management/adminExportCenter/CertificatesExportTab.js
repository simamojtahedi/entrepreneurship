import React, { useState } from 'react'
import Select from 'react-select';

const CertificatesExportTab = () => {
    const [selectedOption, setSelectedOption] = useState(null);

    const options = [
        {label: 'مهندسي صنايع - مهندسي لجستيك و زنجيره تامين' , value: '11' },
        {label: 'مهندسي صنايع - صنايع' , value: '12' },
        {label: 'مهندسي صنايع-مديريت مهندسي' , value: '13' },
        {label: 'مهندسي صنايع- سيستم هاي مالي' , value: '14' },
        {label: 'مهندسي صنايع' , value: '15' },
        {label: 'مهندسي برق - سيستمهاي الكترونيك ديجيتال' , value: '16' },
        {label: 'مهندسي برق- قدرت-الكترونيك قدرت و ماشينهاي الكتريكي' , value: '17' },
        {label: 'مهندسي برق' , value: '11' },
        {label: 'مهندسي ايمني، بهداشت و محيط زيست(HSE)' , value: '18' },
        {label: 'مهندسي ايمني صنعتي' , value: '19' },
        {label: 'معماري داخلي' , value: '20' },
    ];

    return (
        <div className='exportTab'>
            <h6 className='main_title mt-4'>خروجی مدارک</h6>
            <div className='item'>
                <h6>همه مدارک درخواستی:</h6>
                <a href='#' className='main-btn'> دانلود CSV</a>
            </div>

            <div className='item'>
                <span className='title'>مدارک دوره:</span>
                <Select
                    className='select'
                    defaultValue={selectedOption}
                    onChange={setSelectedOption}
                    options={options}
                    isSearchable={true}
                    name='group'
                    placeholder='انتخاب دوره'
                    noOptionsMessage={ ({ inputValue: string }) => 'یافت نشد'}
                />
                <a href='#' className='main-btn'> دانلود CSV</a>
            </div>
            
        </div>
    )
}

export default CertificatesExportTab
