'use client';

import React, { useState } from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

import Navbar from '@/components/navbar/page';
import Footer from '@/components/footer/page';
import Campaigns from './components/campaigns';
import Research from './components/research';
import Services from './components/services';

const Resources = () => {
    const [activeComponent, setActiveComponent] = useState('services');

    return (
        <div className="min-h-screen flex flex-col">
            <Navbar/>
            <div className="flex-1 max-w-5xl px-6 py-8">
                <h1>RESOURCES</h1>
                <div className="flex flex-col justify-center mx-auto">
                    <ButtonGroup 
                        fullWidth={true} 
                        className="mb-8"
                        sx={{
                            'backgroundColor': 'transparent',
                            'borderColor': 'transparent',
                            'button': {
                                'backgroundColor': '#2F343E',
                                'borderColor': 'transparent',
                                'borderRadius': '16px',
                                'color': 'white',
                                'fontFamily': 'Work Sans, sans-serif',
                                'textTransform': 'none',
                                'fontSize': 'large',
                                'fontWeight': 'bold',
                            },
                            'button.active': {
                                'backgroundColor': '#282c31',
                            },  
                        }}
                    >
                        <Button 
                            onClick={() => setActiveComponent('services')} 
                            className={activeComponent === 'services' ? 'active' : ''}
                        >
                            Services
                        </Button>
                        <Button 
                            onClick={() => setActiveComponent('campaigns')} 
                            className={activeComponent === 'campaigns' ? 'active' : ''}
                        >
                            Campaigns
                        </Button>
                        <Button 
                            onClick={() => setActiveComponent('research')} 
                            className={activeComponent === 'research' ? 'active' : ''}
                        >
                            Research
                        </Button>
                    </ButtonGroup>

                    {activeComponent === 'services' && <Services />}
                    {activeComponent === 'research' && <Research />}
                    {activeComponent === 'campaigns' && <Campaigns />}
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default Resources;