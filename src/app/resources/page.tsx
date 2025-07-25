'use client';
import Navbar from '@/components/navbar/page';
import Footer from '@/components/footer/page';
import Campaigns from './components/campaigns';
import Research from './components/research';
import Services from './components/services';


const Resources = () => {

    return (
        <div className="min-h-screen flex flex-col">
            <Navbar/>
            <div className="flex-1 max-w-5xl mx-auto px-4 py-8">
                <h1>RESOURCES</h1>
            </div>
            <Footer/>
        </div>
    );
}

export default Resources;