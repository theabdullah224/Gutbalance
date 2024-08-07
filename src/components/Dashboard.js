import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes, faFilePdf } from '@fortawesome/free-solid-svg-icons';
import Sidebar from './Sidebar';
import Logo from './Resource/logo2.png'
import { Link } from 'react-router-dom';

const DashboardContainer = styled.div`
  margin-right: ${(props) => (props.isSidebarOpen ? '250px' : '0')};
  padding: 20px;
  transition: margin-right 0.3s ease;
//   border: 2px solid red;
  height: fit-content;
`;

const ToggleButton = styled.button`
  position: fixed;
  top: 16px;
  right: 20px;
  background: none;
  border: none;
  color: grey;
  font-size: 24px;
  z-index: 1001;
  cursor: pointer;

  &:focus {
    outline: none;
  }

  &:hover {
    background-color: transparent;
  }
`;

const DashboardTitle = styled.h1`
  font-size: 36px; /* Adjust the size as needed */
  font-weight: bold;
  margin-bottom: 20px;
`;

const PDFIcon = styled(FontAwesomeIcon)`
  font-size: 36px; /* Adjust the size as needed */
  margin: 10px;
  cursor: pointer;
    color:#738065;
  &:hover {
    color: #98ad81; /* Change color on hover */
  }
`;

const Dashboard = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [pdfList, setPdfList] = useState([]);
    const [selectedPdfUrl, setSelectedPdfUrl] = useState(null);
  
    const toggleSidebar = () => {
      setIsSidebarOpen(!isSidebarOpen);
    };
  
    useEffect(() => {
      // Fetch PDF list from local storage
      const storedPdfList = JSON.parse(localStorage.getItem('pdfList')) || [];
      // console.log('Stored PDF List:', storedPdfList);
      setPdfList(storedPdfList);
    }, []);
  
    const handlePdfClick = (pdfData) => {
        
      // Open PDF in a new tab
      const pdfWindow = window.open();
      pdfWindow.document.write(
        `<iframe width='100%' height='100%' src='${pdfData}'></iframe>`
      );
    };
    
    return (
      <>
        <nav className='fixed z-50 top-0 bg-white  w-screen py-6 px-14'>
          <Link to="/">
          <img src={Logo} alt="" className='w-32' />
          </Link>
        </nav>
        <div className="z-50   fixed top-20 py-12 pb-0  bg-white w-screen   pl-14 pr-14">
          <h1 className='py-2     text-2xl font-bold w-[80%] ' style={{borderBottom:"1px solid #D3D3D3"}} >
            My Files
          </h1>
        </div>
        <Sidebar isOpen={isSidebarOpen} />
        <ToggleButton  onClick={toggleSidebar}>
          <FontAwesomeIcon icon={isSidebarOpen ? faTimes : faBars} />
        </ToggleButton>
        <DashboardContainer isSidebarOpen={isSidebarOpen}>
          
          <div className='h-fit flex flex-wrap px-7 bg-white mt-40 ' >
          {pdfList.length > 0 ? (
  pdfList.map((pdf) => (
    <div key={pdf.id} onClick={() => handlePdfClick(pdf.data)} className='hover:scale-110   hover:cursor-pointer shadow-md m-2 w-40 flex flex-col items-center justify-center h-40 px-5'>
      <PDFIcon
        icon={faFilePdf}
        onClick={() => handlePdfClick(pdf.data)}
      />
      <div className='pdf-date  flex items-center justify-center pointer-events-none select-none'>
        {(() => {
          // console.log('PDF data:', pdf); // Add this log
          if (pdf.generatedDate) {
            const generatedDate = new Date(pdf.generatedDate);
            // console.log('Parsed date:', generatedDate); // Add this log
            if (!isNaN(generatedDate.getTime())) {
              const day = generatedDate.getDate().toString().padStart(2, '0');
              const month = (generatedDate.getMonth() + 1).toString().padStart(2, '0');
              const year = generatedDate.getFullYear();
              return `${day}/${month}/${year}`;
            }
          }
          return 'Date not available';
        })()}
      </div>
    </div>
  ))
) : (
  'No PDFs available'
)}
    </div>
        </DashboardContainer>
      </>
    );
  };
  
  export default Dashboard;
