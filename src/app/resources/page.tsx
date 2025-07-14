// 'use client';

// import React, { useEffect, useState } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { isMobile } from 'react-device-detect';
// import {
//   getCampaigns,
//   getResearch,
//   getServices,
//   getChosenFormResponse,
//   getServicesByTheme,
// } from '@/actions/researchcampaigns';
// import Footer from '@/components/footer/page';
// import L2PageInfoBox from '@/components/L2PageInfoBox';
// import Menubar from '@/components/MenubarComponent';
// import MobileMenubar from '@/components/mobile/MobileMenubarComponent';
// import MobileThemeBar from '@/components/mobile/MobileThemeBar';
// import Navbar from '@/components/NavbarComponent';
// import OSM from '@/components/OSMComponent';
// import ResourceGallery from '@/components/ResourceGallery';
// import ServicesDescriptionBox from '@/components/ServicesDescriptionBox';
// import ServicesSidebar from '@/components/ServicesSideBarComponent';

// const menuItems = ['Services', 'Campaigns', 'Research'] as const;
// const sideBarOptions = [
//   'Community Health',
//   'Employment + Business Assistance',
//   'Food Banks',
//   'Housing',
//   'Legal + Immigration Services',
//   'Utility Assistance',
//   'Youth Development',
// ];

// type MenuChoice = typeof menuItems[number];

// type RootState = ReturnType<typeof import('@/store').default.getState>; // adjust to your store file

// const ResearchCampaigns: React.FC = () => {
//   const dispatch = useDispatch();
//   const campaigns = useSelector((state: RootState) => state.researchcampaigns.campaigns);
//   const research = useSelector((state: RootState) => state.researchcampaigns.research);
//   const services = useSelector((state: RootState) => state.researchcampaigns.services);
//   const selectedFormData = useSelector((state: RootState) => state.researchcampaigns.selectedFormData);

//   const [menuChoice, setMenuChoice] = useState<MenuChoice>('Services');
//   const [displayFormData, setDisplayFormData] = useState(false);
//   const [currentTheme, setCurrentTheme] = useState<string | null>(null);

//   useEffect(() => {
//     dispatch(getCampaigns());
//     dispatch(getResearch());
//     dispatch(getServices());
//   }, [dispatch]);

//   const onClickTheme = async (item: string) => {
//     await dispatch(getServicesByTheme(item));
//     setCurrentTheme(item);
//     setDisplayFormData(false);
//   };

//   const onClickDataItem = (item: { id: string }) => {
//     dispatch(getChosenFormResponse(item.id));
//     setDisplayFormData(true);
//   };

//   const onClickExitButton = () => setDisplayFormData(false);

//   const renderMenuChoice = (item: MenuChoice) => {
//     switch (item) {
//       case 'Services':
//         return (
//           <div className="h-[calc(100vh-20vh)]">
//             <OSM
//               markers={services}
//               onClick={onClickDataItem}
//               active
//               darkMode
//               height="calc(100vh - 20vh)"
//             />
//           </div>
//         );
//       case 'Campaigns':
//         return <ResourceGallery items={campaigns} mobile={true} />;
//       case 'Research':
//         return <ResourceGallery items={research} mobile={true} />;
//     }
//   };

//   const renderMenuChoiceDesktop = (item: MenuChoice) => {
//     switch (item) {
//       case 'Services':
//         return (
//           <div className="flex">
//             <ServicesSidebar
//               onClick={onClickTheme}
//               selectedOption={currentTheme}
//               sideBarOptions={sideBarOptions}
//             />
//             <div className="flex-1 p-4">
//               {currentTheme == null && <ServicesDescriptionBox />}
//               <OSM
//                 markers={currentTheme ? services : null}
//                 onClick={onClickDataItem}
//                 active
//                 darkMode
//                 height="800px"
//               />
//             </div>
//           </div>
//         );
//       case 'Campaigns':
//         return <ResourceGallery items={campaigns} mobile={false} />;
//       case 'Research':
//         return <ResourceGallery items={research} mobile={false} />;
//     }
//   };

//   const infoBox = displayFormData && selectedFormData ? (
//     <div className="p-4">
//       <L2PageInfoBox
//         questionsToAnswers={selectedFormData.answers}
//         onClickExitButton={onClickExitButton}
//         mobile={false}
//       />
//     </div>
//   ) : null;

//   const mobileInfoBox = displayFormData && selectedFormData ? (
//     <div className="p-4">
//       <L2PageInfoBox
//         questionsToAnswers={selectedFormData.answers}
//         onClickExitButton={onClickExitButton}
//         mobile={true}
//       />
//     </div>
//   ) : null;

//   return (
//     <div className="min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white">
//       {isMobile ? (
//         <>
//           <div className="px-4 py-2">
//             <MobileMenubar
//               items={menuItems as unknown as string[]}
//               handleMenuChoice={setMenuChoice}
//               menuChoice={menuChoice}
//             />
//             <Navbar mobile />
//           </div>
//           <div>{renderMenuChoice(menuChoice)}</div>
//           {menuChoice === 'Services' && (
//             <>
//               <MobileThemeBar
//                 themes={sideBarOptions}
//                 currTheme={currentTheme}
//                 onClickTheme={onClickTheme}
//               />
//               {mobileInfoBox}
//             </>
//           )}
//           {menuChoice !== 'Services' && <Footer mobile admin={false} />}
//         </>
//       ) : (
//         <>
//           <Navbar mobile={false} />
//           <div className="text-3xl font-bold px-6 py-4">RESOURCES</div>
//           <Menubar
//             items={menuItems as unknown as string[]}
//             handleMenuChoice={setMenuChoice}
//             selectedOption={menuChoice}
//           />
//           <div>
//             {menuChoice === 'Services' && infoBox}
//             {renderMenuChoiceDesktop(menuChoice)}
//           </div>
//           <Footer mobile={false} admin={false} />
//         </>
//       )}
//     </div>
//   );
// };

// export default ResearchCampaigns;
