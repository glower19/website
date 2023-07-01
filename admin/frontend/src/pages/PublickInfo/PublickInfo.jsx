import React, { useEffect, useState } from 'react';
import Chart from './Chart';
import './style.sass'
import { setCountFc } from '../../API/setCountFc';
import { url } from '../../API/url';
import { getCountsFc } from '../../API/getCounts';
import { day, week, month } from '../../constants/constans';
const PublickInfo = () => {
    const [visitesDay, setVisitesDay] = useState([])
    const [visitesWeek, setVisitesWeek] = useState([])
    const [visitesMonth, setVisitesMonth] = useState([])
    const [deviceArrayDay, setDeviceArrayDay] = useState([])
    const [deviceArrayWeek, setDeviceArrayWeek] = useState([])
    const [deviceArrayMonth, setDeviceArrayMonth] = useState([])


    useEffect(() => {
        getCounts(getCountsFc)
    }, [])
    function getCounts(func) {
        const statistickDay = Date.now() - day
        const statistickWeek = Date.now() - week
        const statistickMonth = Date.now() - month
        func(statistickDay, Date.now(), setVisitesDay, setDeviceArrayDay)
        func(statistickWeek, Date.now(), setVisitesWeek, setDeviceArrayWeek)
        func(statistickMonth, Date.now(), setVisitesMonth, setDeviceArrayMonth)
    }
    function getCountPer100(array, str) {
        const mobile = +array?.[0]?.count
        const desktop = +array?.[1]?.count
        if (str === 'mobile') {
            return (mobile*100 / (mobile + desktop)).toFixed(1)
        } else {
            return (desktop*100 / (mobile + desktop)).toFixed(1)
        }

    }
    return (
        <div className='publickInfo-container'>
            <div className='publickInfo-title'>Общая информация</div>
            <div className='publickInfo-statistics'>
                <div className='publickInfo-statistics-item'>
                    <div>
                        {visitesDay?.length}
                    </div>
                    <div className='fs16-blue'>
                        {getCountPer100(deviceArrayDay, "mobile")}% мобильник
                    </div>
                    <div className='fs16-blue'>
                        {getCountPer100(deviceArrayDay, "desktop")}% desktop
                    </div>
                    <div className='period'>За день</div>
                </div>
                <div className='publickInfo-statistics-item'>
                    <div>
                        {visitesWeek?.length}
                    </div>
                    <div className='fs16-blue'>
                        {getCountPer100(deviceArrayWeek, "mobile")}% мобильник
                    </div>
                    <div className='fs16-blue'>
                        {getCountPer100(deviceArrayWeek, "desktop")}% desktop
                    </div>
                    <div className='period'>За неделю</div>
                </div>
                <div className='publickInfo-statistics-item'>
                    <div>
                        {visitesMonth?.length}
                    </div>
                    <div className='fs16-blue'>
                        {getCountPer100(deviceArrayMonth, "mobile")}% мобильник
                    </div>
                    <div className='fs16-blue'>
                        {getCountPer100(deviceArrayMonth, "desktop")}% desktop
                    </div>
                    <div className='period'>За месяц</div>
                </div>
            </div>
            <Chart visitesArr={visitesWeek} />
        </div>
    );
};

export default PublickInfo;