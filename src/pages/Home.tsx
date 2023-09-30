import React from 'react'
import Banner from '../components/home/Banner'
import StudyLevelsTabs from '../components/home/StudyLevelsTabs'
import ChooseUs from '../components/home/ChooseUs'
import FrequentlyQuestions from '../components/home/FrequentlyQuestions'

export default function Home() {
    return (
        <>
            <Banner/>
            <StudyLevelsTabs/>
            <ChooseUs/>
            <FrequentlyQuestions/>
        </>
    )
}