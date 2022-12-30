import React from 'react'

import Navbar from '../../Components/Navbar/Navbar'
import Header from '../../Components/Header'
import Footer from '../../Components/Footer/Footer'
import FullPageTabs from '../../Components/FullPageTabs/FullPageTabs'

const BibleSupport = () => {
    const backgroundImage: string = "bg-studyhelp";
    const title: string = '聖書サポート';
    const paragraph: string = "すべての勉強ガイドや教材を楽しみしてください。聖書の学び会の前にできるだけ早くアウトラインをアップロードしてみます。質問があればぜひご連絡してください。";
  return (
    <>
        <Navbar />
        <Header title={title} paragraph={paragraph} backgroundImage={backgroundImage} />
        <FullPageTabs />
        <Footer />
    </>
  )
}

export default BibleSupport